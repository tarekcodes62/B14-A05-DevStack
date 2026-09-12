import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="banner  mx-auto text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-10 py-10 px-5">
      <div className="banner-description">
        <h1 className="mt-10 lg:mt-0 lg:text-6xl text-5xl font-bold mb-10 text-[#0F172A]">
          Build Your Ideal <br />
          <span className="brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] text-lg mb-10 w-1/2 mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="banner-buttons">
          <button className="btn brand-gradient text-white w-[40%] lg:w-50 mr-3 rounded-lg">
            Explore Technologies
          </button>
          <button className="btn w-[40%] lg:w-50 rounded-lg border border-[#bac6d7]">
            Learn More
          </button>
        </div>
      </div>

      <div className="banner-image">
        <img src={bannerImage} alt="bannerImage" width="700" />
      </div>
    </div>
  );
};

export default Banner;
