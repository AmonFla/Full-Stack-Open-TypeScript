import express from 'express';
import cors from 'cors';

import routerDiagnose from './routes/diagnose';
import routerPatient from './routes/patient';


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res)=>{
    console.log('ping recibido');
    res.send('pong');
});

app.use('/api/diagnoses', routerDiagnose);
app.use('/api/patients', routerPatient);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${PORT}`);
});