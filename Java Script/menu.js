let menubtn = document.querySelector("#menu");
let menubgoverlay = document.querySelector(".menu-bg-overlay");
let navmenu = document.querySelector("#navbarmain ul");
let menubglayer = document.querySelector(".menu-bg-layer");




menubtn.addEventListener(
  "click",
  function(){
      menubtn.children[0].classList.add("fa-times");
      menubtn.children[0].classList.remove("fa-bars"); 
     document.body.classList.add("open-menu");
  }
)

menubgoverlay.addEventListener(
  "click",
  function(){
      menubtn.children[0].classList.add("fa-bars");
      menubtn.children[0].classList.remove("fa-times");
     document.body.classList.remove("open-menu");
  }
)

document.addEventListener(
  "scroll",
  function (event){
      if (window.scrollY >= 70){
          document.body.classList.add("stickmenu");
      } else {
          document.body.classList.remove("stickmenu");
      }
  }    
)


// $('.testimonial-slider').slick( 
// {
//   infinite: true,
//   dots: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// });
        



const menuButtons = document.querySelectorAll('.menu-btn');
const buttons = document.querySelectorAll('.menu-btn');
const contentSections = document.querySelectorAll('.content-section');


    // Set the pizza button as active by default
    const pizzaButton = document.querySelector('.menu-btn[data-content="pizza"]');
    pizzaButton.classList.add('active');

    menuButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        menuButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');
      });
    });

// Show the pizza section by default
const pizzaSection = document.getElementById('pizza');
pizzaSection.style.display = 'block';

// Hide all other content sections initially
contentSections.forEach(section => {
  if (section.id !== 'pizza') {
    section.style.display = 'none';
  }
});

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetContent = button.dataset.content;

    // Hide all content sections
    contentSections.forEach(section => section.style.display = 'none');

    // Show the corresponding content section
    const targetSection = document.getElementById(targetContent);
    targetSection.style.display = 'block';
  });
});