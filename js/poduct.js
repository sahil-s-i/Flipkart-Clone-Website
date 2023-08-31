import { electronicProductData } from "./electronicProduct.js";
import { BeautyfoodandmoreProductData } from "./electronicProduct.js";
import { homekitchenandessentialProductData } from "./electronicProduct.js";
import { FashionbestsellersProductData } from "./electronicProduct.js";



// ************ top deals on electronics **************

let bestofElectronic_Product_itemEl = document.querySelector(".bestofElectronic_Product_item")
let bestofElectronicProduct_html = ""

electronicProductData.forEach(el => {
    bestofElectronicProduct_html += `
        <a href="${el.link}" >
            <div class="bestofElectronic_item">
                <div class="bestofElectronic_image_product">
                    <img src="${el.img}"
                        alt="">
                </div>
                <div class="bestofElectronicmoreOption">
                    <p class="bestofElectronicProduct_name">${el.productName}</p>
                    <p class="bestofElectronic_discount">${el.discount}</p>
                    <p class="bestofElectronic_brand">${el.brand}</p>
                </div>
            </div>
        </a>
        `
});
bestofElectronic_Product_itemEl.innerHTML = bestofElectronicProduct_html

// ************ beauty food toys and more div **************

let bestofElectronic_Product_itemE2 = document.querySelector(".bestofbeautyfoodtoys_Product_item")
let bestofbeautyfoodtoys_Product_item = ""

BeautyfoodandmoreProductData.forEach(el => {
    bestofbeautyfoodtoys_Product_item += `
        <a href="${el.link}" >
            <div class="bestofElectronic_item">
                <div class="bestofElectronic_image_product">
                    <img src="${el.img}"
                        alt="">
                </div>
                <div class="bestofElectronicmoreOption">
                    <p class="bestofElectronicProduct_name">${el.productName}</p>
                    <p class="bestofElectronic_discount">${el.discount}</p>
                    <p class="bestofElectronic_brand">${el.brand}</p>
                </div>
            </div>
        </a>
        `
});
bestofElectronic_Product_itemE2.innerHTML = bestofbeautyfoodtoys_Product_item


// ************ home and Kitchen Essentials  **************
let bestofElectronic_Product_itemE3 = document.querySelector(".bestofhomekitchen_Product_item")
let bestofhomekitchen_Product_item = ""

homekitchenandessentialProductData.forEach(el => {
    bestofhomekitchen_Product_item += `
        <a href="${el.link}" >
            <div class="bestofElectronic_item">
                <div class="bestofElectronic_image_product">
                    <img src="${el.img}"
                        alt="">
                </div>
                <div class="bestofElectronicmoreOption">
                    <p class="bestofElectronicProduct_name">${el.productName}</p>
                    <p class="bestofElectronic_discount">${el.discount}</p>
                    <p class="bestofElectronic_brand">${el.brand}</p>
                </div>
            </div>
        </a>
        `
});
bestofElectronic_Product_itemE3.innerHTML = bestofhomekitchen_Product_item

// ******************** Fashion Best Sellers ***********************
let bestofElectronic_Product_itemE4 = document.querySelector(".fashionbestsellers_Product_item")
let fashionbestsellers_Product_item = ""

FashionbestsellersProductData.forEach(el => {
    fashionbestsellers_Product_item += `
        <a href="${el.link}" >
            <div class="bestofElectronic_item">
                <div class="bestofElectronic_image_product">
                    <img src="${el.img}"
                        alt="">
                </div>
                <div class="bestofElectronicmoreOption">
                    <p class="bestofElectronicProduct_name">${el.productName}</p>
                    <p class="bestofElectronic_discount">${el.discount}</p>
                    <p class="bestofElectronic_brand">${el.brand}</p>
                </div>
            </div>
        </a>
        `
});
bestofElectronic_Product_itemE4.innerHTML = fashionbestsellers_Product_item