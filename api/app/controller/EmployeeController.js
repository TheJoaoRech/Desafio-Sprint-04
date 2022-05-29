//respostas dos metodos 
const EmployeeService = require('../service/EmployeeService');
class EmployeeController {
	//create employe
	async create(req, res) {
		try {
			const result = await EmployeeService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listAll(req, res) {
		try {
			const result = await EmployeeService.listAll(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

}
module.exports = new EmployeeController ();
