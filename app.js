//REQUIREDS
//const fs = require('fs'); //Este es propio de node, por tal motivo solo se importa
//const ex = require('express'); //Esta es una libreria externa que se importa
const argv=require('./config/yargs').argv;
const colors = require('colors/safe');

const { CreateFile, ListTable } = require('./multiplicar/multiplicar'); //Este archivo es creado propio y se incluye con el path

let command=argv._[0];

switch( command ){

	case 'create':
		CreateFile(argv.base,argv.limite)
				.then(file=>console.log(`archivo creado.`,colors.yellow(file)))
				.catch(e=>console.log(e));
	break;

	case 'list':
		ListTable(argv.base, argv.limite);
		//console.log('listing');
	break;

	default:
		console.log('command not found');
}

/*let argv=process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];*/
//let base='ads';
/*let data ='';

for (let i = 1; i <= 10; i++) {
	data += `${base} * ${i} = ${base * i}\n`;
	console.log(data);
}


fs.writeFile('tabla-'+base+'.txt', data, (err) => {
  if (err) throw err;
  console.log('Table del '+base+' creada!');
});*/

/*CreateFile(base)
				.then(file=>console.log(`archivo ${file} creado.`))
				.catch(e=>console.log(e));*/
//console.log(argv.base);
//console.log(argv.limite);