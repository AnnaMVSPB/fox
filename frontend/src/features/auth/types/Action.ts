import { Res } from './User';

type Action =
 | { type: 'AUTH'; payload: Res }
 | { type: 'LOGOUT' };

export default Action;
