import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <main className="py-10">
        <div className="products flex flex-wrap items-start justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="pagination text-center">
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </main>
    </>
  );
}
