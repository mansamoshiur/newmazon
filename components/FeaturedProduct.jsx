import prImage from "public/product.jpg";
import Image from "next/image";

export default function FeaturedProduct() {
  return (
    <>
      <main>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full">
            <Image src={prImage} height={450} width={450} alt="Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">iPhone 15 Pro Max</h2>
            <p> $110.00 USD</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequuntur, sapiente in nobis accusamus tempore hic quisquam
              fugiat aliquam ducimus. Id cupiditate deserunt voluptas. Tempora
              suscipit quam sapiente corrupti adipisci?
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-neutral">Check it out</button>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
