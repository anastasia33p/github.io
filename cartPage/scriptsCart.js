const categories = [
    [
        {name: 'Кошачий Какао-Хаос', image: '../svg/chocolate-category/product1-1.png', price: 150},
        {name: 'Пушистый Плиткин', image: '../svg/chocolate-category/product1-2.png', price: 200},
        {name: 'Лакомство для Лапки', image: '../svg/chocolate-category/product1-3.svg', price: 120},
        {name: 'КотоКарамель Сюрприз', image: '../svg/chocolate-category/product1-4.svg', price: 180},
        {name: 'ШокоКотик Фантазия', image: '../svg/chocolate-category/product1-5.svg', price: 250},
        {name: 'КотоКекс Секрет', image: '../svg/chocolate-category/product1-6.svg', price: 160},
        {name: 'Мягкий Мурлычание', image: '../svg/chocolate-category/product1-7.svg', price: 130},
        {name: 'Плюшевый Праздник', image: '../svg/chocolate-category/product1-8.png', price: 220},
        {name: 'КотоКакао Сказка', image: '../svg/chocolate-category/product1-9.svg', price: 280},
        {name: 'Кошачья Ласка', image: '../svg/chocolate-category/product1-10.svg', price: 150},
    ],

    [
        {name: 'Пирожное-Котенок', image: '../svg/cakes-category/product2-1.svg', price: 180},
        {name: 'Мягкое Мурлычание', image: '../svg/cakes-category/product2-2.svg', price: 130},
        {name: 'Плюшестое Пирожное', image: '../svg/cakes-category/product2-3.svg', price: 200},
        {name: 'КотоКарамель Сюрприз', image: '../svg/cakes-category/product2-4.svg', price: 160},
        {name: 'ШокоКот Пирожное', image: '../svg/cakes-category/product2-5.png', price: 240},
        {name: 'Лакомство для Лапочки', image: '../svg/cakes-category/product2-6.svg', price: 120},
        {name: 'КотоКекс Секрет', image: '../svg/cakes-category/product2-7.svg', price: 180},
        {name: 'Пушистые Пряники', image: '../svg/cakes-category/product2-8.svg', price: 210},
        {name: 'МурЧизкейк', image: '../svg/cakes-category/product2-9.svg', price: 270},
        {name: 'Кошачья Гармония', image: '../svg/cakes-category/product2-10.svg', price: 150},
    ]
    ,
    [
        {name: 'Кошачьи Лакомства', image: '../svg/candies-category/product3-1.svg', price: 200},
        {name: 'МурПралине', image: '../svg/candies-category/product3-2.svg', price: 150},
        {name: 'Карамельный Кот', image: '../svg/candies-category/product3-3.svg', price: 180},
        {name: 'Пушистые Пряники', image: '../svg/candies-category/product3-4.svg', price: 210},
        {name: 'Шоколадный Хвостик', image: '../svg/candies-category/product3-5.svg', price: 240},
        {name: 'КотоКарамель Каприз', image: '../svg/candies-category/product3-6.svg', price: 170},
        {name: 'Мягкий Марципан', image: '../svg/candies-category/product3-7.svg', price: 190},
        {name: 'Плюшевые Пралине', image: '../svg/candies-category/product3-8.svg', price: 220},
        {name: 'Кошачья Ласка', image: '../svg/candies-category/product3-9.svg', price: 250},
        {name: 'Лакомство для Лапочек', image: '../svg/candies-category/product3-10.svg', price: 130},
    ]
];

let idArray = readFromLocalStorage("cart");
let deliverySum = 50;
let productSum = 0;
let index = 0;
const cartContainer = document.getElementById('cart-container')
idArray.forEach(function (id) {
    let product = document.createElement('div')
    index++;
    product.className = 'product'
    product.innerHTML = `<p>${index}</p><p>${categories[id.categoryIndexArr][id.productIndexArr].name}</p> <img src="${categories[id.categoryIndexArr][id.productIndexArr].image} " alt="${categories[id.categoryIndexArr][id.productIndexArr].name}"> <p>${categories[id.categoryIndexArr][id.productIndexArr].price}</p>`
    cartContainer.appendChild(product);
    productSum += categories[id.categoryIndexArr][id.productIndexArr].price;
})
const productSumContainer = document.getElementById('productSum')
productSumContainer.textContent = productSumContainer.textContent + productSum;

const deliverySumContainer = document.getElementById('deliverySum')
deliverySumContainer.textContent = deliverySumContainer.textContent + deliverySum;

const SumContainer = document.getElementById('Sum')
const Sum = deliverySum + productSum

SumContainer.textContent = SumContainer.textContent + Sum;
const submitbutton = document.getElementById('submitbutton')

function arrayClear() {
    idArray = [];
    addToLocalStorage("cart", idArray);
    location.reload();
}

function buy(event) {
    event.preventDefault();
    idArray = [];
    addToLocalStorage("cart", idArray);
    let form = document.getElementById('payForm')
    let text = document.createElement('p')
    text.textContent = "Вы отправили нам " + Sum + " рублей"
    form.appendChild(text);

    // sleep(3000);
    setTimeout(function () {
        location.reload();
    }, 5000);

}

submitbutton.addEventListener('click', ev => buy(ev));

function addToLocalStorage(key, data) {
    try {
        // Преобразуем объект в строку перед сохранением
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
        console.log(`Данные по ключу "${key}" успешно добавлены в локальное хранилище.`);
    } catch (error) {
        console.error('Ошибка при добавлении данных в локальное хранилище:', error);
    }
}


function readFromLocalStorage(key) {
    try {
        // Извлекаем данные по ключу из локального хранилища
        const serializedData = localStorage.getItem(key);

        // Если данных нет, возвращаем пустой объект
        if (serializedData === null) {
            console.warn(`Данных по ключу "${key}" в локальном хранилище не найдено.`);
            return {};
        }

        // Преобразуем строку в объект перед возвратом
        const data = JSON.parse(serializedData);
        console.log(`Данные по ключу "${key}" успешно прочитаны из локального хранилища.`);
        return data;
    } catch (error) {
        console.error('Ошибка при чтении данных из локального хранилища:', error);
        return {};
    }
}