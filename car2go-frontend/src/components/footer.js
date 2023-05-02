import React from 'react';
import "./Css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <h1 id="logo-foot">Car2Go</h1>
            </div>
            <div className="about">
                <h3>ABOUT US</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti quam aliquid, maiores qui itaque quaerat suscipit sequi facilis impedit laborum? Maxime, adipisci? Blanditiis praesentium corrupti minima quidem repudiandae amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente vero rem, labore vel sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, similique.
                </p>
            </div>
            <div className="rigth_footer">
                <div className="navigation">
                    <ul>
                        <h2>Polices</h2>
                        <li><a href="#">Refund and returns</a></li>
                        <li><a href="#">policy shipping</a></li>
                        <li><a href="#">Disclaimer Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="navigation">
                    <ul>
                        <h2>Navigation</h2>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">site map</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">verify productsy</a></li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright @ 2022 Sigma Infosolution</p>
            </div>
        </div>
    );
}

export default Footer;