// Add event listeners to navigation links
document.querySelectorAll('.ul-nav li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'mooth' });
  });
});

// Add event listener to contact form submit button
document.querySelector('#contact form input[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('#contact form'));
  // Send form data to server or perform other actions
  console.log(formData);
});

// Add event listener to project section "See More" button
document.querySelector('.button-project button').addEventListener('click', () => {
  // Perform action when "See More" button is clicked
  console.log('See More button clicked');
});