let fs = require('fs')

let listaToDo = []

// guardar en la DB

let guardarDB = () => {
    let data = JSON.stringify(listaToDo)
    return new Promise((resolve, reject) => {
        fs.writeFile('BD/bd.json', data, (err) => {
            if (err) reject(err);
            console.log(data);
        });
    })

}

// guardar en la DB

let cargarDB = () => {
    try {
        listaToDo = require('../BD/bd.json')
    } catch (error) {
        listaToDo = []
    }
    return listaToDo;
}

// creando tarea
let crear = async (tarea) => {
    newTarea = {
        tarea: tarea,
        completado: false
    }
    listaToDo = await cargarDB()
    listaToDo.push(newTarea)
    guardarDB()
    return new Promise((resolve, reject) => {
        if (!newTarea) {
            reject(`error no se pudo crear la tarea`)
        } else {
            resolve(newTarea)
        }
    })

}

// listar tareas

let listar = async () => {
    return await cargarDB()
}

// modificar tareas
let modificar = async (tarea) => {
    let tareaModificada;
    listaToDo = await cargarDB()
    listaToDo.find((tareaTmp) => {
        if (tareaTmp.tarea === tarea) {
            tareaTmp.completado = !tareaTmp.completado
            tareaModificada = tareaTmp
        }
    })
    return new Promise((resolve, reject) => {

        if (typeof tareaModificada === 'object') {
            guardarDB()
            resolve(tareaModificada)
        } else {
            reject(`La tarea no existe`)
        }
    })
}
let borrar = (tarea) => {
    let index;
    let tareaDel;
    listaToDo = cargarDB();
    listaToDo.find((tareaTmp) => {
        if (tareaTmp.tarea === tarea) {
            index = listaToDo.indexOf(tareaTmp);
            tareaDel = tareaTmp
        }
    })
    // console.log(listaToDo, index, tareaDel);
    return new Promise((resolve, reject) => {
        if (!tareaDel) {
            reject(`La tarea no existe`)
        } else {
            listaToDo.splice(index, 1)
            guardarDB()
            resolve(tareaDel)
        }
    })
}


module.exports = {
    crear,
    listar,
    modificar,
    borrar
}