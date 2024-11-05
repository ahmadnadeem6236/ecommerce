import Category from "@/components/category";
import FeatureProduct from "@/components/featureProduct";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Category />
      <FeatureProduct />
    </div>
  );
}
