//respostas dos metodos 
const EmployeeService = require('../repository/EmployeeRepository');
class EmployeeController {
	//create employee
	async create(req, res) {
		try {
			const result = await EmployeeService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

}
module.exports = new EmployeeController ();
