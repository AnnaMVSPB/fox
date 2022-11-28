import { createContext } from 'react';
import { init } from '../adReducer';
import { Context } from './types/Context';

const initialContextValue:Context = {
state:init,
dispatch:()=>{}
}
// наша переменная для формирования 'обёртки' контекста
const stateContext = createContext(initialContextValue);

// экспортируем контекст
export default stateContext;
