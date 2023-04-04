
function addItems(){
    const addTask = document.getElementById('adicionar')
    const containerTask = document.getElementById('tarefasAdicionadas')
    const alertMsg = document.getElementById('span')

    if(addTask.value.length >= 1){
        const newTaskContainer = document.createElement('div')
        newTaskContainer.classList.add('newContainer')

        const newTaskAdd = document.createElement('p')
        newTaskAdd.innerHTML = addTask.value

        const trashIcon = document.createElement('i')
        trashIcon.classList.add('fa-sharp')
        trashIcon.classList.add('fa-solid')
        trashIcon.classList.add('fa-trash')
        
        trashIcon.addEventListener('click', () => deleteClick(newTaskContainer, newTaskAdd));
        
        newTaskContainer.appendChild(newTaskAdd)

        newTaskContainer.appendChild(trashIcon)
        containerTask.appendChild(newTaskContainer);  
   
        addTask.value = ''
        addTask.focus()
    }else{
        alertMsg.style.display = 'block'  
        addTask.style.border = '1px solid red'  
    }
     
    const deleteClick = (newTaskContainer, newTaskAdd) => {
        const addTask = document.getElementById('adicionar')
        const containerTask = document.getElementById('tarefasAdicionadas')
        const alertMsg = document.getElementById('span')
        const tasks = containerTask.childNodes;

        for(const task of tasks){
            if(task.firstChild.isSameNode(newTaskAdd)){
                newTaskContainer.remove();
            }
        }   
    }   
}  


function validadeTask(){
    const addTask = document.getElementById('adicionar')
    const alertMsg = document.getElementById('span')
    
    if(addTask.value.length >= 1){
        alertMsg.style.display = 'none'
        addTask.style.border = 'none'
    }
}



