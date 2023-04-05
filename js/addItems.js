
function addItems() {
    const addTask = document.getElementById('adicionar')
    const containerTask = document.getElementById('tarefasAdicionadas')
    const alertMsg = document.getElementById('span')
    const filter = document.getElementById('filtrar')
    const dataI = document.getElementById('dataInicio')
    const dataF = document.getElementById('dataFinal')
    const filterButton = document.getElementById('button')


    if (addTask.value.length >= 1) {
        const newTaskContainer = document.createElement('div')
        newTaskContainer.classList.add('newContainer')

        const newTaskAdd = document.createElement('p')
        newTaskAdd.innerHTML = addTask.value

        const trashIcon = document.createElement('i')
        trashIcon.classList.add('fa-sharp')
        trashIcon.classList.add('fa-solid')
        trashIcon.classList.add('fa-trash')

        /*
        const editIcon = document.createElement('i')
        editIcon.classList.add('fa-solid')
        editIcon.classList.add('fa-pen-to-square') 
        escondendo o botao de editar*/


        trashIcon.addEventListener('click', () => deleteClick(newTaskContainer, newTaskAdd));

        newTaskContainer.appendChild(newTaskAdd)

        newTaskContainer.appendChild(trashIcon)
        // newTaskContainer.appendChild(editIcon)
        containerTask.appendChild(newTaskContainer);

        filter.style.display = 'block'
        filter.style.marginTop = '10px'

        addTask.value = ''
        addTask.focus()
    } else {
        alertMsg.style.display = 'block'
        addTask.style.border = '1px solid red'
        filter.style.display = 'none'
        dataI.style.display = 'none'
        dataF.style.display = 'none'
        filterButton.style.display = 'none'

    }

    const deleteClick = (newTaskContainer, newTaskAdd) => {
        const addTask = document.getElementById('adicionar')
        const containerTask = document.getElementById('tarefasAdicionadas')
        const alertMsg = document.getElementById('span')
        const tasks = containerTask.childNodes;

        for (const task of tasks) {
            if (task.firstChild.isSameNode(newTaskAdd)) {
                newTaskContainer.remove();
            }
        }
    }
}


function validadeTask() {
    const addTask = document.getElementById('adicionar')
    const alertMsg = document.getElementById('span')

    if (addTask.value.length >= 1) {
        alertMsg.style.display = 'none'
        addTask.style.border = 'none'
    }
}

function showData() {
    const dataI = document.getElementById('dataInicio')
    const dataF = document.getElementById('dataFinal')
    const filterButton = document.getElementById('button')


    dataI.style.display = 'inline-block'
    dataF.style.display = 'inline-block'
    filterButton.style.display = 'block'
    filterButton.style.marginTop = '10px'
}

function esconderBotoes() {
    const dataI = document.getElementById('dataInicio')
    const dataF = document.getElementById('dataFinal')
    const filterButton = document.getElementById('button')


    dataI.style.display = 'none'
    dataF.style.display = 'none'
    filterButton.style.display = 'none'
}



