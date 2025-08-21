// Array to store all image paths for the slideshow
let arrImages = [
    "Images/PixlPanic1.png",
    "Images/PixlPanic2.png",
    "Images/PixlPanic3.png"
];

let arrTitles = [
    "Campfire",
    "Spiderman",
    "Quality of life game concept"
];

let arrDescription = [
    "I whated to start simple with a campfire, so I got an image for inspiration and decided to make this image out of the colors from the inspiration. the overall design isn't the best but I think it certainly looks good enough for me. The fire was the easy part since I already know how to sprite fire, the hardest part was the planks. Since I didn't know the perspective of the planks, I had a hard time with the shading.",
    "For this one, I grew up liking spiderman because of his color design, so I wanted to replicate that feeling of nostalgia by making full on art for him. the design started with a few rough pixel placements, but as I moved forward, I started to get more confident on the design, eventually this came as the final result.",
    "Originally I wanted to make the third image a horror theme because that's mainly what I do best at, but something told me that would not really be appropriate for this site, so I went for a Stardew Valley like game concept. I liked the little character you play as, and I can already come up with a sort of backstory to the character. My favorite has to be the bakery right next to him. Something about the design made me feel completely satisfied."
];

let currentImageIndex = 0;
let currentTextIndex = 0;

        function showImage(index) {
            let imgSlide = document.getElementById("imgSlide");

            imgSlide.src = arrImages[index]
        }

        function showText(index) {
            let title = document.getElementById("title");
            let description = document.getElementById("description");

            title.textContent = arrTitles[index];
            description.textContent = arrDescription[index];
        }

        // Move to the previous slide
        function prevSlide() {
            currentImageIndex--;
            currentTextIndex--;

            if(currentImageIndex < 0) {
                currentImageIndex = arrImages.length - 1;
                currentTextIndex = arrTitles.length - 1 && arrDescription.length - 1;
            }

            showImage(currentImageIndex);
            showText(currentTextIndex);
        }
        // Move to the Next slide
        function nextSlide() {
            currentImageIndex++;
            currentTextIndex++;

            if(currentImageIndex >= arrImages.length) {
                currentImageIndex = 0;
                currentTextIndex = 0;
            }

            showImage(currentImageIndex);
            showText(currentTextIndex);
        }

        showText(currentTextIndex);
        showImage(currentImageIndex);