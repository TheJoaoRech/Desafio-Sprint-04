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

	async getById(payload) {
		const result = await ProductRepository.getById(payload);
		return result;
	}

	async updateById(payload, id) {
		const result = await ProductRepository.updateProduct(payload, id);
		return result;
	}

	async deleteById(payload) {
		const result = await ProductRepository.deleteProduct(payload);
	}

}
module.exports = new ProductService();