let argv = require('yargs')
    // index crear -tarea "mi tarea" -t
    .command('crear', 'Crea una tarea en la Lista de Tareas (toDo)', {
        tarea: {
            demand: true,
            alias: 't',
            desc: 'EJEMPLO: node index.js -t "Mi Nueva tarea"'
        }
    })
    // index listar -l
    .command('listar', 'Muestra todas las tareas en la Lista de Tareas (toDo)', {
        listar: {
            demand: false,
            alias: 'l',
            desc: 'EJEMPLO: node index.js -l'
        }
    })
    // index borrar
    .command('borrar', 'Borra una tarea en la Lista de Tareas (toDo)', {
        tarea: {
            demand: true,
            alias: 't',
            desc: 'EJEMPLO: node index.js -t "Mi Nueva tarea"'
        },
        borrar: {
            demand: true,
            alias: 'b',
            desc: 'EJEMPLO: node index.js -t "Mi Nueva tarea" -b'
        }
    })
    // index modificar -t "mi tarea " -c
    .command('modificar', 'Cambia el estado de una tarea en la Lista de Tareas (toDo) a completado o no completado', {
        tarea: {
            demand: true,
            alias: 't',
            desc: 'EJEMPLO: node index.js -t "Mi Nueva tarea"'
        },
        completado: {
            demand: true,
            alias: 'c',
            desc: 'EJEMPLO: node index.js -t "Mi Nueva tarea" -c'
        }
    })
    .help()
    .argv


module.exports = {
    argv
}