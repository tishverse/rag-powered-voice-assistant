import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Aetherix Technologies" },
      { name: "description", content: "Explore the full Aetherix lineup: laptops, smartwatches, earbuds, smart speakers, tablets and fast chargers." },
      { property: "og:title", content: "Aetherix Products" },
      { property: "og:description", content: "Premium electronics for smarter living." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-sm text-electric font-semibold uppercase tracking-wider">The Collection</div>
        <h1 className="mt-2 text-5xl font-bold">All Products</h1>
        <p className="mt-4 text-muted-foreground">Six devices. One seamless ecosystem. Built to last, designed to delight.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
