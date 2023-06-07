const verifyRegisterData = (req, res, next) => {
	const { name, email, password,  } = req.body
	const invalidFormat = /^[A-Za-z]*$/
	const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (!invalidFormat.test(name) )
		return res.send('formato de nombre invalido')
	if (!invalidEmail.test(email)) return res.send('correo invalido')
	if (password === '') return res.send('Ingrese una clave válida')
	
	next()
}
module.exports = verifyRegisterData
