<<<<<<< HEAD
// Initialize map
        let map;
        let marker;
        let currentLat = 14.676006;
        let currentLng = 121.043700;

        function initMap() {
            // Create map centered on Quezon City
            map = L.map('map').setView([currentLat, currentLng], 16);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add draggable marker
            marker = L.marker([currentLat, currentLng], {
                draggable: true
            }).addTo(map);

            // Update coordinates when marker is dragged
            marker.on('dragend', function(e) {
                const position = marker.getLatLng();
                updateCoordinates(position.lat, position.lng);
            });

            // Update marker position when map is clicked
            map.on('click', function(e) {
                marker.setLatLng(e.latlng);
                updateCoordinates(e.latlng.lat, e.latlng.lng);
            });
        }

        function updateCoordinates(lat, lng) {
            currentLat = lat;
            currentLng = lng;
            document.getElementById('coordinates').textContent = 
                `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        }

        // Use My Location button
        document.getElementById('useLocationBtn').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    map.setView([lat, lng], 16);
                    marker.setLatLng([lat, lng]);
                    updateCoordinates(lat, lng);
                }, function(error) {
                    alert('Error getting your location: ' + error.message);
                });
            } else {
                alert('Geolocation is not supported by your browser');
            }
        });

        // Initialize map when page loads
        window.addEventListener('load', initMap);

        // Department mapping
        const departmentMapping = {
            health: {
                name: 'Health Department',
                team: 'Barangay Health Unit'
            },
            fire: {
                name: 'Fire & Safety Department',
                team: 'Emergency Response Team'
            },
            water: {
                name: 'Public Works Department',
                team: 'Water & Utilities Division'
            },
            infrastructure: {
                name: 'Public Works Department',
                team: 'Infrastructure & Maintenance Division'
            },
            traffic: {
                name: 'Traffic Management Office',
                team: 'Traffic Enforcement Unit'
            },
            waste: {
                name: 'Sanitation Department',
                team: 'Waste Management Division'
            },
            security: {
                name: 'Public Safety Office',
                team: 'Barangay Peacekeeping Action Team'
            },
            environment: {
                name: 'Environment & Natural Resources Office',
                team: 'Environmental Protection Unit'
            },
            other: {
                name: 'General Services Department',
                team: 'Public Affairs Division'
            }
        };

        // Priority suggestions based on category
        const prioritySuggestions = {
            health: 'High',
            fire: 'High',
            security: 'High',
            water: 'Medium',
            infrastructure: 'Medium',
            traffic: 'Medium',
            waste: 'Medium',
            environment: 'Low',
            other: 'Low'
        };

        // Category change handler
        document.getElementById('category').addEventListener('change', function() {
            const category = this.value;
            const departmentInfo = document.getElementById('departmentInfo');
            const prioritySuggestion = document.getElementById('prioritySuggestion');

            if (category && departmentMapping[category]) {
                // Show department info
                document.getElementById('departmentName').textContent = departmentMapping[category].name;
                document.getElementById('responseTeam').textContent = departmentMapping[category].team;
                departmentInfo.classList.remove('hidden');

                // Show priority suggestion
                const suggestedPriority = prioritySuggestions[category];
                document.getElementById('suggestedPriority').textContent = suggestedPriority;
                document.getElementById('suggestionCategory').textContent = this.options[this.selectedIndex].text;
                prioritySuggestion.classList.remove('hidden');
            } else {
                departmentInfo.classList.add('hidden');
                prioritySuggestion.classList.add('hidden');
            }
        });

        // Apply suggestion button
        document.getElementById('applySuggestionBtn').addEventListener('click', function() {
            const suggestedPriority = document.getElementById('suggestedPriority').textContent.toLowerCase();
            document.getElementById('priority').value = suggestedPriority;
        });

        // File upload handler
        document.getElementById('photoUpload').addEventListener('change', function() {
            const fileCount = this.files.length;
            const fileCountText = document.getElementById('fileCount');
            
            if (fileCount > 0) {
                fileCountText.textContent = `${fileCount} file${fileCount > 1 ? 's' : ''} selected`;
            } else {
                fileCountText.textContent = 'No files selected';
            }
        });

        // Notification dropdown toggle
        document.getElementById('notificationBtn').addEventListener('click', function() {
            const dropdown = document.getElementById('notificationDropdown');
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('notificationDropdown');
            const button = document.getElementById('notificationBtn');
            
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Track Progress button handler
        document.getElementById('trackProgressBtn').addEventListener('click', function() {
            window.location.href = 'track-progress.html';
        });

        // Form submission
        document.getElementById('reportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                issueTitle: document.getElementById('issueTitle').value,
                category: document.getElementById('category').value,
                priority: document.getElementById('priority').value,
                description: document.getElementById('description').value,
                address: document.getElementById('address').value,
                latitude: currentLat,
                longitude: currentLng,
                department: departmentMapping[document.getElementById('category').value]
            };

            console.log('Report submitted:', formData);
            alert('Report submitted successfully!');
            window.location.href = 'dashboard.html';
        });

        // Handle logout
        function handleLogout() {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        }

        // Load user data
        window.addEventListener('load', function() {
            const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
            if (user.firstName && user.lastName) {
                document.getElementById('userName').textContent = `${user.firstName} ${user.lastName}`;
            }
=======
// Initialize map
        let map;
        let marker;
        let currentLat = 14.676006;
        let currentLng = 121.043700;

        function initMap() {
            // Create map centered on Quezon City
            map = L.map('map').setView([currentLat, currentLng], 16);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add draggable marker
            marker = L.marker([currentLat, currentLng], {
                draggable: true
            }).addTo(map);

            // Update coordinates when marker is dragged
            marker.on('dragend', function(e) {
                const position = marker.getLatLng();
                updateCoordinates(position.lat, position.lng);
            });

            // Update marker position when map is clicked
            map.on('click', function(e) {
                marker.setLatLng(e.latlng);
                updateCoordinates(e.latlng.lat, e.latlng.lng);
            });
        }

        function updateCoordinates(lat, lng) {
            currentLat = lat;
            currentLng = lng;
            document.getElementById('coordinates').textContent = 
                `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        }

        // Use My Location button
        document.getElementById('useLocationBtn').addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    map.setView([lat, lng], 16);
                    marker.setLatLng([lat, lng]);
                    updateCoordinates(lat, lng);
                }, function(error) {
                    alert('Error getting your location: ' + error.message);
                });
            } else {
                alert('Geolocation is not supported by your browser');
            }
        });

        // Initialize map when page loads
        window.addEventListener('load', initMap);

        // Department mapping
        const departmentMapping = {
            health: {
                name: 'Health Department',
                team: 'Barangay Health Unit'
            },
            fire: {
                name: 'Fire & Safety Department',
                team: 'Emergency Response Team'
            },
            water: {
                name: 'Public Works Department',
                team: 'Water & Utilities Division'
            },
            infrastructure: {
                name: 'Public Works Department',
                team: 'Infrastructure & Maintenance Division'
            },
            traffic: {
                name: 'Traffic Management Office',
                team: 'Traffic Enforcement Unit'
            },
            waste: {
                name: 'Sanitation Department',
                team: 'Waste Management Division'
            },
            security: {
                name: 'Public Safety Office',
                team: 'Barangay Peacekeeping Action Team'
            },
            environment: {
                name: 'Environment & Natural Resources Office',
                team: 'Environmental Protection Unit'
            },
            other: {
                name: 'General Services Department',
                team: 'Public Affairs Division'
            }
        };

        // Priority suggestions based on category
        const prioritySuggestions = {
            health: 'High',
            fire: 'High',
            security: 'High',
            water: 'Medium',
            infrastructure: 'Medium',
            traffic: 'Medium',
            waste: 'Medium',
            environment: 'Low',
            other: 'Low'
        };

        // Category change handler
        document.getElementById('category').addEventListener('change', function() {
            const category = this.value;
            const departmentInfo = document.getElementById('departmentInfo');
            const prioritySuggestion = document.getElementById('prioritySuggestion');

            if (category && departmentMapping[category]) {
                // Show department info
                document.getElementById('departmentName').textContent = departmentMapping[category].name;
                document.getElementById('responseTeam').textContent = departmentMapping[category].team;
                departmentInfo.classList.remove('hidden');

                // Show priority suggestion
                const suggestedPriority = prioritySuggestions[category];
                document.getElementById('suggestedPriority').textContent = suggestedPriority;
                document.getElementById('suggestionCategory').textContent = this.options[this.selectedIndex].text;
                prioritySuggestion.classList.remove('hidden');
            } else {
                departmentInfo.classList.add('hidden');
                prioritySuggestion.classList.add('hidden');
            }
        });

        // Apply suggestion button
        document.getElementById('applySuggestionBtn').addEventListener('click', function() {
            const suggestedPriority = document.getElementById('suggestedPriority').textContent.toLowerCase();
            document.getElementById('priority').value = suggestedPriority;
        });

        // File upload handler
        document.getElementById('photoUpload').addEventListener('change', function() {
            const fileCount = this.files.length;
            const fileCountText = document.getElementById('fileCount');
            
            if (fileCount > 0) {
                fileCountText.textContent = `${fileCount} file${fileCount > 1 ? 's' : ''} selected`;
            } else {
                fileCountText.textContent = 'No files selected';
            }
        });

        // Notification dropdown toggle
        document.getElementById('notificationBtn').addEventListener('click', function() {
            const dropdown = document.getElementById('notificationDropdown');
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('notificationDropdown');
            const button = document.getElementById('notificationBtn');
            
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Track Progress button handler
        document.getElementById('trackProgressBtn').addEventListener('click', function() {
            window.location.href = 'track-progress.html';
        });

        // Form submission
        document.getElementById('reportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                issueTitle: document.getElementById('issueTitle').value,
                category: document.getElementById('category').value,
                priority: document.getElementById('priority').value,
                description: document.getElementById('description').value,
                address: document.getElementById('address').value,
                latitude: currentLat,
                longitude: currentLng,
                department: departmentMapping[document.getElementById('category').value]
            };

            console.log('Report submitted:', formData);
            alert('Report submitted successfully!');
            window.location.href = 'dashboard.html';
        });

        // Handle logout
        function handleLogout() {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        }

        // Load user data
        window.addEventListener('load', function() {
            const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
            if (user.firstName && user.lastName) {
                document.getElementById('userName').textContent = `${user.firstName} ${user.lastName}`;
            }
>>>>>>> 3b33e62a0a69f4dd16dcdab8dcbd041823ffe907
        });