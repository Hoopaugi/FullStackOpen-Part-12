import express from 'express'
import cors from 'cors'
import morgan from 'morgan';

import indexRouter from './index';
import todosRouter from './todos';

const app = express();

app.use(cors());

app.use(morgan('dev'))
app.use(express.json());

app.use(indexRouter)
app.use('/todos', todosRouter)

export default app
