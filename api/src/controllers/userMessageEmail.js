// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('');

const userMessageEmail = async (req, res) => {
    const { destinatario, remitente,nombre,codigo } = req.body;
    const msg = {
      to: destinatario,
      from: remitente,
      templateId: '',
      dynamicTemplateData: {
        nombre: nombre,
        codigo:codigo
      },
      
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).json({ mensaje: 'Correo enviado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el correo electronico' });
    }
};

module.exports = {
	userMessageEmail,
}
