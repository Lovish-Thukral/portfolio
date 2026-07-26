import assets from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20 w-full">
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-between space-y-6 sm:space-y-0 text-center">
        {/* Signature (Top on mobile, Left on desktop) */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start sm:pl-[15%]">
          <img
            src={assets.signature}
            alt="lovish"
            className="w-36 brightness-0 dark:invert"
          />
        </div>

        {/* Email (Bottom on mobile, Right on desktop) */}
        <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end sm:pr-[15%] gap-2">
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
            <a target="_blank" href="https://www.linkedin.com/in/lavi-khatri/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Lovish-Thukral">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/TheUndevloper">
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
