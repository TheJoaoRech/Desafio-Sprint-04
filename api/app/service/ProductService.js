const ProductRepository = require('../repository/ProductRepository');
const Product = require('../schema/ProductSchema');

class ProductService {

	async create(payload) {
		const result = await ProductRepository.create(payload);
		return result;
	}

	async listAll(payload) {
		const result = await ProductRepository.listAll(payload);
		return result;
	}

}
module.exports = new ProductService();