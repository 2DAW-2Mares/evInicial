/**
* Cuestionario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    observaciones : { type: 'string' },

    fechaFin : { type: 'date' },

    preguntas : {
    	collection : 'pregunta',
    	via : 'cuestionarios'
    },

    duplicar: function (cb) {
	    cuestionarioJSON = this.toJSON();
	    delete cuestionarioJSON["id"];
	    Cuestionario.create(cuestionarioJSON)
	    	.exec(function createCB(err, created){
			      if (err) return cb(err);
			      /*
			      cuestionario.preguntas.forEach(function(pregunta){
			      	created.preguntas.add(pregunta.id)
			      });
				*/
			    cb(null, created);
	    })
    }

  },

  duplicar: function (cuestionario, cb) {

  // Before doing anything else, check if a primary key value
  // was passed in instead of a record, and if so, lookup which
  // person we're even talking about:
  (function _lookupCuestionarioIfNecessary(afterLookup){
    // (this self-calling function is just for concise-ness)
    if (typeof cuestionario === 'object')
  		return afterLookup(null, cuestionario);
    Cuestionario.findOne(cuestionario).populate('preguntas').exec(afterLookup);
  })(function (err, cuestionario){
    if (err) return cb(err);
    if (!cuestionario) {
      err = new Error();
      err.message = require('util').format('No existe ningun cuestionario con el id=%s .', cuestionario);
      err.status = 404;
      return cb(err);
    }

    cuestionarioJSON = cuestionario.toJSON();
    delete cuestionarioJSON["id"];
    Cuestionario.create(cuestionarioJSON)
    	.exec(function createCB(err, created){
		      if (err) return cb(err);
		      /*
		      cuestionario.preguntas.forEach(function(pregunta){
		      	created.preguntas.add(pregunta.id)
		      });
			*/
		      cb(null, created);
    })
  });

}
};

