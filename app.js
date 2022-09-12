const item = document.querySelector(`.item`)
const placeholders = document.querySelectorAll(`.placeholder`)

item.addEventListener(`dragstart` , dragstart)
item.addEventListener(`dragend` , dragend)

for (const plaseholder of placeholders) {
    plaseholder.addEventListener(`dragover` , dragover)
    plaseholder.addEventListener(`dragenter` , dragenter)
    plaseholder.addEventListener(`dragleave` , dragleave)
    plaseholder.addEventListener(`drop` , dragdrop )
}

function dragstart(event) {
    setTimeout(() => event.target.classList.add (`hide`), 0)
    
    event.target.classList.add(`holf`)
}
function dragend(event){
    
    event.target.className = `item`
}

function dragover (event) {
    event.preventDefault()
   
}


function dragenter (event) {
    event.target.classList.add(`hovered`)
    
}

function dragleave (event) {
    event.target.classList.remove(`hovered`)
    
}

function dragdrop(event) {
    event.target.classList.remove(`hovered`)
   event.target.append(item)
}