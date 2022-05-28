const ProductController = require('../app/controller/ProductController');

module.exports = (server, routes, prefix = '/api/v1/product') => {
	routes.post('/', ProductController.create);
	routes.get('/', ProductController.listAll);
	routes.get('/:id', ProductController.getById);
	routes.put('/:id', ProductController.update);
	routes.delete('/:id', ProductController.deleteById);

	server.use(prefix, routes);
};