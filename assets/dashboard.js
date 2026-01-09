<<<<<<< HEAD
let waterLevel = 45;
    let rainfall = 12;
    let events = [];

    function updateWaterLevel() {
      waterLevel = Math.max(0, Math.min(150, waterLevel + (Math.random() - 0.5) * 5));
      
      const percentage = (waterLevel / 150) * 100;
      document.getElementById('waterFill').style.height = percentage + '%';
      document.getElementById('waterLevelValue').textContent = Math.round(waterLevel);
      document.getElementById('currentLevelDisplay').textContent = Math.round(waterLevel) + ' cm';
      
      updateAlertStatus();
      updateStatCard();
    }

    function updateAlertStatus() {
      const alertBar = document.getElementById('alertStatusBar');
      const alertCount = document.getElementById('alertCount');
      
      if (waterLevel >= 100) {
        alertBar.className = 'alert-status danger';
        alertBar.innerHTML = `
          <div class="alert-icon">🚨</div>
          <div class="alert-content">
            <h3>CRITICAL: High Water Level</h3>
            <p>Immediate evacuation may be required. Follow emergency protocols.</p>
          </div>
        `;
        alertCount.textContent = '1';
      } else if (waterLevel >= 70) {
        alertBar.className = 'alert-status warning';
        alertBar.innerHTML = `
          <div class="alert-icon">⚠️</div>
          <div class="alert-content">
            <h3>WARNING: Elevated Water Level</h3>
            <p>Monitor situation closely. Prepare for possible flooding.</p>
          </div>
        `;
        alertCount.textContent = '1';
      } else {
        alertBar.className = 'alert-status safe';
        alertBar.innerHTML = `
          <div class="alert-icon">✅</div>
          <div class="alert-content">
            <h3>Water Level: Safe</h3>
            <p>All systems operating normally. No flood risk detected.</p>
          </div>
        `;
        alertCount.textContent = '0';
      }
    }

    function updateStatCard() {
      const statCard = document.querySelector('.stat-card.safe, .stat-card.warning, .stat-card.danger');
      if (waterLevel >= 100) {
        statCard.className = 'stat-card danger';
      } else if (waterLevel >= 70) {
        statCard.className = 'stat-card warning';
      } else {
        statCard.className = 'stat-card safe';
      }
    }

    function updateRainfall() {
      rainfall = Math.max(0, rainfall + (Math.random() - 0.6) * 3);
      document.getElementById('rainfallValue').textContent = Math.round(rainfall);
      
      if (rainfall > 15) {
        waterLevel += 2;
      }
    }

    function addEvent(message, type = '') {
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item ' + type;
      eventItem.innerHTML = `
        <div class="event-time">Just now</div>
        <div class="event-message">${message}</div>
      `;
      
      const container = document.getElementById('recentEvents');
      container.insertBefore(eventItem, container.firstChild);
      
      if (container.children.length > 5) {
        container.removeChild(container.lastChild);
      }
    }

    function refreshData() {
      addEvent('System data refreshed');
      updateWaterLevel();
      updateRainfall();
    }

    function testAlert() {
      addEvent('Alert system test - All notifications working', 'warning');
      alert('Test alert sent successfully! All notification systems are operational.');
    }

    function generateReport() {
      addEvent('Report generated successfully');
      alert('Daily report generated and saved. Check your reports folder.');
    }

    function showSection(section) {
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section - Coming soon!`);
    }

    setInterval(updateWaterLevel, 5000);
    setInterval(updateRainfall, 8000);

=======
let waterLevel = 45;
    let rainfall = 12;
    let events = [];

    function updateWaterLevel() {
      waterLevel = Math.max(0, Math.min(150, waterLevel + (Math.random() - 0.5) * 5));
      
      const percentage = (waterLevel / 150) * 100;
      document.getElementById('waterFill').style.height = percentage + '%';
      document.getElementById('waterLevelValue').textContent = Math.round(waterLevel);
      document.getElementById('currentLevelDisplay').textContent = Math.round(waterLevel) + ' cm';
      
      updateAlertStatus();
      updateStatCard();
    }

    function updateAlertStatus() {
      const alertBar = document.getElementById('alertStatusBar');
      const alertCount = document.getElementById('alertCount');
      
      if (waterLevel >= 100) {
        alertBar.className = 'alert-status danger';
        alertBar.innerHTML = `
          <div class="alert-icon">🚨</div>
          <div class="alert-content">
            <h3>CRITICAL: High Water Level</h3>
            <p>Immediate evacuation may be required. Follow emergency protocols.</p>
          </div>
        `;
        alertCount.textContent = '1';
      } else if (waterLevel >= 70) {
        alertBar.className = 'alert-status warning';
        alertBar.innerHTML = `
          <div class="alert-icon">⚠️</div>
          <div class="alert-content">
            <h3>WARNING: Elevated Water Level</h3>
            <p>Monitor situation closely. Prepare for possible flooding.</p>
          </div>
        `;
        alertCount.textContent = '1';
      } else {
        alertBar.className = 'alert-status safe';
        alertBar.innerHTML = `
          <div class="alert-icon">✅</div>
          <div class="alert-content">
            <h3>Water Level: Safe</h3>
            <p>All systems operating normally. No flood risk detected.</p>
          </div>
        `;
        alertCount.textContent = '0';
      }
    }

    function updateStatCard() {
      const statCard = document.querySelector('.stat-card.safe, .stat-card.warning, .stat-card.danger');
      if (waterLevel >= 100) {
        statCard.className = 'stat-card danger';
      } else if (waterLevel >= 70) {
        statCard.className = 'stat-card warning';
      } else {
        statCard.className = 'stat-card safe';
      }
    }

    function updateRainfall() {
      rainfall = Math.max(0, rainfall + (Math.random() - 0.6) * 3);
      document.getElementById('rainfallValue').textContent = Math.round(rainfall);
      
      if (rainfall > 15) {
        waterLevel += 2;
      }
    }

    function addEvent(message, type = '') {
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item ' + type;
      eventItem.innerHTML = `
        <div class="event-time">Just now</div>
        <div class="event-message">${message}</div>
      `;
      
      const container = document.getElementById('recentEvents');
      container.insertBefore(eventItem, container.firstChild);
      
      if (container.children.length > 5) {
        container.removeChild(container.lastChild);
      }
    }

    function refreshData() {
      addEvent('System data refreshed');
      updateWaterLevel();
      updateRainfall();
    }

    function testAlert() {
      addEvent('Alert system test - All notifications working', 'warning');
      alert('Test alert sent successfully! All notification systems are operational.');
    }

    function generateReport() {
      addEvent('Report generated successfully');
      alert('Daily report generated and saved. Check your reports folder.');
    }

    function showSection(section) {
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section - Coming soon!`);
    }

    setInterval(updateWaterLevel, 5000);
    setInterval(updateRainfall, 8000);

>>>>>>> 3b33e62a0a69f4dd16dcdab8dcbd041823ffe907
    updateAlertStatus();