import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "#",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "#",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "#",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "#",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="pb-16 pt-10">
    <div className="container">

      <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
           <div>
            <img src={logo} alt="" />
            <p>Copyright @ {year} </p>
           </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link,index) => <Link className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[rgb(151,113,255)]" to={link.path} key={index}>{link.icon}</Link>)}
           </div>

    </div>
  </footer>;
};

export default Footer;
