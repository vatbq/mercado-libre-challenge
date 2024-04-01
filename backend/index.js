const app = require('./app');
const config = require('./config');

const PORT = process.env.PORT || config.port;

app.listen(PORT);
