const renderTopping = async () => {
    // Parse the ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    // Fetch the topping data from the /toppings endpoint
    try {
        const response = await fetch('/toppings');
        const data = await response.json();

        // Get the element with the ID topping-content
        const toppingContent = document.getElementById('topping-content');

        // Variable to store the selected topping
        let topping;

        // Check if data is not null and find the topping with the matching ID
        if (data && Array.isArray(data)) {
            topping = data.find(topping => topping.id === requestedID);
        }

        // Conditionally render the topping data based on whether the topping exists
        if (topping) {
            // Set the src of the image element to the topping's image
            document.getElementById('image').src = topping.image;

            // Set the text content for each topping detail
            document.getElementById('name').textContent = topping.name;
            document.getElementById('pricePoint').textContent = `Price: ${topping.pricepoint}`;
            document.getElementById('audience').textContent = `Recommend Drink: ${topping.audience}`;

            // Set the title of the page to include the topping's name
            document.title = `Lion Sugar - ${topping.name}`;
        } else {
            // If no topping is found, display a message
            const message = document.createElement('h2');
            message.textContent = 'No Toppings Available 😞';
            toppingContent.appendChild(message);
        }
    } catch (error) {
        console.error("Error fetching topping data:", error);
    }
};
renderTopping();
