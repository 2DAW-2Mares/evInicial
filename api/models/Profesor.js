/**
* Profesor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {

		apellidos: { type: 'string', size: 19 },

		nombre: { type: 'string', size: 19 },

		email: { type: 'string', size: 100 },

	    user: {
	        model: 'user'
	    },

		materias: { collection: 'MateriaImpartida', via: 'profesor' }

	}

};
