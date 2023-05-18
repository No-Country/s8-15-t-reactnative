const verifyLoginData = (req, res, next) => {
	const { email } = req.body
	const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (!invalidEmail.test(email)) return res.send('formato de correo invalido')
	next()
}
module.exports = verifyLoginData
