const renderToppings = async () => {
    const response = await fetch('/toppings')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(topping => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${topping.image})`

            const name = document.createElement('h3')
            name.textContent = topping.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + topping.pricepoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + topping.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Details'
            link.setAttribute('role', 'button')
            link.href = `/toppings/${topping.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Toppings Available 😞'
        mainContent.appendChild(message)
    }
}
const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl && requestedUrl !== 'index.html' && requestedUrl !== '') {
    window.location.href = '../404.html';
} else {
    renderToppings();
}

