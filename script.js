/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================
   PRODUCT SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const productCards =
    document.querySelectorAll(".product-card");

const noResults =
    document.getElementById("noResults");


function filterProducts() {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();

    const category =
        categoryFilter.value;

    let visibleProducts = 0;


    productCards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const cardCategory =
            card.dataset.category;

        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            category === "all" ||
            cardCategory === category;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value
            .trim();

        const phone =
            document.getElementById("phone")
            .value
            .trim();

        const vehicle =
            document.getElementById("vehicle")
            .value
            .trim();

        const message =
            document.getElementById("message")
            .value
            .trim();


        const whatsappNumber =
            "60123456789";


        const text =
`Hi, I would like to enquire about an automotive part.

Name: ${name}

Phone: ${phone}

Vehicle: ${vehicle}

Message:
${message}`;


        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


        window.open(
            url,
            "_blank"
        );

    }
);


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);
