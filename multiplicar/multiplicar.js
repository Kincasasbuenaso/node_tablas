const fs = require('fs');
const colors = require('colors');

let ListTable=(base, limite)=>{

	let data ='';
	console.log('====================='.blue);
	console.log(`tabla del ${base}`.red);
	console.log('====================='.blue);

	for (let i = 1; i <= limite; i++) {
		data += `${base} * ${i} = ${base * i}\n`;
		//console.log(data);
	}
	console.log(data);
}


let CreateFile = ( base, limite ) => {
	return new Promise((resolve, reject)=>{

		if(! Number(base) ){
			reject(`El parametro ${base}  no es un Numero`);
			return;
		}

		let data ='';

		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
			//console.log(data);
		}


		fs.writeFile('tabla-'+base+'.txt', data, (err) => {
		  if (err) reject(err);
		  else
		  	resolve(`tabla-${base}.txt`);
		  //console.log('Table del '+base+' creada!');
		});
	});
}

module.exports={
	CreateFile,
	ListTable
}

