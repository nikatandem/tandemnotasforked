function templateNota(){
// crear elemento de nota (div) e introducirlo en el root mediante el DOM
const nota = document.createElement('div')
const textnota = document.createTextNode('Editar nota')
nota.appendChild(textnota)
const root = document.getElementById('root')
root.appendChild(nota)
// Añadir al div la clase y el id NOTA
nota.className = 'nota'
nota.id='nota'
// Añadir la clase para que se content editable
nota.contentEditable = true
    //**deshabilitar btnAdd
btnAdd.disabled = true
//creamos btn GUARDAR
const btnSave = document.createElement('button')
const textSave = document.createTextNode('Guardar')
btnSave.onclick = function (){
    // alert('Nota guardada')
    setLocalInfo(nota)
    document.getElementById('nota').remove()
    btnAdd.disabled = false
    btnSave.remove()
    showInfo()
}
btnSave.appendChild(textSave)
root.appendChild(btnSave)
}

// Crear un botón de AÑADIR nota
const btnAdd = document.createElement('button')
const textAdd = document.createTextNode('Añadir nota')
btnAdd.appendChild(textAdd)
root.appendChild(btnAdd)
//Darle funcionalidad al botón para que agregue las notas. Primero agregamos todo el elemento de nota en una función templateNota
btnAdd.addEventListener('click', templateNota)
    //btnAdd.onclick='templateNota'
// **deshabilitar btnAdd dentro de la función
//Crear botón par GUARDAR nota DENTRO DE templateNota
const show = document.createElement('div')
show.id='show-notas'
root.appendChild(show)
// Crear un botón de LIMPIAR notas
    const btnClean = document.createElement('button')
    const textClean = document.createTextNode('Limpiar notas')
    btnClean.appendChild(textClean)
    root.appendChild(btnClean)
    btnClean.addEventListener('click', cleanInfo)
// 


document.addEventListener('DOMContentLoaded',function(){
    showInfo();
})

document.getElementById('btn-add-nota').addEventListener('click', function(){
    getInfo(nota)
    setLocalInfo(nota)
    showInfo()
    
})
document.getElementById('btn-clean-notas').addEventListener('click', function(){
    cleanInfo()
    showInfo()

})

// recoger la información 
function getInfo(){
    // capturamos lo que el usuario introduce
    let nota = document.getElementById('nota').innerHTML
    console.log(nota)
    return nota
    
}
// alamacenarla en localStorage
function setLocalInfo(nota){
    // guardaría la info en localStorage
    const clave = Date.now();
  localStorage.setItem(clave,getInfo(nota))
   
}

// leerla y sacarla por pantalla
function showInfo(){
    // leerla y mostrarla por pantalla
    //  sino hay notas mostra no hay nada
    // limpiamos la pantalla
    document.getElementById('show-notas').innerHTML= ''
    for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index)
        let valor = localStorage[clave]
        console.log(valor)  
        let elemento = `
        <div class='lista-notas'>
        ${valor}
        </div>
        `
        document.getElementById('show-notas').innerHTML+= elemento

    }

    
}

// limpiarla

function cleanInfo(){
    // limpiar el local storage y limpiar la pantaal
    // Elimina todos los elementos
localStorage.clear();
showInfo()
    console.log('En localstorage no hay notas')
}

