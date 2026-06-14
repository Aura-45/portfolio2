
/* ================= MOBILE MENU ================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* ================= ACTIVE NAVBAR LINK ================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
            .querySelector('.navbar a[href*=' + id + ']')
            .classList.add('active');
        }

    });


    /* ================= STICKY HEADER ================= */

    let header = document.querySelector('.header');

    header.classList.toggle(
        'sticky',
        window.scrollY > 100
    );


    /* ================= CLOSE MENU AFTER CLICK ================= */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* ================= SMOOTH ANIMATION ================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(
    '.skill-box, .project-card, .edu-card, .about-card'
);

hiddenElements.forEach((el) => {
    observer.observe(el);
});


/* ================= CURRENT YEAR FOOTER ================= */

const footerText = document.querySelector('.footer p');

if(footerText){

    const year = new Date().getFullYear();

    footerText.innerHTML =
    `© ${year} Sanjay Vishwakarma | All Rights Reserved`;

}







/* Typed JS */
const typed = new Typed('.multiple-text', {

    strings:[
        'Frontend Developer',
        'Java Developer',
        'DSA Problem Solver'
    ],

    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
