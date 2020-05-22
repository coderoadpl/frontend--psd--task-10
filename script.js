const names = ['Ala', 'Ola', 'Ela', 'Iza', 'Mateusz']
let searchPhrase = ''

const appendArray = function (array, container) {
    array.forEach(function (element) {
        container.appendChild(element)
    })
}

const renderListItem = function (name) {
    const li = document.createElement('li')

    li.innerText = name

    return li
}

const renderList = function (names) {

    const listContainer = document.createElement('ul')

    const listItems = names.map(renderListItem)

    appendArray(listItems, listContainer)

    return listContainer

}

const renderForm = function (searchPhrase, onInput) {

    const form = document.createElement('form')
    const input = document.createElement('input')

    input.value = searchPhrase
    
    setTimeout(
        function(){ input.focus() },
        0
    )

    input.addEventListener(
        'input',
        onInput
    )

    form.appendChild(input)

    return form
}

const render = function (rootContainer) {

    rootContainer.innerHTML = ''

    const onInput = function (event) {
        searchPhrase = event.target.value
        render(rootContainer)
    }

    const filteredNames = names.filter(function (name) {
        return name.includes(searchPhrase)
    })

    const formElement = renderForm(searchPhrase, onInput)
    const listElement = renderList(filteredNames)

    rootContainer.appendChild(formElement)
    rootContainer.appendChild(listElement)

}

render(document.body)