const copyNotification = document.getElementById('copyNotification');

    document.addEventListener('copy', function(event) {
      event.preventDefault();
      
      copyNotification.style.opacity = '1';
      setTimeout(() => {
        copyNotification.style.opacity = '0';
      }, 3000); // Exibe a notificação por 3 segundos
    });