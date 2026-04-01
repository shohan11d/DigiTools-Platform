import { useState } from "react";
import Cart from "./Cart";

const data = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best seller",
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
    icon: "/products/writing.png",
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    icon: "/products/design-tool.png",
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: "/products/operation.png",
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "Workflow automation",
      "Scheduled actions",
      "Integration support",
    ],
    icon: "/products/portfolio.png",
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: [
      "AI-enhanced editing",
      "Resume templates",
      "Cover letter builder",
    ],
    icon: "/products/writing.png",
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best seller",
    features: ["Post planning", "Hashtag research", "Analytics dashboard"],
    icon: "/products/writing.png",
  },
];

function Catagories({ cartItems, setCartItems, activeTab, setActiveTab }) {

  function buyItem(item) {
    setCartItems((prev) => [...prev, item]);
  }
  return (
    <section className="custom-container pt-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mb-2"></div>
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className=" rounded-full border border-gray-400/30 p-1">
          <button
            className={`${
              activeTab === "active"
                ? "bg-purple-600 shadow-xl px-6 py-2 rounded-full text-white"
                : "bg-transparent px-6 py-2 rounded-full text-black"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Products
          </button>
          <button
            className={`${
              activeTab === ""
                ? "bg-purple-600 shadow-xl px-6 py-2 rounded-full text-white"
                : "bg-transparent px-6 py-2 rounded-full text-black"
            }`}
            onClick={() => setActiveTab("")}
          >
            Cart ({cartItems.length}){" "}
          </button>
        </div>
      </div>

      {activeTab === "active" ? (
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((tools) => (
            <article
              key={tools.id}
              className="card rounded-2xl max-w-[380px] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="card-body py-4 px-6">
                <div className="text-right">
                  <span
                    className={`badge badge-xs px-3 py-3 rounded-full text-[14px] font-semibold border-none ${
                      tools.tagType === "popular"
                        ? "bg-[#E1E7FF] text-violet-400 "
                        : tools.tagType === "best seller"
                          ? "bg-[#FEF3C6] text-[#BB4D00]"
                          : "bg-[#DBFCE7] text-[#059669]"
                    }`}
                  >
                    {tools.tag}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-15 w-15 flex justify-center items-center rounded-full border border-[#f2f2f2]">
                    <img
                      src={tools.icon}
                      alt={tools.name}
                      className="h-7 w-7"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-1">{tools.name}</h2>
                <p className="text-gray-500 mb-4">{tools.description}</p>

                <div className="flex justify-between items-end">
                  <p className="text-3xl font-bold">
                    ${tools.price}
                    <span className="text-base font-normal text-gray-500">
                      /
                      {tools.period === "one-time"
                        ? "one-time"
                        : tools.period === "yearly"
                          ? "yr"
                          : "mo"}
                    </span>
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {tools.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn-primary font-semibold   rounded-full mt-3"
                  onClick={() => {
                    buyItem({
                      id: tools.id,
                      itemName: tools.name,
                      itemPrice: tools.price,
                      itemIcon: tools.icon,
                    });
                  }}
                >
                  Buy Now
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </section>
  );
}

export default Catagories;
