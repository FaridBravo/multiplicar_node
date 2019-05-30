//requires
const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(` tabla del ${base}`.green);
    console.log('=================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}
let creararchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base, limite)) {
            reject('no es un numero');
            return;
        }
        let data = ` `
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`el archivo tabla ${base} al ${limite} ha sido creada.`);
        });
    })
}
module.exports = {
    creararchivo,
    ListarTabla,
}