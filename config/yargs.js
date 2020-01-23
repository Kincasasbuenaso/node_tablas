const options={
	base:{
		demand:true,
		alias:'b'
	},
	limite:{
		alias:'l',
		default:10
	}
};

const argv = require('yargs')
.command('create','crea tablas en archivo de texto',options)
.command('list','listar tablas',options)
.help()
.argv;

module.exports={
	argv
}