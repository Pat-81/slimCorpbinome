const partner = document.querySelector('#partenaire');
const checkBox = document.querySelector("#don-checkbox")
const btn = document.querySelector("#don")

let partenaires = ['partenaire1', 'partenaire2', 'partenaire3'];
let checkboxTab = [];

for (let x = 0; x < partenaires.length; x++) {
    let divPartner = document.createElement('div')
    let input = document.createElement('input')
    let a = document.createElement('a')

    let typeCheckbox = document.createAttribute('type')
    let typeA = document.createAttribute('href')
    let typeDivPartnerClass = document.createAttribute('class')
    let typeDivPartnerId = document.createAttribute('id')
    let checkBoxId = document.createAttribute('id')

    typeA.value = '#'
    typeCheckbox.value = 'checkbox'
    typeDivPartnerClass.value = 'form-check py-2'
    typeDivPartnerId.value = 'partenaire' + x
    checkBoxId.value = 'dynamicCheckBox' + x
    checkboxTab.push(checkBoxId.value)

    input.setAttributeNode(typeCheckbox)
    input.setAttributeNode(checkBoxId)
    a.setAttributeNode(typeA)
    divPartner.setAttributeNode(typeDivPartnerClass)
    divPartner.setAttributeNode(typeDivPartnerId)

    a.innerHTML = partenaires[x]
    partner.appendChild(input);
    partner.appendChild(a)
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



