const formDiv = document.querySelector("#formulaire")
const btnAdd = document.querySelector("#ajout")


btnAdd.addEventListener('click', () => {
    let formulaire = document.createElement('form')
    let divForm = document.createElement('div')
    let labelForm = document.createElement('label')
    let inputForm = document.createElement('input')
    let div = document.createElement('div')
    let btn = document.createElement('button')

    let btnId = document.createAttribute('id')
    let btnClass = document.createAttribute('class')
    let btnType = document.createAttribute('type')
    let divCol = document.createAttribute('class')
    let classDivForm = document.createAttribute('class')
    let typeInput = document.createAttribute('type')
    let classForm = document.createAttribute('class')
    let classInput = document.createAttribute('class')
    let idInput = document.createAttribute('id')
    let placeholderInput = document.createAttribute('placeholder')
    let forLabel = document.createAttribute('for')

    btnClass.value = 'btn btn-outline-light d-none mx-auto mt-3'
    btnType.value = 'submit'
    btnId.value = 'addPartner'
    divCol.value = 'col-lg-3'
    classDivForm.value = 'form-group col-lg-12'
    classForm.value = 'text-center'
    typeInput.value = 'text'
    classInput.value = 'form-control'
    idInput.value = 'formInput'
    forLabel.value = 'formInput'
    placeholderInput.value = 'Nom du partenaire'

    labelForm.innerHTML = 'Nom du partenaire'
    
    const addPartner = document.querySelector("#" + btnId.value)

    btn.setAttributeNode(btnId)
    btn.setAttributeNode(btnClass)
    btn.setAttributeNode(btnType)
    div.setAttributeNode(divCol)
    divForm.setAttributeNode(classDivForm)
    formulaire.setAttributeNode(classForm)
    labelForm.setAttributeNode(forLabel)
    inputForm.setAttributeNode(typeInput)
    inputForm.setAttributeNode(classInput)
    inputForm.setAttributeNode(idInput)
    inputForm.setAttributeNode(placeholderInput)

    divForm.appendChild(div)
    divForm.appendChild(labelForm)
    divForm.appendChild(inputForm)
    divForm.appendChild(btn)
    formulaire.appendChild(divForm)

    formDiv.appendChild(formulaire)

    btnAdd.classList.add('d-none')
    btnAdd.classList.remove('d-block')
    addPartner.classList.remove('d-none')
    
    
    const input = document.querySelector('#' + idInput.value)
    input.addEventListener('change', () => {
            addPartner.addEventListener('click', () => {
            alert("Merci " + input.value)
            location.reload()
        })
    })
    
})

