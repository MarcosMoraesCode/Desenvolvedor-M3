import { Prices } from "../ts/Typing";

// Opções de organização dos produtos
export const organizationOptions = [
  { value: "recent", label: "Mais recentes" },
  { value: "cheaper", label: "Menor preço" },
  { value: "expensive", label: "Maior preço" },
];

// Opções de cores disponíveis dos produtos
export const colors = [
  "Amarelo",
  "Azul",
  "Branco",
  "Cinza",
  "Laranja",
  "Verde",
  "Vermelho",
  "Preto",
  "Rosa",
  "Vinho",
];

// Opções de tamanhos disponíveis dos produtos
export const sizeFilters = [
  "P",
  "M",
  "G",
  "GG",
  "U",
  "36",
  "38",
  "40",
  "36",
  "38",
  "40",
];

// Opções de faixas de preço dos produtos
export const priceOptions = [
  { id: "price50", legend: "de R$0 até R$50", limit: [0, 50] as Prices },
  { id: "price150", legend: "de R$51 até R$150", limit: [50, 150] as Prices },
  {
    id: "price300",
    legend: "de R$151 até R$300",
    limit: [150, 300] as Prices,
  },
  {
    id: "price500",
    legend: "de R$301 até R$500",
    limit: [300, 500] as Prices,
  },
  {
    id: "price999",
    legend: "a partir de R$500",
    limit: [500, 1000000] as Prices,
  },
];
