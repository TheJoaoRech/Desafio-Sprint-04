const Joi = require('joi')
	.extend(require('@joi/date'));

module.exports = (req, res, next) => {

	try { 
		const authSchemaGet = Joi.object({

			name: Joi.string()
				.trim(),

			cpf: Joi.string(),

			office: Joi.string(),

			birthday: Joi.string()
			

		});

		const { error } = authSchemaGet.validate(req.body, { abortEarly: false});
		if (error) throw error;
		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};