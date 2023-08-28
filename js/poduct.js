import { electronicProductData } from "./electronicProduct.js";


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