const twilio = require('twilio');

const userSms = async (req, res) => {
    const { phoneNumber, message } = req.body;

    const accountSid = 'AC645545fada2b7c8e018276daac20ee35';
    const authToken = '4a715a0f08c6e5ae8b6930ed2672a743';
    const client = twilio(accountSid, authToken);
    const cleanMessage = message.replace("sent from your twilio trial account-", "");
    
    client.messages
      .create({
        body: cleanMessage,
        from: '+13156133815',
        to: phoneNumber,
      })
      .then(() => {
        res.send('Mensaje de texto enviado exitosamente.');
      })
      .catch((error) => {
        res.status(500).send('Error al enviar el mensaje de texto: ' + error.message);
      });
}
module.exports = {
	userSms,
}
