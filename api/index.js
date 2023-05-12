
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const force = false;



	conn.sync({ force }).then(() => {
		server.listen(process.env.PORT || 3001, () => {
			console.log('Escuchando en puerto 3001');
		})
		
	});
	

