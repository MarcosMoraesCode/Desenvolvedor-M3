export type Sizes =
  | "none"
  | "P"
  | "M"
  | "G"
  | "GG"
  | "U"
  | "36"
  | "38"
  | "40"
  | "36"
  | "38"
  | "40";

export type Prices =
  | "none"
  | [0, 50]
  | [50, 150]
  | [150, 300]
  | [300, 500]
  | [500, 1000000];

export type OptionFilter = "expensive" | "cheaper" | "recent" | "none";

export interface Product {
  id: string;
  name: string;
  price: number;
  parcelamento: Array<number>;
  color: string;
  image: string;
  size: Array<string>;
  date: string;
}
