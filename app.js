const argv = require('./config/yargs').argv;
const colors = require('colors');

const { creararchivo, ListarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo.green} `))
            .catch(e => console.log(e));
        //console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split(`=`)[1]
/*creararchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo} `))
    .catch(e => console.log(e));
  */