const ProductController = require('../app/controller/ProductController');

module.exports = (server, routes, prefix = '/api/v1/product') => {
	routes.post('/', ProductController.create);
	routes.get('/', ProductController.listAll);
	routes.get('/:id', ProductController.getById);

	server.use(prefix, routes);
};