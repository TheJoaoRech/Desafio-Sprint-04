//respostas dos metodos 
const EmployeeService = require('');
class EmployeeController {
	create(req, res) {
		try {
			const resultst EmployeeService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

}