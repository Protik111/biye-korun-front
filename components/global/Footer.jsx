import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer_container py-30">
      <div className="container">
        <div className="contact_us">
          <div className="">
            <h3>Get More Updates</h3>
            <p>Please subscribe our newsletter</p>
          </div>

          <div class="input-box">
            <input placeholder="Email..." type="text" class="text_input" />
            <button value="Save" class="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="footer container">
        <div className="footer__addr">
          <img
            src="biye-korun-logo-with-tagline.png"
            alt="logo"
            loading="lazy"
          />
          <p className="mt-10">
            Bridging Hearts with Trust. Discover your perfect life partner
            through our secure and intuitive platform. Celebrate love,
            commitment, and new beginnings with us.
          </p>

          <div className="flex flex-gap-10 footer-social-icons">
            <img src="/V3/landing/icon/fb.svg" loading="lazy" alt="" />
            {/* <img src="/V3/landing/icon/twitter.svg" loading="lazy" alt="" />
                        <img src="/V3/landing/icon/linkedin.svg" loading="lazy" alt="" />
                        <img src="/V3/landing/icon/insta.svg" loading="lazy" alt="" /> */}
          </div>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Navigation</h2>

            <ul className="nav__ul">
              <li>
                <Link className="contact-desc" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/">
                  Contact
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/about-us">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/terms-&-conditions">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              {/* <li>
                                <a href="#faqs">FAQs</a>
                            </li> */}
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Helpful Links</h2>

            <ul className="nav__ul">
              <li>
                <Link className="contact-desc" href="/login">
                  Registration
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/">
                  Partner Search
                </Link>
              </li>

              <li>
                <Link className="contact-desc" href="/plans">
                  Premium Membership
                </Link>
              </li>
            </ul>
          </li>

          <p className="nav__item">
            <h2 className="nav__title">Contact</h2>
            <div className="mt-25">
              <div className="flex flex-gap-5 contact-img">
                <img alt="" src="/V3/landing/icon/location.svg" />
                <p className="contact-desc">
                  <b>USA Office: </b> 30500 Van Dyke, Ste - 201, Warren, MI
                  48093
                </p>
              </div>

              <div className="flex flex-gap-5 contact-img">
                <img alt="" src="/V3/landing/icon/phone.svg" />
                <p className="contact-desc">+1 (586) 276-7347</p>
              </div>
              <br />

              <div className="flex flex-gap-5 contact-img">
                <img alt="" src="/V3/landing/icon/location.svg" />
                <p className="contact-desc">
                  <b>Bangladesh Office: </b> 9143, Plot 2, Baunia Bazar, Uttara,
                  Dhaka-1230{" "}
                </p>
              </div>

              <div className="flex flex-gap-5 contact-img">
                <img alt="" src="/V3/landing/icon/phone.svg" />
                <p className="contact-desc">+880 16-11171308</p>
              </div>

              {/* <p className="contact-desc">Bangladesh Office</p>
                            <p className="contact-desc">9143, Plot 2, Baunia Bazar <br />
                                Uttara, Dhaka-1230 <br />
                                <p className="contact-desc">+880 16-11171308</p>
                            </p> */}
            </div>
          </p>
        </ul>

        <hr />

        <div className="legal mt-25">
          <p>&copy; Copyright 2023 All rights reserved by BiyeKorun.</p>

          <div className="flex flex-gap-15">
            <p>Privacy Policy</p>
            <p>Website Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
