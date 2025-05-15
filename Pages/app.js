document.addEventListener("DOMContentLoaded"), () => {
    console.log("Genebria Blog Loaded")
}
document.addEventListener('DOMContentLoaded, updateDateTime');
function updateDateTime(){
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
        const dateTimeElement = document.getElementById('date-time');
        if (dateTimeElement) {
            dateTimeElement.innerText = now.toLocaleDateString('en-US', options)
        } else {
            console.error("Element with ID 'datetime' not found.");
        }
}
// document.addEventListener('DOMContentLoaded', function ()){
//      updateDateTime();
//     setInterval(updateDateTime, 1000);
// };



document.getElementById('purchaseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('message').value;

    // Construct WhatsApp message
    const whatsappMessage = `Hello! I would like to place an order:\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Product: ${product}\n` +
        `Quantity: ${quantity}\n` +
        `Message: ${message}`;

    // Redirect to WhatsApp API URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/<YOUR_WHATSAPP_NUMBER>?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
});