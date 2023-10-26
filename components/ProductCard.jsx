import Image from "next/image";
import Link from "next/link";
import prImage2 from "public/product2.jpeg";

export default function ProductCard() {
  return (
    <>
      <Link href={"/"}>
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <Image src={prImage2} height={320} width={384} alt="Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Iphone 13 Pro Max</h2>
            <span className="badge">$110.00 USD</span>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
