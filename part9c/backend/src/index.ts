import express from 'express';
import routerDiagnose from './routes/diagnose';

 
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res)=>{
    console.log('ping recibido');
    res.send('pong');
});

app.use('/api/diagnoses', routerDiagnose);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${PORT}`);
});