function Steps() {
  return (
    <div className="bg-[#F9FAFC] my-40">
      <div className="custom-container py-16">
        <h2 className="text-black text-4xl font-bold text-center mb-3">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-[#627382] text-sm mb-8">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid gap-16 md:grid-cols-3">
          <div className="max-w-[380px] bg-white  relative border border-[#f1f1f1]  flex flex-col items-center justify-center gap-6 py-20 px-6 rounded-xl">
            <span className="w-8 text-sm absolute top-4 right-4 bg-primary h-8 p-2  text-white font-medium rounded-full ">
              01
            </span>
            <div className="bg-[#F3E8FE] h-20 w-20 rounded-full flex justify-center items-center">
              <img src="/products/user.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              Create Account
            </h3>
            <p className="text-[#627382] text-sm text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="max-w-[380px] bg-white  relative border border-[#f1f1f1]  flex flex-col items-center justify-center gap-6 py-20 px-6 rounded-xl">
            <span className="w-8 text-sm absolute top-4 right-4 bg-primary h-8 p-2  text-white font-medium rounded-full ">
              02
            </span>
            <div className="bg-[#F3E8FE] h-20 w-20 rounded-full flex justify-center items-center">
              <img src="/products/package.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              Create Account
            </h3>
            <p className="text-[#627382] text-sm text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="max-w-[380px] bg-white relative border border-[#f1f1f1]  flex flex-col items-center justify-center gap-6 py-20 px-6 rounded-xl">
            <span className="w-8 text-sm absolute top-4 right-4 bg-primary h-8 p-2  text-white font-medium rounded-full ">
              03
            </span>
            <div className="bg-[#F3E8FE] h-20 w-20 rounded-full flex justify-center items-center">
              <img src="/products/rocket.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              Create Account
            </h3>
            <p className="text-[#627382] text-sm text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
