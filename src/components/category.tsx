import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Electronics", count: "5" },
  { name: "Fashion", count: "5" },
];

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl text-black font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white text-black p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="font-semibold text-lg">{category.name}</h3>
            <p className="text-black text-sm">{category.count} items</p>
            <ChevronRight className="h-5 w-5 text-black mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
