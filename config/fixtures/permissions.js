// config/fixtures/permissions.js

var Promise = require('bluebird');


exports.create = function () {

	  return Promise.all([
	    Role.findOrCreate({ name: 'profesor' }, { name: 'profesor' }),
	    Role.findOrCreate({ name: 'alumno' }, { name: 'alumno' })
	  ]).then(function(role){
	  		return Promise.all([
			    PermissionService.grant({ role: 'profesor', model: 'Cuestionario', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Cuestionario', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Cuestionario', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Cuestionario', action: 'update'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Pregunta', action: 'read'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Pregunta', action: 'create'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Pregunta', action: 'delete', relation: 'owner'}), 
			    PermissionService.grant({ role: 'profesor', model: 'Pregunta', action: 'update'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Cuestionario', action: 'read'}), 
			    PermissionService.grant({ role: 'alumno', model: 'Pregunta', action: 'read'})
		  ])
	  })
};
