const EmployeeController = require('../app/controller/EmployeeController');
const { authSchema } = require('../app/utils/employeeValidate');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
	routes.post('/', EmployeeController.create);
	routes.get('/', EmployeeController.listAll);
	routes.get('/:id', EmployeeController.getById);
	routes.put('/:id', EmployeeController.updateEmployee);
	routes.delete('/:id', EmployeeController.deleteEmployee);

	server.use(prefix, routes);
};