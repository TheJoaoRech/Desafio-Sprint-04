const EmployeeController = require('../app/controller/EmployeeController');
const postEmployeeValidation = require ('../app/utils/postEmployeeValidation');
const getEmployeeValidation = require('../app/utils/getEmployeeValidation');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
	routes.post('/', postEmployeeValidation, EmployeeController.create);
	routes.get('/', getEmployeeValidation, EmployeeController.listAll);
	routes.get('/:id', EmployeeController.getById);
	routes.put('/:id', EmployeeController.updateEmployee);
	routes.delete('/:id', EmployeeController.deleteEmployee);

	server.use(prefix, routes);
};