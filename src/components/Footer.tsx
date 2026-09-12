import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <div className="footer container mx-auto py-20 px-5">
      <div className="footer-content md:grid-cols-4">
        <div className="brand-block">
          <div className="div">
            <img src={logo} alt="Logo" className=" mx-auto md:mx-0" />
          </div>

          <p className="short-description text-[#64748B] text-sm mt-3 text-center md:text-start">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="social_links flex items-center gap-5 mt-5 justify-center md:justify-normal">
            <li>
              <a href="" className="text-[#475569] font-semibold ">
                GitHub
              </a>
            </li>
            <li>
              <a href="" className="text-[#475569] font-semibold">
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="text-[#475569] font-semibold">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="products hidden md:flex flex-col gap-2 mx-auto">
          <h3 className="title uppercase text-md font-semibold ">Product</h3>
          <a href="" className="text-[#64748B]">
            Home
          </a>
          <a href="" className="text-[#64748B]">
            Technologies
          </a>
          <a href="" className="text-[#64748B]">
            Projects
          </a>
        </div>

        <div className="company hidden md:flex flex-col gap-2 mx-auto">
          <h3 className="title uppercase text-md font-semibold">Company</h3>
          <a href="" className="text-[#64748B]">
            About
          </a>
          <a href="" className="text-[#64748B]">
            Contact
          </a>
          <a href="" className="text-[#64748B]">
            Careers
          </a>
        </div>

        <div className="legal hidden md:flex flex-col gap-2 mx-auto">
          <h3 className="title uppercase text-md font-semibold">Legal</h3>
          <a href="" className="text-[#64748B]">
            Privacy Policy
          </a>
          <a href="" className="text-[#64748B]">
            Terms of Service
          </a>
        </div>
      </div>

      <div className="bottom-bar flex w-full items-center justify-between gap-5 border-t border-slate-200 pt-5 mt-10 sm:flex-row">
        <p className="text-[#94A3B8]">
          &copy; 2026 DevStack. All rights reserved.
        </p>

        <div className="others flex items-center gap-5">
          <a href="" className="text-[#94A3B8]">
            Privacy
          </a>
          <a href="" className="text-[#94A3B8]">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer