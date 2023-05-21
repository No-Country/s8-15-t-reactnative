const verifyLoginData = (req, res, next) => {
	const data = {
		statusCode: 200,
		errors: {},
	}
	const { email, password, repeatedPassword } = req.body
	const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (!invalidEmail.test(email)) {
		data.statusCode(401)
		data.errors.email = 'Ingrese formato de email válido'
	}
	if (password !== repeatedPassword) {
		data.statusCode(401)
		data.errors.password = 'Las contraseñas son diferentes'
	}
	if (data.statusCode !== 200) return res.send(data)
	next()
}
module.exports = verifyLoginData
