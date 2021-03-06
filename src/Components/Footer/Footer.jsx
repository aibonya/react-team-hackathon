import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { BsFacebook , BsTelegram, BsInstagram} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible',animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form className="f_subscribe_two mailchimp">
                                    <input type="text" className="form-control memail" placeholder="Email" />
                                    <Button variant="primary" className="btn btn_get btn_get_two">Subscribe</Button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: '0.4s', animationName: 'adeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a>Company</a></li>
                                    <li><a>Android App</a></li>
                                    <li><a>ios App</a></li>
                                    <li><a>Desktop</a></li>
                                    <li><a>Projects</a></li>
                                    <li><a>My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible",animationDelay: '0.6s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a>FAQ</a></li>
                                    <li><a>Term &amp; conditions</a></li>
                                    <li><a>Reporting</a></li>
                                    <li><a>Documentation</a></li>
                                    <li><a>Support Policy</a></li>
                                    <li><a>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible",animationDelay: '0.8s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href='https://www.instagram.com/mkshov/'><BsFacebook /></a>
                                    <a href='https://www.instagram.com/mkshov/'><BsInstagram /></a>
                                    <a href='https://www.instagram.com/mkshov/'><BsTelegram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© Subscribe to my instagram  @mkshov</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
