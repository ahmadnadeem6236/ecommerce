import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://placehold.jp/280x280.png",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "https://placehold.jp/280x280.png",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "https://placehold.jp/280x280.png",
    category: "Sports",
  },
  {
    id: 4,
    name: "Backpack",
    price: 59.99,
    image: "https://placehold.jp/280x280.png",
    category: "Fashion",
  },
];
export default function FeatureProduct() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl text-black font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
              width={100}
              height={100}
            />
            <div className="p-4">
              <h3 className="font-semibold text-black/80 text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-black text-lg">
                  ${product.price}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
