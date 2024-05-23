const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    // servicesID - templateID - #form - publicKey
    emailjs.sendForm('service_crrgvm9','template_xrhpt3m','#contact-form','02PXh5DwlKbGjH5Xl')
    .then(() => {
        contactMessage.textContent= "Your message has been sent!"

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear inpu fields
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent'
    })
}

contactForm.addEventListener('submit',sendEmail)