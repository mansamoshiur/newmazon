import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function HomepageMain() {
  return (
    <>
      <div className="mt-24">
        <FeaturedProduct />
        <Products />
        <Footer />
      </div>
    </>
  );
}
