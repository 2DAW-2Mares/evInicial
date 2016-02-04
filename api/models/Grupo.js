/**
* Grupo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    anyo : { type: 'string', size: 7, required: true },

    grupo : { type: 'string', size: 5, required: true },

    subgrupo : { type: 'string', size: 5, required: true },

    ensenyanza : { type: 'string', size: 80 },

    curso : { type: 'int', size: 1 },

    alumnos : {
    	collection: 'alumno',
    	via: 'grupos'
    }

  }
};

