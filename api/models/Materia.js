/**
* Materia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {

		codigo: { type: 'string', size: 6, unique: true, primaryKey: true },

		materia: { type: 'string', size: 100 },

		ensenanza: { type: 'string', size: 100 },

		curso: { type: 'string', size: 1 },

		materiasMatriculadas: { collection: 'MateriaMatriculada', via: 'materia' },

		materiasImpartidas: { collection: 'MateriaImpartida', via: 'materia' }

	}

};