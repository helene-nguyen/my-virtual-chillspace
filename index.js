//~ Dotenv
import 'dotenv/config';

//~ Debug dev environment
import debug from 'debug';
const logger = debug('Entrypoint');

//~ Import modules
import express from 'express';
const app = express();
import { router } from './app/routes/index.js';
import { error } from './app/services/errorHandler.js';

//~ Define statics
app.use('/', express.static('./public'));

//~ Motor
app.set('view engine', 'ejs');
app.set('views', './app/views');

//~ Routes
app.use(router);

//~ Handle error router
app.use(error._404);

//~ Launch the server
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, (err) => {
  if (err) logger(`🧛‍♂️ Error in server setup: ${err.message}`);
  logger(`🎃\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
});
