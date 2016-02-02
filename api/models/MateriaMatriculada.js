/**
* MateriaMatriculada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {

		expediente: { model: 'Alumno' },

		materia: { model: 'Materia' },

		profesor: { model: 'Profesor' },

		anyo: { type: 'integer', size: 4 }

	}

};