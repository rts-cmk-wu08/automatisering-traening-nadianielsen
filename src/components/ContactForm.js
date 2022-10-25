let ContactForm = function() {
    let element = document.createElement('form')
    element.classList.add('contactForm')
    element.innerHTML = `

    <div class="contactForm__group">
        <label for="firstname">Fornavn:</label>
        <input title="Skriv venligst dit fornavn" type="text" name="firstname" id="firstname" required minlength=2>
    </div>
    <div class="contactForm__group">
        <label for="lastname">Efternavn:</label>
        <input title="Skriv venligst dit efternavn" type="text" name="lastname" id="lastname" required minlength=3>
    </div>
    <div class="contactForm__group">
        <label for="address">Adresse:</label>
        <input title="Skriv venligst din gyldig adresse" type="text" name="address" id="address" required>
    </div>
    <div class="contactForm__group">
        <label for="city">By:</label>
        <input title="Din by må venligst ikke hedde mere 3 bogstaver" type="text" name="city" id="city" required minlength=3>
    </div>
    <div class="contactForm__group">
        <label for="postalcode">Post nr.:</label>
        <input title="Du skal venligst skrive 4 cifre" type="text" name="postalcode" id="postalcode" required pattern="[0-9]{4}">
    </div>
    <div class="contactForm__group">
        <label for="phone">Tlf nr.:</label>
        <input title="Dit telefon nr. må max være 6 cifre" type="text" name="phone" id="phone" required patteren=[0-9]{8}>
    </div>
    <div class="contactForm__group">
        <label for="email">E-mail:</label>
        <input title="Venligst skriv en valid email adresse" type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\[.]+[a-z]{2,}">
    </div>
    <div class="contactForm__group">
        <label for="message">Besked:</label>
        <textarea title="Du skal venligst skrive en besked" name="message" id="message" placeholder="Skriv din besked her" required minlength=10></textarea>
    </div>
        <button type="submit">Send</button>   
    `

    element.addEventListener("submit", function(e) {
        e.preventDefault()
        // console.log(e.target.firstname.value)

        let data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            address: e.target.address.value,
            city: e.target.city.value,
            postalcode: e.target.postalcode.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }
        // console.log(data)

        fetch("http://localhost:4000/comments", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charser=UTF-8'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    })


return element
}
export default ContactForm