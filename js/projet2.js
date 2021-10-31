const partner = document.querySelector('#partenaires');
const checkBox = document.querySelector("#don-checkbox")
const btn = document.querySelector("#don")
// Base de données
let partenaires = ['partenaire1', 'partenaire2', 'partenaire3'];
let checkboxTab = [];

for (let x = 0; x < partenaires.length; x++) {
    let divPartner = document.createElement('div')
    let classDivPartner = document.createAttribute('class')
    let idDivPartner = document.createAttribute('id')
    idDivPartner.value = "partenaire" + x
    classDivPartner.value = "form-check py-2"
    divPartner.setAttributeNode(classDivPartner)
    divPartner.setAttributeNode(idDivPartner)

    let checkboxDivPartner = document.createElement('input')
    let idCheckboxDivPartner = document.createAttribute('id')
    let typeCheckboxDivParner = document.createAttribute('type')
    idCheckboxDivPartner.value = "divPartnerCheckbox" + x
    typeCheckboxDivParner.value = "checkbox"
    checkboxDivPartner.setAttributeNode(typeCheckboxDivParner)
    checkboxDivPartner.setAttributeNode(idCheckboxDivPartner)

    let a = document.createElement('a')
    let aHref = document.createAttribute('href')
    aHref.value = "#"
    a.setAttributeNode(aHref)
    a.innerHTML = partenaires[x]    
    
    checkboxTab.push(idCheckboxDivPartner.value)
    
    divPartner.appendChild(checkboxDivPartner)
    divPartner.appendChild(a)
    partner.appendChild(divPartner)
}

checkBox.addEventListener('click', () => {
    if (checkBox.checked == true) {
        btn.classList.remove('disabled')
    } else {
        btn.classList.add('disabled')
    }
})

window.addEventListener("DOMContentLoaded", (event) => {
    for (e of checkboxTab) {
        const dynamicCheckBox = document.querySelector('#' + e)
        const select = document.querySelector('#inputGroupSelect01')
        dynamicCheckBox.addEventListener('click', () => {
            if (dynamicCheckBox.checked == true) {
                select.disabled = false
            } else {
                select.disabled = true
            }
        })
    }
})

// btnAdd.addEventListener('click', () => {
//     console.log("coucou");
// })



