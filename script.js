let images = [
    "card_image/img_1.jpg",
    "card_image/img_2.jpg",
    "card_image/img_3.jpg",
    "card_image/img_4.png",
    "card_image/img_5.jpg",
    "card_image/img_6.jpg",
    "card_image/img_7.png",
    "card_image/img_8.png"
]
// Duplicate to make pairs
const imagePairs = [...images, ...images];
imagePairs.sort(() => Math.random() - 0.5);

let container = document.querySelector(".container");

const gridSize = 4;  
const totalCards = gridSize * gridSize;


for (let i = 0; i < totalCards; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("image");
    img.src = imagePairs[i];

    card.appendChild(img);

    // click event 
    card.addEventListener("click", function() {
        card.classList.toggle("flip");
    });

    container.appendChild(card);
}