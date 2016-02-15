// api/models/User.js

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
afterCreate: [
    function setOwner (user, next) {
      sails.log.verbose('User.afterCreate.setOwner', user);
      User
        .update({ id: user.id }, { owner: user.id })
        .then(function (user) {
          next();
        })
        .catch(function (e) {
          sails.log.error(e);
          next(e);
        });
    },
    function attachDefaultRole (user, next) {
      Promise.bind({ }, User.findOne(user.id)
        .populate('roles')
        .then(function (user) {
          this.user = user;
          return Role.findOne({ name: 'registered' });
        })
        .then(function (role) {
          this.user.roles.add(role.id);
          return this.user.save();
        })
        .then(function (updatedUser) {
          sails.log.silly('role "registered" attached to user', this.user.username);
          next();
        })
        .catch(function (e) {
          sails.log.error(e);
          next(e);
        })
      );
    },
    
    function attachProfesorRole (user, next) {
      Profesor.findOne({email: user.email})
        .populate('user')
        .then(function (profesor) {
          if(profesor) {
            Profesor.update(profesor.id, {user: user.id}).then(function(profesores){
             Promise.bind({ }, User.findOne(user.id)
              .populate('roles')
              .then(function (user) {
                this.user = user;
                return Role.findOne({ name: 'profesor' });
              })
              .then(function (role) {
                this.user.roles.add(role.id);
                return this.user.save();
              })
              .then(function (updatedUser) {
                sails.log.verbose('role "profesor" attached to user', profesor.nombre);
                next();
              })
              .catch(function (e) {
                sails.log.error(e);
                next(e);
              })
            );
            })
          } else {
            next();
          }
        })
    },
    
    function attachAlumnoRole (user, next) {
      Alumno.findOne({email: user.email})
      	.populate('user')
      	.then(function (alumno) {
      		if(alumno) {
	      		Alumno.update(alumno.id, {user: user.id}).then(function(alumnos){
			       Promise.bind({ }, User.findOne(user.id)
			        .populate('roles')
			        .then(function (user) {
			          this.user = user;
			          return Role.findOne({ name: 'alumno' });
			        })
			        .then(function (role) {
			          this.user.roles.add(role.id);
			          return this.user.save();
			        })
			        .then(function (updatedUser) {
			          sails.log.verbose('role "alumno" attached to user', alumno.nombre);
			          next();
			        })
			        .catch(function (e) {
			          sails.log.error(e);
			          next(e);
			        })
			      );
	      		})
      		} else {
      			next();
      		}
      	})
    }
  ]
});
