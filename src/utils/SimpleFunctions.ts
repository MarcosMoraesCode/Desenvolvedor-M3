//Converte valor em valor monetário do Brasil
export function convertToBRL(value: number) {
  const brlNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return brlNumber;
}
