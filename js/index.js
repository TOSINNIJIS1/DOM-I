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
// All Image Starts Here

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let topImage = document.getElementById('cta-img');
topImage.src = 'img/header-img.png';

let bottomImage = document.getElementById('middle-img');
bottomImage.src = 'img/mid-page-accent.jpg';

//All Image ends here


//Navigation Starts Here 

let navigationTags = document.querySelectorAll('a');  // selects all the nav a tags and make them navitionTags to make it easier to read

//Note: There's more than one a tag in the navigationTags which can be accessed just like an array.

navigationTags[0].setAttribute('id', '#nav-item-1' )    // set the attribute to your favorite/given selector, then add the it to the end of the attribute. (class, .navigationKey)  (ID, #navigationKey)
navigationTags[0].innerHTML = 'Services';   // then insert the text you wished in the innerText/InnerHTML

// REPEAT FOR ALL ARRAY IN THE NAVIGATION TAG // if index is 1-5, then the array is 0-4

navigationTags[1].setAttribute('class', '.nav-item-2');  //Note: we can use either class or ID selector
navigationTags[1].innerHTML = 'Products';


navigationTags[2].setAttribute('id', '.nav-item-3');
navigationTags[2].innerHTML = 'Vision';

navigationTags[3].setAttribute('id', '#nav-item-4');
navigationTags[3].innerHTML = 'Features';

navigationTags[4].setAttribute('id', '#nav-item-5');
navigationTags[4].innerHTML = 'About';

navigationTags[5].setAttribute('id', '#nav-item-6');
navigationTags[5].setAttribute = 'Contact';



const navBar = document.querySelector('nav');

const navText = document.createElement('a');

navText.textContent = 'back'
navText.style.color = 'green';

navBar.appendChild(navText); 


const navTexxt = document.querySelector('nav');
const navNewText = document.createElement('a');

navNewText.textContent = 'front';
navNewText.style.color = 'green';

navBar.prepend(navNewText);


//Navigation Ends Here


// Dom is Awesome Starts Here

let bigDom = document.querySelector('h1')
bigDom.innerHTML = siteContent['cta']['h1'].replace(/\s/g,"<br>");

//Dom is Awesome Ends Here


// First we need to pull all the h4 tags then the paragraph next
// pulling h4 tags starts here

let headerTags = document.querySelectorAll('.text-content');  // we are setting the class text-content into headers tags

headerTags[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
headerTags[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
headerTags[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
headerTags[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
headerTags[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']


// h4 tags ends here


// paragraph tags starts 

let paragraphTags = document.querySelectorAll('.text-content');

paragraphTags[0].querySelector('p').textContent = siteContent['main-content']['features-content']
paragraphTags[1].querySelector('p').textContent = siteContent['main-content']['features-content']
paragraphTags[2].querySelector('p').textContent = siteContent['main-content']['features-content']
paragraphTags[3].querySelector('p').textContent = siteContent['main-content']['features-content']
paragraphTags[4].querySelector('p').textContent = siteContent['main-content']['features-content']

// ends here


// contact H4 starts here.


let contactHeader = document.querySelectorAll('.contact');

contactHeader[0].querySelector('h4').textContent = siteContent['contact']['contact-h4']


// contact H4 ends here.



// contact paragraph tags starts here // we use getElementsTagName here because the contact address, phone and email are not in class or id.
// Used the Query Selector but it didn't work for all the item, only the first item pop up, the others won't show up.

let contactParagraph = document.querySelector('.contact');

contactParagraph.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactParagraph.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactParagraph.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

// contact paragraph tags ends here 

//footer start here 

let footerEl = document.querySelector('footer');

footerEl.innerHTML = "Copyright Great Idea! 2018";

//footer ends here 































































//Trying to use Loop For The assignment.




// const nav = document.querySelectorAll('nav');
// const allNavText = nav[0].childElementCount + 1;

//  for (let i=1; i < allNavText; i++) {
//   nav[0].children[i-1].textContent = siteContent['nav']['nav-item-'+i];
//   nav[0].children[i-1].href = siteContent['nav']['nav-item-'+i] + '.html';
// }

// let feature = document.querySelectorAll('.main-content h4');
// let paragraphs = document.querySelectorAll('.main-content p');

// let featureKeys = Object.keys(siteContent['main-content']);
// let featureValues = Object.values(siteContent['main-content']);
 
// let h = 0;
// let p = 0;

// for (let i = 0; i < featureKeys.length; i++){
//   if (featureKeys[i].indexOf('h4') >= 1){
//     feature[h++].textContent = featureValues[i];
//   }
//   else if (featureKeys[i].indexOf('content') >= 1){
//     paragraphs[p++].textContent = featureValues[i];
//   }
// }

// let bigDom = document.querySelector('.cta h1');
// bigDom.innerHTML = siteContent['cta']['h1'].replace(/\s/g,"<br>");


// let contactInfo = document.querySelectorAll('.contact h4');
// let contactParagraph = document.querySelectorAll('.contact p');

// let contactKeys = Object.keys(siteContent['contact']);
// let contactValues = Object.values(siteContent['contact']);

// let H = 0;
// let P = 0;

// for (let i = 0; i < contactKeys.length; i++){
//   if (contactKeys[i].indexOf('h4') >= 1){
//     contactInfo[H++].textContent = contactValues[i];
//   }
//   else if (contactKeys[i].indexOf('contact') >= 1){   //stuck on the indexOf
//     contactParagraph[P++].textContent = contactValues[i];
//   }
// }




























// // const navBar = document.querySelector('nav a');

// // const navText = document.createElement('nav');
// // navText.textContent = 'back';
// // navText.style.color = 'green';





// navBar.appendChild(navText); 

// const navNewText = document.createElement('nav');
// navNewText.textContent = 'front';
// navNewText.style.color = 'green';

// navBar.prepend(navNewText);










