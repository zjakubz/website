document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
  
    button.addEventListener('click', () => {
      alert('Webová stránka byla už otevřena');
    });
  
    // Add touch event listener
    button.addEventListener('touchstart', () => {
      alert('Webová stránka byla už otevřena!');
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
});
