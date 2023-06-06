// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const userMessageEmail = async (req, res) => {
    const { destinatario, remitente, asunto, contenido,nombre,codigo } = req.body;
    console.log("cccama",destinatario)
    const msg = {
      to: destinatario,
      from: remitente,
      templateId: 'd-5654e81e1a1e426ebd4b0a859aec985e',
      dynamicTemplateData: {
        nombre: nombre,
        codigo:codigo
      },
      
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).json({ mensaje: 'Correo enviado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
};

module.exports = {
	userMessageEmail,
}
