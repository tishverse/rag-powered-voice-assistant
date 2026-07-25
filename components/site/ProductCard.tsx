import type { Product } from "@/lib/products";
import { ArrowRight, ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-premium overflow-hidden group flex flex-col">
      <div className="relative aspect-square bg-gradient-to-br from-muted/60 to-surface overflow-hidden">
        <div className="absolute top-4 left-4 text-xs font-medium tracking-wide uppercase text-electric bg-electric/10 rounded-full px-3 py-1">
          {product.category}
        </div>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={900}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-sm text-electric mt-0.5">{product.tagline}</p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          {product.specs.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-electric" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <div className="text-xs text-muted-foreground">From</div>
            <div className="text-2xl font-bold">{product.price}</div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold btn-electric">
            <ShoppingBag className="h-4 w-4" /> Buy Now
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold border border-border hover:border-electric hover:text-electric transition-colors">
            Learn More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
