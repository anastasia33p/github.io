const categories = [
    [
        { name: 'Кошачий Какао-Хаос', image: '../svg/chocolate-category/product1-1.png', text: 'Погрузитесь в вихрь вкусов с нашим шоколадом с нежным кошачьим мягким карамельным центром, созданным для настоящих любителей сладкого и мурчащих котиков' },
        { name: 'Пушистый Плиткин', image: '../svg/chocolate-category/product1-2.png', text: 'Нежные шоколадные плитки, вдохновленные мягким котиком. Откройте упаковку, чтобы обнаружить таинственный центр из молочного шоколада, который точно вызовет у вас улыбку' },
        { name: 'Лакомство для Лапки', image: '../svg/chocolate-category/product1-3.svg', text: 'Эти шоколадные конфеты с тающими во рту начинками – настоящее лакомство для ваших чувств и лапок. Идеально подходит для уютных вечеров в компании ваших пушистых друзей.' },
        { name: 'КотоКарамель Сюрприз', image: '../svg/chocolate-category/product1-4.svg', text: 'Нежные карамельные шарики в молочном шоколаде с скрытым сюрпризом в каждом. Доверьтесь кошачьей интриге и наслаждайтесь волшебством каждого укуса.' },
        { name: 'ШокоКотик Фантазия', image: '../svg/chocolate-category/product1-5.svg', text: 'Откройте дверь в мир фантазии с нашим ароматным какао, украшенным изысканными рисунками кошачьих лап и ушек. В каждом укусе чувствуется игривость наших мурчащих моделей.' },
        { name: 'КотоКекс Секрет', image: '../svg/chocolate-category/product1-6.svg', text: 'Секрет нашего пирожного - в сочетании влажного кекса и ароматного какао-крема, которые создают неповторимый вкус кошачьего уюта.' },
        { name: 'Мягкий Мурлычание', image: '../svg/chocolate-category/product1-7.svg', text: 'Наслаждайтесь каждым укусом пирожного, напоминающего мурлыкание. Нежное тесто, пропитанное медовым сиропом, обернуто в слой молочного шоколада.' },
        { name: 'Плюшевый Праздник', image: '../svg/chocolate-category/product1-8.png', text: 'Этот шоколадный десерт обещает плюшевое настроение благодаря своему нежному вкусу и приятной текстуре. Перенеситесь в мир мурчащих удовольствий.' },
        { name: 'КотоКакао Сказка', image: '../svg/chocolate-category/product1-9.svg', text: 'Погрузитесь в волшебную сказку с нашим ароматным какао, украшенным шоколадными фигурками кошачьих персонажей. Откройте дверь в волшебный мир сладких чудес.' },
        { name: 'Кошачья Ласка', image: '../svg/chocolate-category/product1-10.svg', text: 'Наслаждайтесь нежностью нашего шоколада с фундуком, который тает во рту, оставляя после себя лишь приятное послевкусие – словно ласка мягкой кошачьей шерсти.' },
    ],

    [
        { name: 'Пирожное-Котенок', image: '../svg/cakes-category/product2-1.svg', text: 'Приготовлено с любовью к деталям, наше пирожное в форме милого котенка наполнено нежным кремом и окружено хрустящим слоем шоколадного влажного бисквита.' },
        { name: 'Мягкое Мурлычание', image: '../svg/cakes-category/product2-2.svg', text: 'Наслаждайтесь каждым укусом пирожного, напоминающего мурлыкание. Нежное тесто, пропитанное медовым сиропом, обернуто в слой молочного шоколада.' },
        { name: 'Плюшестое Пирожное', image: '../svg/cakes-category/product2-3.svg', text: 'Нежное пирожное в форме кошачьей шерсти – это настоящий кулинарный шедевр. Сочетание ванильного крема и шоколадного глазура создает удивительный вкусовой опыт.' },
        { name: 'КотоКарамель Сюрприз', image: '../svg/cakes-category/product2-4.svg', text: 'Нежные карамельные шарики в молочном шоколаде с скрытым сюрпризом в каждом. Доверьтесь кошачьей интриге и наслаждайтесь волшебством каждого укуса.' },
        { name: 'ШокоКот Пирожное', image: '../svg/cakes-category/product2-5.png', text: 'Идеальное сочетание шоколадного пирожного и нежного какао-крема, созданное под вдохновением игривых кошачьих лап.' },
        { name: 'Лакомство для Лапочки', image: '../svg/cakes-category/product2-6.svg', text: 'Маленькие лапки нашего пирожного прячут внутри себя волшебный крем, который точно приручит ваш аппетит и подарит радость каждому укусу.' },
        { name: 'КотоКекс Секрет', image: '../svg/cakes-category/product2-7.svg', text: 'Секрет нашего пирожного - в сочетании влажного кекса и ароматного какао-крема, которые создают неповторимый вкус кошачьего уюта.' },
        { name: 'Пушистые Пряники', image: '../svg/cakes-category/product2-8.svg', text: 'Нежные конфеты в форме пряников с изысканными кошачьими узорами на поверхности. Сладкий и ароматный пряник, покрытый темным шоколадом, раскроет вам тайны восточных сладостей.' },
        { name: 'МурЧизкейк', image: '../svg/cakes-category/product2-9.svg', text: 'Наслаждайтесь нашим чизкейком в форме милого мурчащего кота. Сочетание влажного теста и нежного сыра создает идеальный десерт для настоящих гурманов и любителей кошачьих ласк.' },
        { name: 'Кошачья Гармония', image: '../svg/cakes-category/product2-10.svg', text: 'Эти конфеты сочетают в себе карамельный ореховый крем и гармонию молочного шоколада, создавая сладкое произведение искусства для настоящих ценителей кошачьей гармонии.' },
    ]
    ,
    [
        { name: 'Кошачьи Лакомства', image: '../svg/candies-category/product3-1.svg', text: 'Эти конфеты, как настоящие лакомства для кошачьих гурманов, сочетают в себе мягкость марципана и сладость белого шоколада, создавая волшебное вкусовое сочетание.' },
        { name: 'МурПралине', image: '../svg/candies-category/product3-2.svg', text: 'Пробудите свои чувства с нашими пралинами в форме милых мурчащих котят. Нежный миндальный пралине, облитый молочным шоколадом, точно станет вашим сладким угощением.' },
        { name: 'Карамельный Кот', image: '../svg/candies-category/product3-3.svg', text: 'Эти карамельные конфеты, формированные под облик плюшевых котят, растопят ваше сердце своей сладкой нежностью и вареным медовым вкусом.' },
        { name: 'Пушистые Пряники', image: '../svg/candies-category/product3-4.svg', text: 'Нежные конфеты в форме пряников с изысканными кошачьими узорами на поверхности. Сладкий и ароматный пряник, покрытый темным шоколадом, раскроет вам тайны восточных сладостей.' },
        { name: 'Шоколадный Хвостик', image: '../svg/candies-category/product3-5.svg', text: 'Очаровательные конфеты в форме кошачьих хвостиков с великолепным центром из легкого шоколадного мусса. Наслаждайтесь каждым укусом, словно гладите пушистый хвост вашего любимого кота.' },
        { name: 'КотоКарамель Каприз', image: '../svg/candies-category/product3-6.svg', text: 'Удивительно мягкое пирожное, наполненное нежной карамелью. Каждый укус – это настоящий каприз, который приносит радость, словно игривый котенок.' },
        { name: 'Мягкий Марципан', image: '../svg/candies-category/product3-7.svg', text: 'Эти мягкие конфеты в форме кошачьих лап создают неповторимый вкусовой опыт с сочным апельсиновым марципаном и оболочкой из темного шоколада.' },
        { name: 'Плюшевые Пралине', image: '../svg/candies-category/product3-8.svg', text: 'Наслаждайтесь роскошью наших плюшевых пралине с ванильным кремом внутри. Идеальные конфеты для создания уюта в вашем воображении.' },
        { name: 'Кошачья Ласка', image: '../svg/candies-category/product3-9.svg', text: 'Нежные конфеты с тающим центром, вдохновленные лаской кошачьих лап. Каждый укус – это прикосновение нежности и радости.' },
        { name: 'Лакомство для Лапочек', image: '../svg/candies-category/product3-10.svg', text: 'Удивительные конфеты с тающим во рту начинками – настоящее лакомство для ваших чувств и лапок. Идеально подходит для уютных вечеров в компании ваших пушистых друзей.' },
    ]
    ,
];

let currentCategory = 1;
let currentPage = 1;
let productsPerPage = 6;
if (window.innerWidth<768){
    productsPerPage = 4;
}
function renderProductList() {
    const productListDiv = document.getElementById('items');
    productListDiv.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < categories[currentCategory - 1].length; i++) {
        const product = categories[currentCategory - 1][i];
        const productItem = document.createElement('div');
        const id=(currentCategory )+"-"+(i+1);
        productItem.classList.add('product-item');
        productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="height: 18vw; width:20vw">
      <p>${product.name}</p>
      <p class="hidden-id">${id}</p>
    `;
        productListDiv.appendChild(productItem);
    }
}

function renderCategoryTitle() {
    const categoryTitleDiv = document.getElementById('category-title');
    if (currentCategory===1)
        categoryTitleDiv.textContent = `Шоколад`;
    if (currentCategory===2)
        categoryTitleDiv.textContent = `Пирожные`;
    if (currentCategory===3)
        categoryTitleDiv.textContent = `Конфеты`;
}



function changeCategory(category) {
    currentCategory = category;
    currentPage = 1;
    renderCategoryTitle();
    renderProductList();
}

function changePage(change) {
    const totalPages = Math.ceil(categories[currentCategory - 1].length / productsPerPage);
    currentPage = Math.min(Math.max(currentPage + change, 1), totalPages);
    renderProductList();
    const productListDiv = document.querySelectorAll('.product-item');

    listener();
}
function listener(){
    const productListDiv = document.querySelectorAll('.product-item');

    productListDiv.forEach(elem => {

        elem.addEventListener('click', function (event) {

            let productIndex= elem.querySelector('.hidden-id');

            window.location.href = `../productPage/productCard.html?index=${productIndex.textContent}`;

        });

    });}
renderCategoryTitle();
renderProductList();
listener();
