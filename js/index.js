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

let crclImg = document.getElementById("cta-img");
crclImg.setAttribute('src', siteContent["cta"]['img-src'])

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Navigation Links

let navServices = document.getElementsByTagName('a')[0];
navServices.textContent = "Services";

let navProduct = document.getElementsByTagName('a')[1];
navProduct.textContent = "Pruduct";

let navVision = document.getElementsByTagName('a')[2];
navVision.textContent = "Vision";

let navFeatures = document.getElementsByTagName('a')[3];
navFeatures.textContent = "Features";

let navAbout = document.getElementsByTagName('a')[4];
navAbout.textContent = "About";

let navContact = document.getElementsByTagName('a')[5]
navContact.textContent = "Contact";

// Main Heading Content

let mainHeader = document.querySelector('h1');
mainHeader.innerHTML = "DOM <br> IS <br> AWESOME";
//document.querySelector('h1').textContent = "DOM IS AWESOME";
document.querySelector('button').textContent = "Get Started";

//Top Content

let featuresHeading = document.querySelectorAll('.top-content h4');
//console.log(featuresHeading);
featuresHeading[0].textContent = "Features";
featuresHeading[1].textContent = "About";

let featuresP = document.querySelectorAll('.top-content p');
//console.log(featuresP);
featuresP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

featuresP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Bottom Content

let bottomHeading = document.querySelectorAll('.bottom-content h4');
//console.log(bottomHeading);
bottomHeading[0].textContent = "Services";
bottomHeading[1].textContent = "Product";
bottomHeading[2].textContent = "Vision";

let bottomP = document.querySelectorAll('.bottom-content p');
//console.log(bottomP);
bottomP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Contact Info

let contactHeading = document.querySelector('.contact h4');
//console.log(footerHeading);
contactHeading.textContent = "Contact";

let contactP = document.querySelectorAll('.contact p');
//console.log(contactP);
contactP[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA";

contactP[1].textContent = "1 (888) 888-8888";

contactP[2].textContent = "sales@greatidea.io";

//Footer Conent

let footer = document.querySelector('footer p');
console.log(footer);
footer.textContent = "Copyright Great Idea! 2018";

