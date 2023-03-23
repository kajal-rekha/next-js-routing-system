import { useRouter } from "next/router";

export default function OrderDetails() {
  const {
    query: { productId, orderId },
  } = useRouter();
  return (
    <div>
      <h1>
        Products: {productId} -Order {orderId}
      </h1>
    </div>
  );
}
