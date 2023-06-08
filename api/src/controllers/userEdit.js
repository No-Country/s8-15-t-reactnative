const { User } = require('../db.js');

const userEdit = async (req, res) => {
    try {
      const userIdOrEmail = req.params.userIdOrEmail; // Obtener el ID o el correo electrónico del usuario desde los parámetros de la ruta
      const {email, phone,dni,country,picture } = req.body;
  
      let user;
  
      if (userIdOrEmail.includes('@')) {
        // Si el parámetro es un correo electrónico
        user = await User.findOne({ where: { email: userIdOrEmail } });
      } else {
        // Si el parámetro es un ID
        user = await User.findByPk(userIdOrEmail);
      }
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      // Actualizar los campos deseados
      user.email = email;
      user.phone = phone;
      user.dni = dni;
      user.country = country;
      user.picture= picture;
      
      await user.save(); // Guardar los cambios
  
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocurrió un error al intentar editar los datos del usuario' });
    }
};
  
module.exports = {
    userEdit,
};