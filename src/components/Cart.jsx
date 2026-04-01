export default function Cart({ cartItems, setCartItems, setActiveTab }) {
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.itemPrice, 0);
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h2>

          {cartItems.length > 0 ? (
            <>
              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between pb-6 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.itemIcon}
                        alt={item.itemName}
                        className="h-12 w-12"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.itemName}
                        </h3>
                        <p className="text-gray-500">${item.itemPrice}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-pink-500 font-semibold hover:text-pink-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8 pt-6 border-t-2 border-gray-200">
                <p className="text-gray-500 font-medium">Total</p>
                <p className="text-3xl font-bold text-gray-900">${total}</p>
              </div>

              <button
                onClick={() => {
                  setCartItems([]);
                  setActiveTab("active");

                }}
                className="w-full py-3 px-6 rounded-full bg-purple-600 text-white font-semibold text-lg hover:bg-purple-700 transition"
              >
                Proceed To Checkout
              </button>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Continue Shopping
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
