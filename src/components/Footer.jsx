import React from "react";
import { styles } from "../styles";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center min-h-30 py-5 z-20 bg-primary`}
    >
      <div className="flex text-center flex-col w-full mx-auto py-8">
        <a href="#">
          <img
            src={logo}
            alt="logo"
            className="w-14 mx-auto h-14 my-4 object-contain"
          />
        </a>
        <ul className="flex justify-around mt-5">
          <li>
            <a
              className={styles.footerLink}
              href="https://github.com/danielirwin99"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className={styles.footerLink}
              href="https://www.linkedin.com/in/danielirwin99"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="#contact">
              Contact
            </a>
          </li>
          {/* <li>
            <a
              className={styles.footerLink}
              href="/assets/resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li> */}
        </ul>
        <p className="mt-10 font-bold text-white-100">
          Copyright © 2023 Daniel Irwin{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
