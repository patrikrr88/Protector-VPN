
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = `Vaše IP adresa je: ${data.ip}`;

        
        return fetch(`http://ip-api.com/json/${data.ip}?fields=status,country,regionName,city,isp`);
    })
    .then(response => response.json())
    .then(locationData => {
        if (locationData.status === "fail") throw new Error("Nepodařilo se načíst data.");
        
        document.getElementById('location').textContent = `Vaše lokalita: ${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
        document.getElementById('isp').textContent = `ISP: ${locationData.isp}`;
    })
    .catch(error => {
        console.error('Chyba při načítání dat:', error);
        document.getElementById('ip').textContent = 'Nepodařilo se načíst IP adresu.';
        document.getElementById('location').textContent = 'Nepodařilo se načíst lokalitu.';
        document.getElementById('isp').textContent = 'Nepodařilo se načíst ISP.';
    });



    document.querySelector('.toggle-switch').addEventListener('change', function() {
      const vpnStatusElement = document.getElementById('vpn-status');
      
      if (this.checked) {
        vpnStatusElement.textContent = "Status: Chráněno";
        vpnStatusElement.style.color = "green";
      } else {
        vpnStatusElement.textContent = "Status: Nechráněno";
        vpnStatusElement.style.color = "red";
      }
    });
    