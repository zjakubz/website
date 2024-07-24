document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to toggle dropdown visibility
    function toggleDropdown(event) {
        event.stopPropagation();
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        } else {
            dropdownContent.classList.add('show');
        }
    }

    // Add event listeners for both click and touch events
    dropbtn.addEventListener('click', toggleDropdown);
    dropbtn.addEventListener('touchstart', toggleDropdown);

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Ensure touchend event does not re-trigger dropdown
    window.addEventListener('touchend', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
