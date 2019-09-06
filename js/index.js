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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent.nav["nav-item-1"];

navItem[1].textContent = siteContent.nav["nav-item-2"];

navItem[2].textContent = siteContent.nav["nav-item-3"];

navItem[3].textContent = siteContent.nav["nav-item-4"];

navItem[4].textContent = siteContent.nav["nav-item-5"];

navItem[5].textContent = siteContent.nav["nav-item-6"];



navItem.forEach(item => item.style.color = 'green')

const nav = document.querySelector('nav');

const firstAnchor = document.createElement('a');
firstAnchor.textContent = 'Brands';
nav.prepend(firstAnchor);
firstAnchor.style.color = 'green';

const lastAnchor = document.createElement('a');
lastAnchor.textContent = 'Testimonials';
nav.appendChild(lastAnchor);
lastAnchor.style.color = 'green';




let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent.cta['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

let topHeader = document.querySelectorAll('.top-content .text-content h4');
topHeader[0].textContent = siteContent['main-content']['features-h4'];

topHeader[1].textContent = siteContent['main-content']['about-h4'];

let topContent = document.querySelectorAll('.top-content .text-content p');

topContent[0].textContent = siteContent['main-content']['features-content'];

topContent[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomHeader = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeader[0].textContent = siteContent['main-content']['services-h4'];

bottomHeader[1].textContent = siteContent['main-content']['product-h4'];

bottomHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContent = document.querySelectorAll('.bottom-content .text-content p');
bottomContent[0].textContent = siteContent['main-content']['services-content'];

bottomContent[1].textContent = siteContent['main-content']['product-content'];

bottomContent[2].textContent = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactBody = document.querySelectorAll('.contact p');
contactBody[0].textContent = siteContent['contact']['address'];

contactBody[1].textContent = siteContent['contact']['phone'];

contactBody[2].textContent = siteContent['contact']['email'];

let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];