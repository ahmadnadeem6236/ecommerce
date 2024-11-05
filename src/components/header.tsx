import { ShoppingCart, Search, Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 mr-4" />
            <span className="font-bold text-xl text-blue-600">Shopzone</span>
          </div>

          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 text-gray-500" />
            <ShoppingCart className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
