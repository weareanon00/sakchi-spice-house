/* =========================================
   SAKCHI SPICE HOUSE
   COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   MENU DATA
========================================= */

const menuItems = [

    {
        id: 1,
        name: "Royal Chicken Biryani",
        category: "biryani",
        price: 220,
        oldPrice: 280,
        description: "Fragrant basmati rice, tender chicken, saffron and our secret blend of spices.",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85",
        tag: "Chef's Special"
    },

    {
        id: 2,
        name: "Mutton Biryani",
        category: "biryani",
        price: 280,
        oldPrice: 330,
        description: "Slow-cooked mutton layered with aromatic basmati rice and traditional spices.",
        image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=900&q=85",
        tag: "Popular"
    },

    {
        id: 3,
        name: "Veg Biryani",
        category: "vegetarian",
        price: 180,
        oldPrice: 220,
        description: "Aromatic basmati rice cooked with fresh vegetables and fragrant spices.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
        tag: "Vegetarian"
    },

    {
        id: 4,
        name: "Chicken Tikka",
        category: "chicken",
        price: 240,
        oldPrice: 280,
        description: "Juicy chicken pieces marinated in spices and grilled to perfection.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
        tag: "Popular"
    },

    {
        id: 5,
        name: "Chicken Handi",
        category: "chicken",
        price: 260,
        oldPrice: 300,
        description: "Tender chicken cooked slowly in a rich and creamy traditional gravy.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
        tag: "Chef's Choice"
    },

    {
        id: 6,
        name: "Chicken Kebab",
        category: "chicken",
        price: 220,
        oldPrice: 260,
        description: "Tender spiced chicken kebabs grilled with a smoky and delicious finish.",
        image: "https://images.unsplash.com/photo-1530250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85",
        tag: "Popular"
    },

    {
        id: 7,
        name: "Mutton Rogan Josh",
        category: "mutton",
        price: 320,
        oldPrice: 370,
        description: "Classic slow-cooked mutton curry with aromatic spices and rich gravy.",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=85",
        tag: "Signature"
    },

    {
        id: 8,
        name: "Mutton Kebab",
        category: "mutton",
        price: 290,
        oldPrice: 340,
        description: "Succulent mutton kebabs grilled with aromatic herbs and spices.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
        tag: "Popular"
    },

    {
        id: 9,
        name: "Seekh Kebab",
        category: "starters",
        price: 230,
        oldPrice: 270,
        description: "Juicy minced meat kebabs seasoned with herbs and traditional spices.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
        tag: "Starter"
    },

    {
        id: 10,
        name: "Crispy Samosa",
        category: "starters",
        price: 80,
        oldPrice: 100,
        description: "Crispy golden pastry filled with perfectly spiced potatoes and herbs.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
        tag: "Best Seller"
    },

    {
        id: 11,
        name: "Paneer Tikka",
        category: "vegetarian",
        price: 190,
        oldPrice: 230,
        description: "Soft paneer cubes marinated in aromatic spices and grilled until golden.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
        tag: "Vegetarian"
    },

    {
        id: 12,
        name: "Paneer Butter Masala",
        category: "vegetarian",
        price: 210,
        oldPrice: 250,
        description: "Soft paneer cooked in a creamy tomato and butter-based gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
        tag: "Popular"
    }

];


/* =========================================
   VARIABLES
========================================= */

const menuGrid =
    document.getElementById("menuGrid");

const menuSearch =
    document.getElementById("menuSearch");

const categoryButtons =
    document.querySelectorAll(".category-button");

const cartButton =
    document.getElementById("cartButton");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItemsContainer =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const toast =
    document.getElementById("toast");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const specialOrderButton =
    document.getElementById("specialOrderButton");


let selectedCategory = "all";

let cart =
    JSON.parse(localStorage.getItem("sakchiCart")) || [];


/* =========================================
   DISPLAY MENU
========================================= */

function displayMenu() {

    if (!menuGrid) {
        return;
    }

    const searchText =
        menuSearch
            ? menuSearch.value.toLowerCase().trim()
            : "";


    const filteredItems =
        menuItems.filter(item => {

            const categoryMatches =
                selectedCategory === "all" ||
                item.category === selectedCategory;


            const searchMatches =
                item.name.toLowerCase().includes(searchText) ||
                item.description.toLowerCase().includes(searchText);


            return categoryMatches && searchMatches;

        });


    if (filteredItems.length === 0) {

        menuGrid.innerHTML = `
            <div class="no-results">
                <h3>No dishes found</h3>
                <p>Try searching for another dish.</p>
            </div>
        `;

        return;
    }


    menuGrid.innerHTML =
        filteredItems.map(item => `

            <article class="food-card">

                <div class="food-image-wrapper">

                    <img
                        class="food-image"
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                        onerror="this.src='https://placehold.co/900x600?text=Food+Image'"
                    >

                    <span class="food-tag">
                        ${item.tag}
                    </span>

                </div>


                <div class="food-info">

                    <span class="food-category">
                        ${formatCategory(item.category)}
                    </span>

                    <h3 class="food-name">
                        ${item.name}
                    </h3>

                    <p class="food-description">
                        ${item.description}
                    </p>


                    <div class="food-bottom">

                        <div>

                            <span class="food-price">
                                ₹${item.price}
                            </span>

                            <span class="food-old-price">
                                ₹${item.oldPrice}
                            </span>

                        </div>


                        <button
                            class="add-cart-button"
                            onclick="addToCart(${item.id})">

                            + Add

                        </button>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =========================================
   FORMAT CATEGORY
========================================= */

function formatCategory(category) {

    return category.charAt(0).toUpperCase()
        + category.slice(1);

}


/* =========================================
   CATEGORY BUTTONS
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        selectedCategory =
            button.dataset.category;


        displayMenu();

    });

});


/* =========================================
   SEARCH
========================================= */

if (menuSearch) {

    menuSearch.addEventListener("input", () => {

        displayMenu();

    });

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {

    const item =
        menuItems.find(menuItem => menuItem.id === id);


    if (!item) {
        return;
    }


    const existingItem =
        cart.find(cartItem => cartItem.id === id);


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...item,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    showToast(`${item.name} added to cart`);

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(id, amount) {

    const item =
        cart.find(cartItem => cartItem.id === id);


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;
    }


    saveCart();

    updateCart();

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "sakchiCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const totalItems =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }


    if (cartTotal) {

        cartTotal.textContent =
            `₹${totalPrice}`;

    }


    if (!cartItemsContainer) {
        return;
    }


    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something delicious from the menu.
                </p>

            </div>

        `;

        return;
    }


    cartItemsContainer.innerHTML =
        cart.map(item => `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        ₹${item.price} × ${item.quantity}
                    </div>


                    <div class="cart-controls">

                        <button
                            class="quantity-button"
                            onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            class="quantity-button"
                            onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                        <button
                            class="remove-button"
                            onclick="removeFromCart(${item.id})">
                            Remove
                        </button>

                    </div>

                </div>

            </div>

        `).join("");

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE CART
========================================= */

function closeCartDrawer() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   CART EVENTS
========================================= */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* =========================================
   WHATSAPP CHECKOUT
========================================= */

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;
            }


            let message =
                "Hello Sakchi Spice House!%0A%0A";

            message +=
                "*New Food Order*%0A%0A";


            cart.forEach(item => {

                message +=
                    `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}%0A`;

            });


            const total =
                cart.reduce(
                    (sum, item) =>
                        sum + item.price * item.quantity,
                    0
                );


            message +=
                `%0A*Total: ₹${total}*%0A%0A`;

            message +=
                "Please confirm my order.";


            /*
              CHANGE THIS NUMBER
              TO THE RESTAURANT'S REAL
              WHATSAPP NUMBER.
              
              Indian format:
              919876543210
            */

            const restaurantNumber =
                "919876543210";


            const whatsappURL =
                `https://wa.me/${restaurantNumber}?text=${message}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================
   SPECIAL BUTTON
========================================= */

if (specialOrderButton) {

    specialOrderButton.addEventListener(
        "click",
        () => {

            addToCart(1);

            openCart();

        }
    );

}


/* =========================================
   TOAST MESSAGE
========================================= */

let toastTimer;


function showToast(message) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* =========================================
   MOBILE MENU
========================================= */

if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle("open");

        }
    );

}


/* Close mobile menu after clicking */

if (mobileNav) {

    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove("open");

                }
            );

        });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value;


            showToast(
                `Thank you, ${name}! Message received.`
            );


            contactForm.reset();

        }
    );

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;


            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayMenu();

updateCart();