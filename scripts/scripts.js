// scripts.js

function showCategory(categoryId) {
    // Hide all category contents
    var contents = document.querySelectorAll('.category-content');
    contents.forEach(function (content) {
        content.classList.remove('active');
    });

    // Show the selected category content
    var selectedContent = document.getElementById(categoryId);
    selectedContent.classList.add('active');

    // Highlight the active tab
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector('button[onclick="showCategory(\'' + categoryId + '\')"]');
    activeButton.classList.add('active');
}

// hamburger menu
function toggleTabs() {
    const tabs = document.getElementById('tabs');
    tabs.classList.toggle('active'); // Toggle 'active' class to show/hide tabs
}

// Show the selected page
function showPage(pageId) {
    // Hide all page contents
    var pages = document.querySelectorAll('.page-content');
    pages.forEach(function (page) {
        page.classList.remove('active');
    });

    // Show the selected page content
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');

    // Apply smooth scrolling only for mobile screens (viewport width <= 768px)
    if (window.innerWidth <= 768) {
        selectedPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Highlight the active navigation button
    var buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector('button[onclick="showPage(\'' + pageId + '\')"]');
    activeButton.classList.add('active');
}

document.getElementById('contact-form').onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const contactInfo = document.getElementById('contact').value;
    const companyName = document.getElementById('company_name').value;

    // Get selected products
    const selectedProducts = Array.from(document.querySelectorAll('input[name="products"]:checked'))
        .map(el => el.value).join(', ');

    // Compose the message
    const message = `Name: ${name}\n Company Name: ${companyName} \nContact: ${contactInfo}\nInterested in: ${selectedProducts}`;

    // WhatsApp number
    const whatsappNumber = "+919343645710"; // Replace with your WhatsApp number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat
    window.open(whatsappUrl, '_blank');
};