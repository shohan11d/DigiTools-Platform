import playIcon from "../assets/Play.png";
import bannerImg from "../assets/banner.png";

function Hero() {
  return (
    <section>
      <div className="custom-container">
        <div className=" py-15 md:flex md:justify-between md:items-center ">
          {/* left column */}
          <div>
            <div className="flex justify-center items-center gap-[5px] w-fit font-medium text-[14px]  bg-[#E1E7FF] px-4  py-2 rounded-full">
              <div className="h-5 w-5  bg-[#C9C2FD] rounded-full grid place-items-center">
                <div className="h-3 w-3 bg-[#A186FB] rounded-full grid place-items-center">
                  <div className="h-2 w-2 bg-linear-to-r from-secondary to-primary rounded-full"></div>
                </div>
              </div>
              <span className="text-violet-700 ">
                New: AI-Powered Tools Available
              </span>
            </div>

            {/* title */}
            <h1 className="text-[40px] md:text-[72px]  font-bold leading-tight ">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382] mt-4">
              Access premium AI tools, design assets, templates, and
              productivity
              <br /> software—all in one place. Start creating faster today.
              <br /> Explore Products
            </p>
            <div className="flex gap-4 mt-8">
              <button className="btn-primary">Explore Products</button>
              <button className="flex items-center gap-2 bg-white  font-bold border border-[#9514FA] text-purple-800 px-4 py-3 rounded-full">
                <img src={playIcon} alt="" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          {/* right column */}

          <div className="max-w-[500px]">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
