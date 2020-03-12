import { app } from './server';
import { saveEvent, notFound } from './routes';
import { authorisationValidator, fieldValidator } from './validator';
import { config } from './config';

import Queue from 'bull';

app.post('/event', authorisationValidator, fieldValidator, saveEvent);
app.all('*', notFound);

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}.`);
});
