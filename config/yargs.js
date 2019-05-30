let opt = {
    base: {
        demand: true,
        alias: ('b'),
    },
    limite: {
        alias: 'L',
        default: 10
    },
}
const argv = require('yargs')
    .command('listar', 'imprimer en consola la tabla de multiplicar', opt)
    .help()
    .command('crear', 'crea un archivo', opt)
    .help()
    .argv;
module.exports = {
    argv,
}