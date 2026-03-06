import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCard {
  productName: string,
  quantity: number
}

const ItemsInCard: ItemInCard[] = [
  { productName: 'Nintendo 2', quantity: 1 },
  { productName: 'MackBook Pro M5 pro', quantity: 1 },
  { productName: 'Display Studio', quantity: 2 }
]


export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {
        ItemsInCard.map(({ productName, quantity }) => (
          <ItemCounter name={productName} cuantity={quantity} />

        ))}

      {/* <ItemCounter name="Nintendo Switch" cuantity={1} /> */}
      {/* <ItemCounter name="PS5" cuantity={1} /> */}
      {/* <ItemCounter name="MacBook Pro" cuantity={2} /> */}
      {/* <ItemCounter name="MacStudio" cuantity={4} /> */}
      {/* <ItemCounter name="Spiro Freedom Aguila Arpia top " cuantity={2} /> */}
    </>
  )

}