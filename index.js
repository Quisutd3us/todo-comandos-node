let colors = require('colors')
let argv = require('./config/argv').argv
let todo = require('./bin/crud')

switch (argv._[0]) {
    case 'crear':
        todo.crear(argv.tarea).then((rtaCrear) => {
                console.log(`La tarea : ${rtaCrear.tarea} se ha creado correctamente!!`.inverse);
            })
            .catch((rtaCrear) => {
                console.log(rtaCrear);
            });
        break;
    case 'listar':
        todo.listar().then((tarea) => {
            console.log(`----------------------------------
---------LISTA DE TAREAS----------
----------------------------------
        `);
            tarea.forEach(tarea => {
                console.log(`...................................
Tarea: ${tarea.tarea} completado: ${tarea.completado? 'Si' :'No'}
...................................`);
            });
        }).catch((tarea) => {
            console.log(tarea);
        })

        break;
    case 'modificar':
        todo.modificar(argv.tarea).then((rtaModificar) => {
                console.log(`La Tarea: ${rtaModificar.tarea} - Completado: ${rtaModificar.completado? 'Si' :'No'}, se ha Modificado Correctamente`.inverse)
            })
            .catch((rtaModificar) => {
                console.log(rtaModificar);
            })
        break;
    case 'borrar':
        todo.borrar(argv.tarea).then((rtaBorrar) => {

                console.log(`La Tarea: ${rtaBorrar.tarea}, se BORRO Correctamente`.inverse)
            })
            .catch((rtaBorrar) => {
                console.log(rtaBorrar);
            })
        break;

    default:

    console.log('Comando no reconocido ingrese --help'.inverse);
        break;
}