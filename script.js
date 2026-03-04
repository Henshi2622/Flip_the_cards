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
let imagePairs = [...images, ...images];
imagePairs.sort(() => Math.random() - 0.5);

let container = document.querySelector(".container");

const gridSize = 4;  
const totalCards = gridSize * gridSize;

let firstcard = null;
let secondcard = null;


// creation of cards
for (let i = 0; i < totalCards; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("image");
    img.src = imagePairs[i];

    card.appendChild(img);

    // click event 
    card.addEventListener("click", function() {
       
        card.classList.add("flip");

        if(firstcard == null){
            firstcard = card;
            // console.log(firstcard);
            // console.log("first");
        }
        else if(secondcard == null && firstcard != card){
            secondcard = card;
            // console.log(secondcard);
            // console.log("second")
        }
        
        if(firstcard != null && secondcard != null){
            if(firstcard.querySelector("img").src === secondcard.querySelector("img").src){
                // console.log("match");
                // disable clicking
                firstcard.style.pointerEvents = "none";
                secondcard.style.pointerEvents = "none";
                firstcard = null;
                secondcard = null;
            }
            else if(firstcard.querySelector("img").src != secondcard.querySelector("img").src){
                // console.log(" not match");
                setTimeout(() => {
                    firstcard.classList.remove("flip");
                    secondcard.classList.remove("flip");
                    firstcard = null;
                    secondcard = null;
                }, 500);
            }
        }

    });

    container.appendChild(card);
}

