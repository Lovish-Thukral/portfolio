import assets from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20 w-full">
      <div className="text-center w-full flex justify-between items-baseline">
        <div className="w-1/2 ml-[15%]">
          <img
            src={assets.signature}
            alt="lovish"
            className="w-36 brightness-0 dark:invert "
          />
        </div>

        <div className="w-1/2 mr-[15%] flex items-center gap-2 mx-auto justify-end">
          <img
            src={assets.mail}
            alt="Mailwa"
            className="w-6 brightness-0 dark:invert"
          />
          <p>lavi.khatri114@outlook.com</p>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-2">
        <p>© 2026 Lovish Thukral. Licensed under the MIT License.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lavi-khatri/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/LovishThukral/">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/LovishThukral">
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
