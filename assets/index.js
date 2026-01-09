// Initialize data
    let requests = JSON.parse(localStorage.getItem('requests') || '[]');

    // Load initial data
    document.addEventListener('DOMContentLoaded', function() {
      updateStats();
      displayRecentRequests();
    });

    // Form submission
    document.getElementById('requestForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const requestType = document.getElementById('requestType').value;
      const priority = document.getElementById('priority').value;
      const purpose = document.getElementById('purpose').value;

      const newRequest = {
        id: 'REQ-' + Date.now(),
        type: requestType,
        priority: priority,
        purpose: purpose,
        status: 'PENDING',
        date: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      requests.unshift(newRequest);
      localStorage.setItem('requests', JSON.stringify(requests));

      // Show success message
      const successMsg = document.getElementById('successMessage');
      successMsg.classList.add('show');
      setTimeout(() => successMsg.classList.remove('show'), 3000);

      // Reset form
      this.reset();

      // Update displays
      updateStats();
      displayRecentRequests();
      addNotification('Request Submitted', `Your ${requestType} request has been submitted successfully.`);
    });

    // Update statistics
    function updateStats() {
      const pending = requests.filter(r => r.status === 'PENDING').length;
      const ready = requests.filter(r => r.status === 'READY').length;
      
      document.getElementById('pendingCount').textContent = pending;
      document.getElementById('readyCount').textContent = ready;
    }

    // Display recent requests
    function displayRecentRequests() {
      const container = document.getElementById('recentRequests');
      
      if (requests.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-inbox"></i>
            <p>No requests yet</p>
          </div>
        `;
        return;
      }

      const recentFive = requests.slice(0, 5);
      container.innerHTML = recentFive.map(req => `
        <div class="request-item">
          <div class="request-header">
            <span class="request-title">${req.type}</span>
            <span class="status-badge status-${req.status.toLowerCase()}">${req.status}</span>
          </div>
          <div class="request-date">
            ${new Date(req.date).toLocaleDateString()} • ${req.id}
          </div>
        </div>
      `).join('');
    }

    // Add notification
    function addNotification(title, text) {
      const container = document.getElementById('notifications');
      const notification = document.createElement('div');
      notification.className = 'notification-item';
      notification.innerHTML = `
        <div class="notification-icon">
          <i class="fas fa-bell"></i>
        </div>
        <div class="notification-content">
          <div class="notification-title">${title}</div>
          <div class="notification-text">${text}</div>
          <div class="notification-time">Just now</div>
        </div>
      `;
      
      if (container.querySelector('.empty-state')) {
        container.innerHTML = '';
      }
      
      container.insertBefore(notification, container.firstChild);
    }

    // Fill request type from service card
    function fillRequestType(type) {
      document.getElementById('requestType').value = type;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Logout
    function logout() {
      if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
        // Redirect to login page in real implementation
      }
    }