import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-96">
      <Image
        src="https://placehold.jp/1920x600.png"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
        width={100}
        height={100}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Summer Sale
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Up to 50% off on selected items
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
