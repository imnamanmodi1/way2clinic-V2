import React,{ Component } from "react";
import '../src/Bulma.scss'

import './styles/Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div>
            <footer class="footer">
                <div class="content has-text-centered columns">
                    <div className="foot-Content column">
                        <h5>Practo</h5>
                        <a href="http://">About</a>
                        <a href="http://">Blog</a>
                        <a href="http://">Careers</a>
                        <a href="http://">Press</a>
                        <a href="http://">Contact Us</a>
                    </div>
                    <div className="foot-Content column">
                        <h5>For patients</h5>
                        <a href="http://">Search for doctors</a>
                        <a href="http://">Search for clinics</a>
                        <a href="http://">Search for hospitals</a>
                        <a href="http://">Read health articles</a>
                        <a href="http://">Read about medicines</a>
                        <a href="http://">Practo drive</a>
                        <a href="http://">Health app</a>
                        <a href="http://"></a>
                    </div>
                    <div className="foot-Content column">
                        <h5>For doctors</h5>
                        <a href="http://"></a>
                        <a href="http://">Practo Profile</a>
                        <h5>For clinics</h5>

                        <a href="http://">Ray by Practo</a>
                        <a href="http://">Practo Reach</a>
                        <a href="http://">Rat Tab</a>
                        <a href="http://">Practo Pro</a>
                    </div>
                    <div className="foot-Content column">
                        <h5>For hospitals</h5>
                        <a href="http://">Insta by Practo</a>
                        <a href="http://">Quickwell by Practo</a>
                        <a href="http://">Querent by Practo</a>
                        <a href="http://">Practo Profile</a>
                        <a href="http://">Practo Reach</a>
                        <a href="http://">Practo Drive</a>
                    </div>
                    <div className="foot-Content column">
                        <h5>More</h5>
                        <a href="http://">Help</a>
                        <a href="http://">Developers</a>
                        <a href="http://">Privacy Policy</a>
                        <a href="http://">Terms & Conditions</a>
                        <a href="http://">Healthcare Directory</a>
                        <a href="http://">Practo Health wiki</a>
                        <a href="http://">Corporate Wellness</a>
                    </div>
                    <div className="foot-Content column">
                        <h5>Social</h5>
                        <a href="http://">Facebook</a>
                        <a href="http://">Twitter</a>
                        <a href="http://"Linkedin></a>
                        <a href="http://">Youtube</a>
                        <a href="http://">Github</a>
                    </div>

                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;