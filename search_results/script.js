var input = document.getElementById("header_searchbar_input");

onSearch();

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  });

async function onSearch() {
    let value = document.getElementById("header_searchbar_input").value;
    let response = await fetchAsync(value);
    displayProducts(response['products']);
    //document.getElementById("name").innerHTML = value;
}

function displayProducts(response) {
    const element = document.getElementById("search_results");
    element.innerHTML = '';
    response.forEach(product => {
        const item = document.createElement('div');
        item.id = 'item';
        
        item.appendChild(generateImage(product['icon']));
        item.appendChild(generateText(product['title'], product['released'], product['price']));
        item.appendChild(generateButton('cokolwiek co będzie potrzebne do przejscia do strony produktu'));

        element.appendChild(item);
    });
    console.log(response);
}

function generateImage(img) {
    const imageWrapper = document.createElement('div');
        imageWrapper.id = 'image_wrapper';
        const image = document.createElement('img');
        image.id = 'item_photo';
        image.src = img;
    imageWrapper.appendChild(image);
    return imageWrapper;
}


function generateText(title, date, price) {
    const _textWrapper = document.createElement('div');
    _textWrapper.id = 'text_wrapper';

    const _title = document.createElement('p');
    const _price = document.createElement('p');
    const _date = document.createElement('p');
    _title.classList.add('title_p');
    _date.classList.add('title_p');
    _price.classList.add('title_p');

    _title.id = 'name';
    _title.innerHTML = title;

    _date.id = 'date';
    _date.innerHTML = 'Date premiery: '+ date;

    _price.id = 'price';
    _price.innerHTML = price + ' PLN';


    _textWrapper.appendChild(_title);
    _textWrapper.appendChild(_date);
    _textWrapper.appendChild(_price);
    return _textWrapper;
}

function generateButton(id) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.id = 'button_wrapper';

    const button = document.createElement('input');
    button.id = 'product_btn';
    button.value = 'Przejdź';
    button.type = 'button';

    buttonWrapper.appendChild(button);
    return buttonWrapper;
}

async function fetchAsync(name) {
    let url = 'http://146.59.44.209/api/product/search.php?title=' + name;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}