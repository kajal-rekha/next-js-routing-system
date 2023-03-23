import { useRouter } from "next/router";

export default function ProductsDetails() {
  const router = useRouter();
  const { productId } = router.query;

  const handleOrder = () => {
    console.log("Order Placed Successfully");
    router.push("/profile");
  };
  return (
    <div>
      <h1>ProductsDetails:{productId}</h1>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}
