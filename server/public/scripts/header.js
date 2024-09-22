// Select the header tag
const header = document.querySelector('header');

// Create a div with the class name 'header-container'
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// Create a div with the class name 'header-left'
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// Create an img element for the logo and set its source
const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';

// Create an h1 element for the title and set its text content
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Lion Sugar';

// Append the logo and title to the left header div
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// Create a div with the class name 'header-right'
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create a button element for Home and register a click event
const headerButton = document.createElement('button');  // Corrected to 'button' instead of 'Home'
headerButton.textContent = '⌂';

headerButton.addEventListener('click', function() {
    window.location = '/';
});

// Append the Home button to the right header div
headerRight.appendChild(headerButton);

// Append the left and right header divs to the header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Append the header container to the header element
header.appendChild(headerContainer);
