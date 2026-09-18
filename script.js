const images = [
    "coffeee.jpg",
    "coffee wallpaper.jpg",
    "coffee2.jpg",
    "latte.jpg"
];

let currentIndex = 0;

function showImage() {
    document.getElementById("sliderImage").src = images[currentIndex];
}

function nextImage() {

    if (currentIndex == images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    showImage();
}

function previousImage() { 

    if (currentIndex == 0) {   //0 == 0;
        currentIndex = images.length; //- 1; 0 = 4 0 = 
    } else {
        currentIndex--; // 0+1 = 1
    }

    showImage(); 
}

showImage();
