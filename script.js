const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    var whatsappMessage = "Name: " + name + "%0A";
    whatsappMessage += "Email: " + email + "%0A";
    whatsappMessage += "Phone: " + phone + "%0A";
    whatsappMessage += "Message: " + message;
    
    var whatsappNumber = "48996825761"; // Replace with your WhatsApp number
    var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;
    
    window.open(whatsappUrl, '_blank');
});