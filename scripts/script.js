//MAIN_PAGE
//slider

const str = 'Hello world';
let watchdogsbool = false;
 
export default watchdogsbool;
export let meatboybool = false; 
export let cupheadbool = true; 
export let raymanbool = false;
export let fallguysbool = false; 
export let gearsofwarbool = false; 

try{


const container_slider = document.querySelector("#main_offers_container_slider");
const container_slider_boxes = document.querySelectorAll(".main_offers_container_box");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

container_slider.style.transform = "translateX(-258px)";

nextBtn.addEventListener("click", function()
{
    if(counter >= container_slider_boxes.length - 4)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    container_slider.style.transform = "translateX("+(-258*counter) + "px)";
});

prevBtn.addEventListener("click", function()
{
    if(counter <= 0)
    {
        return;
    }
    container_slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    container_slider.style.transform = "translateX("+(-258*counter) + "px)";
});

container_slider.addEventListener("transitionend",  function()
{
    if(container_slider_boxes[counter].id === 'lastClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - 5; 
        container_slider.style.transform = "translateX("+(-258*counter) + "px)";
    }
    if(container_slider_boxes[counter].id === 'firstClone')
    {
        container_slider.style.transition = "none";
        counter = container_slider_boxes.length - counter-3; 
        container_slider.style.transform = "translateX("+(-258*counter) + "px)";
    }
});

//bannerbox
const bannerbox = document.querySelector("#main_sliderbox_slider_game");
const bannerboxh1 = document.querySelector("#main_sliderbox_slider_game_box h1");
const bannerboxp = document.querySelector("#main_sliderbox_slider_game_box p");

const elden = document.querySelector("#main_sliderbox_slider_else_box1");
const duna = document.querySelector("#main_sliderbox_slider_else_box2");
const cyber = document.querySelector("#main_sliderbox_slider_else_box3");
const witcher = document.querySelector("#main_sliderbox_slider_else_box4");

elden.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(images/elden_ring.jpg)";
    bannerboxh1.innerHTML = "Elden Ring (2022)";
    bannerboxp.innerHTML = "Elden Ring to gra RPG akcji autorstwa japońskiego studia FromSoftware.";
    elden.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    cyber.style.background = "#363E44";
    witcher.style.background = "#363E44";
});

duna.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(images/dune.jpg)";
    bannerboxh1.innerHTML = "Dune Spice Wars (2022)";
    bannerboxp.innerHTML = "Dune: Spice Wars jest strategią czasu rzeczywistego z elementami podgatunku 4X.";
    duna.style.background = "#8d8d8d";
    elden.style.background = "#363E44";
    cyber.style.background = "#363E44";
    witcher.style.background = "#363E44";
});

cyber.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(images/cyberpunk_2077.jpg)";
    bannerboxh1.innerHTML = "Cyberpunk (2020)";
    bannerboxp.innerHTML = "Cyberpunk 2077 jest pierwszoosobową grą RPG z otwartym światem, wzbogaconą o elementy FPS-ów.";
    cyber.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    elden.style.background = "#363E44";
    witcher.style.background = "#363E44";
});

witcher.addEventListener("click", function()
{
    console.log("Click");
    bannerbox.style.backgroundImage = "url(images/witcher.jpg)";
    bannerboxh1.innerHTML = "Witcher 3 (2015)";
    bannerboxp.innerHTML = "Witcher 3 to trzecia odsłona popularnej serii gier RPG opartej na prozie Andrzeja Sapkowskiego.";
    witcher.style.background = "#8d8d8d";
    duna.style.background = "#363E44";
    cyber.style.background = "#363E44";
    elden.style.background = "#363E44";
});
/*
let watchdogsbool = false;
let meatboybool = false; 
let cupheadbool = false; 
let raymanbool = false;
let fallguysbool = false; 
let gearsofwarbool = false; 
*/

//SHOP_PRODUCT
const sliderbox_image = document.querySelector("#main_sliderbox_image");

container_slider_boxes[0].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //watchdogsbool = true;
    }
);
container_slider_boxes[1].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //meatboybool = true;
    }
);

container_slider_boxes[2].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //cupheadbool = true; 
    }
);
container_slider_boxes[3].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //raymanbool = true;
    }
);
container_slider_boxes[4].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //fallguysbool = true; 
    }
);
container_slider_boxes[5].addEventListener("click", function()
    {
        sliderbox_image.src = "../images/cyberpunk2077.jpg";
        console.log("click");
        //gearsofwarbool = true; 
    }
);
/*
module.export = { watchdogsbool };
module.export = { meatboybool };
module.export = { cupheadbool  };
module.export = { raymanbool };
*/
}
catch
{

}