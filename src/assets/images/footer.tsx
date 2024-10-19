import Sweater from '../assets/images/sweters.jpg';

const Footer = () => {
  return (
    <footer className="pt-24 relative">
      {/* Footer Part 1: Image Section */}
      <div className="footer-part-1 flex justify-center h-[35vh] bg-white">
        <div className="footer-images-1 w-[20vw]">
          <img src={Sweater} alt="Image not available" className="footer-images-2 h-[35vh] w-[19.3vw]" />
        </div>
        <div className="footer-images-1 w-[20vw]">
          <img src={Sweater} alt="Image not available" className="footer-images-2 h-[35vh] w-[19.3vw]" />
        </div>
        <div className="footer-images-1 w-[20vw]">
          <img src={Sweater} alt="Image not available" className="footer-images-2 h-[35vh] w-[19.3vw]" />
        </div>
        <div className="footer-images-1 w-[20vw]">
          <img src={Sweater} alt="Image not available" className="footer-images-2 h-[35vh] w-[19.3vw]" />
        </div>
        <div className="footer-images-1 w-[20vw]">
          <img src={Sweater} alt="Image not available" className="footer-images-2 h-[35vh] w-[19.3vw]" />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social absolute top-[41vh] left-[30vw] right-[30vw] w-[40vw] h-[14vh] bg-[#C6B79B]">
        <div id="social-media-icons" className="flex justify-around pt-[3.7vh] px-[3vw]">
          <img src={} alt="Twitter" className="social-media-images h-[45px] w-[45px] cursor-pointer" />
          <img src={} alt="YouTube" className="social-media-images h-[45px] w-[45px] cursor-pointer" />
          <img src={} alt="LinkedIn" className="social-media-images h-[45px] w-[45px] cursor-pointer" />
          <img src={} alt="Instagram" className="social-media-images h-[45px] w-[45px] cursor-pointer" />
        </div>
      </div>

      {/* Footer Part 2: Links and Copyright */}
      <div className="footer-part-2 h-[50vh] bg-[#5A1413] text-center">
        <nav className="flex justify-around w-[40vw] pt-[20vh] mx-auto font-syne font-medium text-sm text-[#C6B79B]">
          <a className="navbar-link hover:text-white" href="/shop/mens">MEN</a>
          <a className="navbar-link hover:text-white" href="/sjop/womens">WOMEN</a>
          <a className="navbar-link hover:text-white" href="/shop/kids">KIDS</a>
          <a className="navbar-link hover:text-white" href="#">FANCY</a>
          <a className="navbar-link hover:text-white" href="#">COLLECTION</a>
        </nav>
        <h6 id="copyright" className="text-[#C6B79B] mt-[18vh] text-sm cursor-pointer hover:text-white">
          Copyright CURVZ All Right Reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
