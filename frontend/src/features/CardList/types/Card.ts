export default interface Card {
  id?: number;
  title: string;
  description: string;
  price: string;
  img: string;
}
export type CardId = Card['id']
