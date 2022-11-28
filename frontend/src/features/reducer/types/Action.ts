import Card, { CardId } from "../../CardList/types/Card";

type Action =
 | { type: 'INIT_AD'; payload: Card[] }
 | {type:'ADD_AD'; payload:Card}
 | {type:'DEL_AD'; payload:CardId}

export default Action;
