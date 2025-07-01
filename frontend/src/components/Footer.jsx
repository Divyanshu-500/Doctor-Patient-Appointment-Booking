import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-blue-500 py-6">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} My Web. All rights reserved.
          </p>
          <p className="text-sm text-black mt-2">
            Made with ❤️ by Divyanshu Maurya
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/Divyanshu-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/divyanshu-maurya-ved/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-black" />
          </a>
          <a
            href="mailto:024dev024@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <MdEmail className="w-5 h-5 text-black" />
          </a>
        </div>
        <p className="text-sm text-black mt-4 text-center">
          Feel free to explore my{" "}
          <a
            className="text-black font-bold"
            href="https://www.linkedin.com/in/divyanshu-maurya-ved/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>{" "}
          and{" "}
          <a
            className="text-black font-bold"
            href="https://github.com/Divyanshu-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          to learn more about my background. I'm actively seeking new opportunities and eager to contribute to your team!
        </p>
      </div>
    </div>
  );
};

export default Footer;
