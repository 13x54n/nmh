import { useState } from "react";
import ProductQuickView from "./ProductQuickview";

export default function ProductCard({ product }) {
  const [productOverview, setProductOverview] = useState(false);

  // console.log(product)

  return (
    <div
      key={product.id}
      className="group relative cursor-pointer"
      onClick={() => setProductOverview(true)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-60">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-60 w-full object-cover object-center lg:h-60 lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>

      {productOverview && (
        <ProductQuickView product={product} setProductOverview={setProductOverview} />
      )}
    </div>
  );
}
