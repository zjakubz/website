document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');

    // Function to toggle dropdown visibility
    function toggleDropdown(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
    }

    // Add event listeners for both click and touch events
    dropbtn.addEventListener('click', toggleDropdown);
    dropbtn.addEventListener('touchstart', toggleDropdown);

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });

    // Ensure touchend event does not re-trigger dropdown
    window.addEventListener('touchend', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
});
