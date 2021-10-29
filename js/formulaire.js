const formDiv = document.querySelector("#formulaire")
const btnAdd = document.querySelector("#ajout")

btnAdd.addEventListener('click', ()=>{
    let formulaire = document.createElement('form')
    let divForm = document.createElement('div')
    let labelForm = document.createElement('label')
    let inputForm = document.createElement('input')

    let classDivForm = document.createAttribute('class')
    let typeInput = document.createAttribute('type')
    let classForm = document.createAttribute('class')
    let classInput = document.createAttribute('class')
    let idInput = document.createAttribute('id')
    let placeholderInput = document.createAttribute('placeholder')
    let forLabel = document.createAttribute('for')

    classDivForm.value = 'form-group'
    classForm.value = 'text-center'
    typeInput.value = 'text'
    classInput.value = 'form-control'
    idInput.value = 'formInput'
    forLabel.value = 'formInput'
    placeholderInput.value = 'Nom du partenaire'

    labelForm.innerHTML = 'Nom du partenaire'

    divForm.setAttributeNode(classDivForm)
    formulaire.setAttributeNode(classForm)
    labelForm.setAttributeNode(forLabel)
    inputForm.setAttributeNode(typeInput)
    inputForm.setAttributeNode(classInput)
    inputForm.setAttributeNode(idInput)
    inputForm.setAttributeNode(placeholderInput)

    divForm.appendChild(labelForm)
    divForm.appendChild(inputForm)
    formulaire.appendChild(divForm)

    formDiv.appendChild(formulaire)

    btnAdd.classList.add('d-none')
    btnAdd.classList.remove('d-block')
})
