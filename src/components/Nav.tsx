import logo from '../assets/logo-text.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="border-b border-[#E4E4E7] sticky top-0 bg-white z-50 p-1 md:px-5 2xl:p-1">
      <div className="flex justify-between items-center container mx-auto py-3">
        <AiOutlineMenu className=" md:hidden lg:hidden text-2xl text-[#7B7171]" />

        <div className="logo ">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="hidden lg:flex gap-8 text-[#475569] font-medium">
          <li className="text-[#DB2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="">
          <button className="btn border-none bg-white mx-2">Sign In</button>
          <button className="btn brand-gradient text-white rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
