import express from 'express'
import cors from 'cors'
import morgan from 'morgan';

import indexRouter from './index';
import todosRouter from './todos';
import statisticsRouter from './statistics';

const app = express();

app.use(cors());

app.use(morgan('dev'))
app.use(express.json());

app.use(indexRouter)
app.use('/todos', todosRouter)
app.use('/statistics', statisticsRouter)

export default app
