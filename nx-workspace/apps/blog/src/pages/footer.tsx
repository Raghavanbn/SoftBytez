
const Footer = () => {
    return(
        <div className="bg-prime-color p-6 text-center dark:bg-neutral-700">
          <span>© {new Date().getFullYear()} Copyright: </span>
          <a
            className="font-semibold text-white dark:text-white"
            href="https://softbytez.com/"
            >SoftBytez</a>
        </div>
    );
};

export default Footer;