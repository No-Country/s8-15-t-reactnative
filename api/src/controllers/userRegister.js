const { hash } = require('bcrypt');
const { User } = require('../db.js');

const userRegister = async (req, res) => {
  try {
    const {password, name, email } = req.body;
    const hashedPassword = await hash(password, 12);

    const emailExist = await User.findOne({ where: { email: email } });
   

    if (emailExist) {
      return res.status(401).json({ error: 'Este email ya está registrado' });
    }
   
    
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(200).json(newUser);
  } catch (error) {
	console.log(error)
    res.status(500).json({ error: 'Ocurrió un error al registrar al usuario' });
  }
};

module.exports = {
  userRegister,
};
