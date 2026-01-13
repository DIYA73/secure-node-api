import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(helmet());              // Security headers
app.use(express.json());        // Parse JSON

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Secure API running on port ${PORT}`);
});
