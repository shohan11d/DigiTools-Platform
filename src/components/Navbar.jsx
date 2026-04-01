import { LuShoppingCart } from "react-icons/lu";
export default function Navbar({ cartItems }) {
  return (
    <header>
      <div className="border-b border-[#f2f2f2]">
        <nav className="nav flex items-center justify-between  font-semibold py-6 custom-container">
          <a href="/" className="nav-logo">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold  ">
              DigiTools
            </span>
          </a>

          {/* Navigation */}
          <ul className="nav-links gap-8 hidden lg:flex">
            <li>
              <a href="/features">Products</a>
            </li>
            <li>
              <a href="/pricing">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">Testimonials</a>
            </li>
            <li>
              <a href="/about">FAQ</a>
            </li>
          </ul>

          {/* Actions */}
          <div className="nav-actions flex items-center gap-4">
            <div className="relative hidden md:block">
              <a href="/cart" aria-label="Cart">
                <LuShoppingCart />
              </a>
              {cartItems.length > 0 && (
                <span className="absolute -top-4 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                 {cartItems.length}
                </span>
              )}
            </div>

            <a href="/login" className="hidden md:block">Login</a>

            <a href="/signup" className="btn-primary px-4 py-3 font-semibold">
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
