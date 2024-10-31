$(document).ready(function() {
    $('#menuToggle').click(function() {
        $('#mobileMenu').css('transform', 'translateX(0)');
    });

    $('#closeMenu').click(function() {
        $('#mobileMenu').css('transform', 'translateX(-100%)');
    });
});


function filterServices() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const serviceItems = document.querySelectorAll('.service-item');
    const specificKeywords = {
      data: 'Airtime',   // Map 'data' keyword to 'Airtime' service
      airtime: 'Airtime',
      electricity: 'Electricity',
      cable: 'Cable TV',
      internet: 'Internet',
      education: 'Education',
      betting: 'Betting'
    };

    let matched = false;

    // Check for specific keywords first
    for (const keyword in specificKeywords) {
      if (searchValue.includes(keyword)) {
        matched = true;
        const serviceToShow = specificKeywords[keyword];
        
        // Show only the matched service
        serviceItems.forEach(item => {
          if (item.getAttribute('data-service') === serviceToShow) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
        break;
      }
    }

    // If no specific keyword matches, show items based on general search
    if (!matched) {
      serviceItems.forEach(item => {
        const serviceName = item.getAttribute('data-service').toLowerCase();
        if (serviceName.includes(searchValue)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }


  function navigateToService(page) {
    window.location.href = page;
  }