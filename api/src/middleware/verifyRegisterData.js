const verifyRegisterData = (req, res, next) => {
	const { name, lastname, email } = req.body
	const invalidFormat = /^[A-Za-z]*$/
	const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (!invalidFormat.test(name) || !invalidFormat.test(lastname))
		return res.send('formato de nombre invalido')
	if (!invalidEmail.test(email)) return res.send('correo invalido')
	next()
}
module.exports = verifyRegisterData
