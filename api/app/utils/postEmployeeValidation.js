const Joi = require('joi')
	.extend(require('@joi/date'));

module.exports = (req, res, next) => {

	try { 
		const authSchema = Joi.object({

			name: Joi.string()
				.min(3)
				.max(50)
				.required()
				.trim(),

			cpf: Joi.string()
				.required(),

			office: Joi.string()
				.required()
				.valid('gerente','vendedor','caixa'),

			birthday: Joi.date()
				.max('2006-01-01')
				.less('now')
				.format('DD/MM/YYYY')
				.messages({'date.max':'Age must be 16+'})
				.required(),


		});

		const { error } = authSchema.validate(req.body, { abortEarly: false});
		if (error) throw error;
		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};