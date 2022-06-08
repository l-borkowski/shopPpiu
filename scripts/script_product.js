var varurl = document.URL;
const main_sliderbox_image_img = document.querySelector("#main_sliderbox_image_img");
const main_sliderbox_descriptions = document.querySelector("#main_sliderbox_descriptions");
const main_descriptions = document.querySelector("#main_descriptions");
const main_spec_watchdogs = document.querySelector("#main_spec_watchdogs");
const main_spec_meatboy = document.querySelector("#main_spec_meatboy");
const main_spec_cuphead = document.querySelector("#main_spec_cuphead");
const main_spec_rayman = document.querySelector("#main_spec_rayman");
const main_spec_fallguys = document.querySelector("#main_spec_fallguys");
const main_spec_gearsofwar = document.querySelector("#main_spec_gearsofwar");
var tag = document.createElement("p");

if(varurl.includes("watchdogs"))
{
    main_sliderbox_image_img.src = "../images/watchdogs.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Watchdogs</h1><p>Rok produkcji: 2014<br/>Producent: Ubisoft<br/>Forma: CD-Key</p><p>Cena:</p><h1>120PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Watch Dogs to przygodowa gra akcji o otwartym świecie wyprodukowana przez Ubisoft Montreal. Gra została wydana 27 maja 2014 roku[6]. Jest to zawierający wpływy cyberpunkowe tytuł, który umożliwia graczowi włamywanie się do różnych systemów elektronicznych, co pomaga mu w osiągnięciu jego celów. Produkcja została zaprezentowana po raz pierwszy podczas konferencji prasowej Ubisoftu. ";
    main_descriptions.appendChild(tag);
    main_spec_watchdogs.style.display = "inline";
}
if(varurl.includes("meatboy"))
{
    main_sliderbox_image_img.src = "../images/meatboy.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Super Meat Boy</h1><p>Rok produkcji: 2010<br/>Producent: Team Meat<br/>Forma: CD-Key</p><p>Cena:</p><h1>60PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Super Meat Boy to zabawna platformówka, w której sterujemy tytułowym kawałkiem mięsa. Nasz nietypowy bohater musi uratować swoją wybrankę, przechodząc ponad setkę niezwykle urozmaiconych i trudnych poziomów.";
    main_descriptions.appendChild(tag);
    main_spec_meatboy.style.display = "inline";
}
if(varurl.includes("cuphead"))
{
    main_sliderbox_image_img.src = "../images/cuphead.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Cuphead</h1><p>Rok produkcji: 2017<br/>Producent: StudioMDHR<br/>Forma: CD-Key</p><p>Cena:</p><h1>100PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Cuphead to utrzymana w stylistyce starych filmów rysunkowych, dwuwymiarowa gra akcji, będąca debiutanckim projektem zespołu StudioMDHR. W grze Cuphead wcielamy się w postać bohatera o skłonnościach do hazardu, który podczas gry z diabłem przegrywa swą duszę.";
    main_descriptions.appendChild(tag);
    main_spec_cuphead.style.display = "inline";
}
if(varurl.includes("rayman"))
{
    main_sliderbox_image_img.src = "../images/rayman.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Rayman Legends</h1><p>Rok produkcji: 2013<br/>Producent: Ubisoft<br/>Forma: CD-Key</p><p>Cena:</p><h1>80PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Rayman Legends to zręcznościowa platformówka 2D z sympatycznym stworkiem w roli głównej. Gra wyprodukowana została przez studio Ubisoft Montpellier i stanowi piątą, pełnoprawną odsłonę cyklu wykreowanego przez Michela Ancela.";
    main_descriptions.appendChild(tag);
    main_spec_rayman.style.display = "inline";
}
if(varurl.includes("fallguys"))
{
    main_sliderbox_image_img.src = "../images/fallguys.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Fall Guys</h1><p>Rok produkcji: 2020<br/>Producent: Mediatonic<br/>Forma: CD-Key</p><p>Cena:</p><h1>90PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Fall Guys to humorystyczna zręcznościówka przeznaczona do 60-osobowych rozgrywek multiplayer. Wcielając się w nieporadnych 'ludków', walczymy o wygranie nagrody głównej w dziwnym teleturnieju.";
    main_descriptions.appendChild(tag);
    main_spec_fallguys.style.display = "inline";
}
if(varurl.includes("gearsofwar"))
{
    main_sliderbox_image_img.src = "../images/gearsofwar.png";
    main_sliderbox_descriptions.innerHTML = "<h1>Gears of War 4</h1><p>Rok produkcji: 2016<br/>Producent: The Coalition<br/>Forma: CD-Key</p><p>Cena:</p><h1>180PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Gears of War 4 to czwarta pełnoprawna odsłona kultowej serii futurystycznych strzelanin TPP. Za produkcję tytułu odpowiada studio The Coalition (wcześniej Black Tusk), założone przez wieloletniego producenta serii, Roda Fergussona.";
    main_descriptions.appendChild(tag);
    main_spec_gearsofwar.style.display = "inline";
}