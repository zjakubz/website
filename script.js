document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
  
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  
    // Add touch event listener
    button.addEventListener('touchstart', () => {
      alert('Button touched!');
    });
  });