import Link from "next/link";
import React from "react";

export default function Products({ productId = 44 }) {
  return (
    <div>
      <Link href="/">Home</Link>

      <Link href="/products/1">Products 1</Link>
      <Link href="/products/2">Products 2</Link>
      <Link href="/products/3">Products 3</Link>
      <Link href="/products/4">Products 4</Link>
      <Link href={`/products/${productId}`} replace>
        Products {productId}
      </Link>
    </div>
  );
}
