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
const main_spec_eldenring = document.querySelector("#main_spec_eldenring");
const main_spec_dune = document.querySelector("#main_spec_dune");
const main_spec_cyberpunk2077 = document.querySelector("#main_spec_cyberpunk2077");
const main_spec_witcher = document.querySelector("#main_spec_witcher");
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
if(varurl.includes("eldenring"))
{
    main_sliderbox_image_img.src = "../images/elden_ring.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Elden Ring</h1><p>Rok produkcji: 2022<br/>Producent: FromSoftware<br/>Forma: CD-Key</p><p>Cena:</p><h1>220PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Elden Ring to gra RPG akcji autorstwa japońskiego studia FromSoftware. Tym razem twórcy postanowili nawiązać współpracę ze znaną osobistością spoza branży gier wideo – pisarzem George’em R. R. Martinem, autorem sagi Pieśń Lodu i Ognia.";
    main_descriptions.appendChild(tag);
    main_spec_eldenring.style.display = "inline";
}
if(varurl.includes("dune"))
{
    main_sliderbox_image_img.src = "../images/dune.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Dune Spice Wars</h1><p>Rok produkcji: 2022<br/>Producent: Shiro Games<br/>Forma: CD-Key</p><p>Cena:</p><h1>250PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Dune: Spice Wars to RTS z elementami 4X, osadzony w uniwersum wykreowanym przez Franka Herberta. Tytuł został opracowany przez studio Shiro Games, czyli twórców m.in. ciepło przyjętego Northgard.";
    main_descriptions.appendChild(tag);
    main_spec_dune.style.display = "inline";
}
if(varurl.includes("cyberpunk2077"))
{
    main_sliderbox_image_img.src = "../images/cyberpunk_2077.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Cyberpunk 2077</h1><p>Rok produkcji: 2020<br/>Producent: CD Projekt RED<br/>Forma: CD-Key</p><p>Cena:</p><h1>180PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Cyberpunk 2077 to osadzona w otwartym świecie w klimacie science fiction gra RPG oparta na papierowym systemie fabularnym Cyberpunk. Cyberpunk 2077 został opracowany przez studio CD Projekt RED, które wsławiło się kultową serią o Wiedźminie.";
    main_descriptions.appendChild(tag);
    main_spec_cyberpunk2077.style.display = "inline";
}
if(varurl.includes("witcher"))
{
    main_sliderbox_image_img.src = "../images/witcher.jpg";
    main_sliderbox_descriptions.innerHTML = "<h1>Wiedżmin 3</h1><p>Rok produkcji: 2015<br/>Producent: CD Projekt RED<br/>Forma: CD-Key</p><p>Cena:</p><h1>70PLN</h1><button id='button_buy'>Kup Teraz</button><button id='button_add'>Dodaj do koszyka</button>";
    main_descriptions.innerHTML = "<h1>Opis gry</h1>";
    tag.innerHTML = "Wiedżmin 3 to gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.";
    main_descriptions.appendChild(tag);
    main_spec_witcher.style.display = "inline";
}