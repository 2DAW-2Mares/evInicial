/**
 * CuestionarioController
 *
 * @description :: Server-side logic for managing cuestionarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	load: function(req, res, next) {
		Cuestionario.findOne({
			where: { id: Number(req.params.cuestionarioId)}
		}).populate('preguntas').then(function(cuestionario){
			if(cuestionario) {
				req.cuestionario = cuestionario;
				next();
			} else { next(new Error('No existe el cuestionario con el id' + req.params.cuestionarioId));}
		}).catch(function(error){next(error);});
	},

	duplicar: function(req, res, next) {
/* Con metodo de clase 
		Cuestionario.duplicar
			(req.cuestionario,	function (err, cuestionarioDuplicado)
				{ res.json(cuestionarioDuplicado)}
			);
*/
/* Con metodo de instancia */

		req.cuestionario.duplicar
			(function (err, cuestionarioDuplicado)
				{ res.json(cuestionarioDuplicado)}
			);
	},

	asociarGrupo: function(req, res, next) {
		console.log(req.cuestionario.id + ' - ' + req.cuestionario.alumnos)
		req.cuestionario.asociarGrupo(req.grupo);
		res.json(req.cuestionario);
	},

	resultado: function(req, res, next) {
		var aciertos = 8, errores = 2;
		res.render('cuestionarios/resultado.ejs', {aciertos: aciertos, errores: errores});
	}

};

