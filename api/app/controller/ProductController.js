const ProductService = require('../service/ProductService');

class ProductController {
	async create(req, res) {
		try {
			const result = await (await ProductService.create(req.body)).populate('_id.employee_id');
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listAll(req, res) {
		try {
			const result = await ProductService.listAll(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async getById(req, res) {
		try {
			const result = await ProductService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}

	}

	async update(req, res) {
		try {
			const result = await ProductService.updateById(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
        
	}

	async deleteById(req, res) {
		try {
			const result = await ProductService.delete(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}

	}



}
module.exports = new ProductController ();