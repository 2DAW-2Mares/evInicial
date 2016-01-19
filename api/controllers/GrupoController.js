/**
 * GrupoController
 *
 * @description :: Server-side logic for managing grupoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	load: function(req, res, next) {
		Grupo.findOne({
			where: { id: Number(req.params.grupoId)}
		}).populate('alumnos').then(function(grupo){
			if(grupo) {
				req.grupo = grupo;
				next();
			} else { next(new Error('No existe el grupo con el id ' + req.params.grupo));}
		}).catch(function(error){next(error);});
	},

	
};

