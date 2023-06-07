const verifyLoginData = (req, res, next) => {
	const data = {
		statusCode: 200,
		errors: {},
	}
	const { email, password } = req.body
	const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (!invalidEmail.test(email)) {
		data.statusCode(401)
		data.errors.email = 'Ingrese formato de email válido'
	}
	if (!password) {
		data.statusCode(401)
		data.errors.password = 'Las contraseñas'
	}
	if (data.statusCode !== 200) return res.send(data)
	next()
}
module.exports = verifyLoginData
