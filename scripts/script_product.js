var varurl = document.URL;
const main_sliderbox_image_img = document.querySelector("#main_sliderbox_image_img");
const main_sliderbox_descriptions = document.querySelector("#main_sliderbox_descriptions");
const main_descriptions = document.querySelector("#main_descriptions");
const main_spec = document.querySelector("#main_spec");

if(varurl.includes("watchdogs"))
{
    main_sliderbox_image_img.src = "../images/cyberpunk_2077.jpg";
    main_sliderbox_descriptions.innerHTML = "Działa";
    main_descriptions.innerHTML = "Opis";
    main_spec.innerHTML = "Spec";
}