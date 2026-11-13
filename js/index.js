const products = [
    {
        id: 1,
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus doloremque natus!",
        image: "./assets/product1.png",
        label: {
            value: "hot",
            color: "#f74b81",
        },
    },
    {
        id: 2,
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus doloremque natus!",
        image: "./assets/product2.png",
        label: {
            value: "sale",
            color: "#67bcee",
        },
    },
    {
        id: 3,
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus doloremque natus!",
        image: "./assets/product3.png",
        label: {
            value: "new",
            color: "#3BB77E",
        },
    },
];

const productContainer = document.querySelector(".product-container");
const productLayerPopup = document.querySelector(".product-gallery-layer");
const closePopup = document.querySelector(".close-gallery");
const galleryImage = document.querySelector(".product-gallery-image img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let currentImageIndex= 0


products.forEach(
    (product) =>
        (productContainer.innerHTML += ` <div class="product-card bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                    <div onclick="openLayerPopup(${product.id})" class="product-image h-auto bg-red-500 rounded-2xl overflow-hidden relative">
                        <div class="label absolute top-0 left-0 bg-[${product.label.color}] text-white px-2 py-1 rounded-br-2xl capitalize">${product.label.value}</div>
                        <img src="${product.image}" alt="${product.title}-image" loading="lazy" class="w-full h-full object-cover">
                    </div>
                    <div class="product-detils mt-4 mx-3">
                        <h2 class="text-md font-bold capitalize ">${product.title}</h2>
                        <p class="text-sm text-gray-500 my-2">${product.description}</p>
                    </div>
                </div>`),
);

function openLayerPopup(productID) {
    const product = products.find(product => product.id === productID)
    const currentIndex =products.findIndex(product => product.id === productID)
    productLayerPopup.classList.remove("opacity-0", "pointer-events-none")
    galleryImage.src = product.image
   
    currentImageIndex = currentIndex; 
}
closePopup.onclick = () => {
    closeLayerPopup();
}
function closeLayerPopup() {
    productLayerPopup.classList.add("opacity-0" , "pointer-events-none")
}
function nextImageGallery() {
    if (currentImageIndex >= products.length - 1) {
        currentImageIndex = 0;
        galleryImage.src = products[currentImageIndex].image;
        return;
    }
    currentImageIndex++
    galleryImage.src = products[currentImageIndex].image;
    
}
function prevImageGallery() {
    if (currentImageIndex === 0) {
        currentImageIndex = products.length -1
    }
    else {
        currentImageIndex--;
    }
     galleryImage.src = products[currentImageIndex].image;
    
 }

arrowRight.onclick = () => {
    nextImageGallery()
}
arrowLeft.onclick = () => {
    prevImageGallery()
}