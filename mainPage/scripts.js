let cardData = [
    { imageUrl: '../svg/array_candies/candy_1.svg', altText: 'Изображение 1' },
    { imageUrl: '../svg/array_candies/candy_2.svg', altText: 'Изображение 2' },
    { imageUrl: '../svg/array_candies/candy_3.svg', altText: 'Изображение 3' },
    { imageUrl: '../svg/array_candies/candy_4.svg', altText: 'Изображение 4' },
    { imageUrl: '../svg/array_candies/candy_5.svg', altText: 'Изображение 5' },
    { imageUrl: '../svg/array_candies/candy_6.svg', altText: 'Изображение 6' },
    { imageUrl: '../svg/array_candies/candy_7.svg', altText: 'Изображение 7' },
];

let cardContainer = document.getElementById('cardContainer');

cardData.forEach(function(card) {
    let cardElement = document.createElement('div');
    cardElement.className = 'card';

    let imgElement = document.createElement('img');
    imgElement.src = card.imageUrl;
    imgElement.alt = card.altText;

    cardElement.appendChild(imgElement);
    cardContainer.appendChild(cardElement);
});


let currentSlide = 0;


    function showSlide(n) {
        const slides = document.getElementsByClassName('slide');
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[currentSlide].style.display = 'grid';
    }

    function changeSlide(n) {
        showSlide(currentSlide + n);
    }

// Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);

