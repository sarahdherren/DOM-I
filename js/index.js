const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png')

const navServices = document.querySelector('a:nth-of-type(1)');
navServices.textContent = 'Services';

const navProducts = document.querySelector('a:nth-of-type(2)');
navProducts.textContent = 'Products';

const navVision = document.querySelector('a:nth-of-type(3)');
navVision.textContent = 'Vision';

const navFeatures = document.querySelector('a:nth-of-type(4)');
navFeatures.textContent = 'Features';

const navAbout = document.querySelector('a:nth-of-type(5)');
navAbout.textContent = 'About';

const navContact = document.querySelector('a:nth-of-type(6)');
navContact.textContent = 'Contact';

const headerMain = document.querySelector('h1');
const newline = "\r\n";
headerMain.textContent = 'DOM' + newline + 'Is' + newline + 'Awesome';
headerMain.style.whiteSpace = "pre";


const button = document.querySelector('button');
button.textContent = 'Get Started';


const headerImage = document.querySelector('#cta-img');
headerImage.setAttribute('src', 'img/header-img.png');

const featuresHeader = document.querySelector('.top-content .text-content h4:nth-of-type(1)');
featuresHeader.textContent = 'Features';

const featuresParagraph = document.querySelector('.top-content .text-content p:nth-of-type(1)');
featuresParagraph.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutHeader.textContent = 'About';

const aboutParagraph = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutParagraph.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImage = document.querySelector('.middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

const servicesHeader = document.querySelector('.bottom-content .text-content h4');
servicesHeader.textContent = 'Services';

const servicesParagraph = document.querySelector('.bottom-content .text-content p');
servicesParagraph.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHeader.textContent = 'Product';

const productParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productParagraph.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionHeader.textContent = 'Vision';

const visionParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionParagraph.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quivision.';

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'Contact';

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = '123 Way 456 Street' + newline + 'Somewhere, USA';
contactAddress.style.whiteSpace = 'pre';

const contactNumber = document.querySelector('.contact p:nth-of-type(2)');
contactNumber.textContent = '1 (888) 888-8888';

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = 'sales@greatidea.io';


