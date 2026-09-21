const products = {

    "shock-absorber": {

        name: "Shock Absorber",

        image: "images/shock-absorber.jpg",

        description:
            "Front and rear shock absorbers suitable for selected Proton, Perodua, Toyota and Honda models.",

        brands: [

            {
                name: "KYB",
                image: "images/brands/kyb.jpg"
            },

            {
                name: "Monroe",
                image: "images/brands/monroe.jpg"
            },

            {
                name: "Sachs",
                image: "images/brands/sachs.jpg"
            }

        ]

    },


    "brake-disc": {

        name: "Brake Disc",

        image: "images/brake-disc.jpg",

        description:
            "Replacement brake discs for various Malaysian and Japanese vehicles.",

        brands: [

            {
                name: "Brembo",
                image: "images/brands/brembo.jpg"
            },

            {
                name: "TRW",
                image: "images/brands/trw.jpg"
            },

            {
                name: "Bendix",
                image: "images/brands/bendix.jpg"
            }

        ]

    },


    "water-pump": {

        name: "Water Pump",

        image: "images/water-pump.jpg",

        description:
            "Engine cooling water pumps for selected vehicle applications.",

        brands: [

            {
                name: "GMB",
                image: "images/brands/gmb.jpg"
            },

            {
                name: "AISIN",
                image: "images/brands/aisin.jpg"
            }

        ]

    }

};

function openProduct(productId) {

    window.location.href =
        "product.html?product=" + productId;

}


function loadProduct() {

    const params = new URLSearchParams(
        window.location.search
    );

    const productId = params.get("product");

    const product = products[productId];

    if (!product) {
        document.getElementById("productName").textContent =
            "Product not found";

        return;
    }


    document.getElementById("productName").textContent =
        product.name;


    document.getElementById("productDescription").textContent =
        product.description;


    document.getElementById("productImage").src =
        product.image;


    document.getElementById("productImage").alt =
        product.name;


    const brandList =
        document.getElementById("brandList");

    brandList.innerHTML = "";


    product.brands.forEach(function(brand) {

        const brandCard =
            document.createElement("div");

        brandCard.className = "brand-card";

        brandCard.innerHTML = `
            <img src="${brand.image}"
                 alt="${brand.name}">

            <h3>${brand.name}</h3>
        `;

        brandList.appendChild(brandCard);

    });

}


if (document.getElementById("productName")) {
    loadProduct();
}
