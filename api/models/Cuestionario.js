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
    }

  }
};

