const EmployeeController = require('../app/controller/EmployeeController');

module.exports = (server, routes, prefix = 'api/v1/people') => {
	routes.post('/', EmployeeController.create);

	routes.get('/teste', (req,res) => {
		res.json('teste');
	});
	server.use(prefix, routes);
};