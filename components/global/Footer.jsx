const Footer = () => {
    return (
        <div className="footer_container py-30">
            <div className="footer container">
                <div className="footer__addr">
                    <img src="biyekorun-logo.png" alt="logo" />
                    <p>Biye Korun: Bridging Hearts with Trust. Discover your perfect life partner through our secure and intuitive platform. Celebrate love, commitment, and new beginnings with us</p>

                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Helpful Links</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Registration</a>
                            </li>

                            <li>
                                <a href="#">Partner search</a>
                            </li>

                            <li>
                                <a href="#">Premium membership</a>
                            </li>

                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Corporate</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">About us</a>
                            </li>

                            <li>
                                <a href="#">Terms & Condition</a>
                            </li>

                            <li>
                                <a href="#">Cookie Policy</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Contact</h2>

                        {/* <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul> */}
                        <p className="">Bangladesh Office</p>
                        <p>9143, Plot 2, Baunia Bazar <br />
                            Uttara, Dhaka-1230 <br />
                            <p>+880161171308</p>
                        </p>
                    </li>
                </ul>

                <div className="legal text-center">
                    <p>&copy; TS4U.Inc All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer