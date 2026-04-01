export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-secondary text-white to-primary py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg text-purple-100 mb-2">
          Join thousands of professionals who are already using Digitools to
          work smarter.
        </p>
        <p className="text-lg text-purple-100 mb-8">
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-semibold bg-red-600 hover:bg-gray-100 transition-all">
            Explore Products
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
