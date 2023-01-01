/* eslint-disable jsx-a11y/anchor-has-content */

import "../App.css";

const ContactButtons = () => {
    return (
        <div>
            <nav className="uk-flex uk-flex-direction-row uk-justify-content-center uk-align-center uk-margin-remove">
                <ul className="uk-iconnav uk-iconnav-horizontal uk-flex  uk-flex-direction-row uk-align-center">
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon: github; ratio:1"
                            href="https://github.com/AdamHale88"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon: linkedin; ratio:1"
                            href="https://www.linkedin.com/in/adam-olsey-300445221"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon: twitter; ratio:1"
                            href="https://twitter.com/AdamHale2415"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon: mail; ratio:1"
                            href="mailto:adamhale88"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon:  receiver
              ; ratio:1"
                            href="tel:18103086832"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="uk-button m-2"
                            uk-icon="icon: location; ratio:1"
                            href="https://www.google.com/maps/place/Grand+Blanc,+MI+48439/@42.9284296,-83.623034,14.25z/data=!4m5!3m4!1s0x88237dd46b95a5e7:0x47d492c35fb43e31!8m2!3d42.9275277!4d-83.6299518"
                            target="_blank"
                            rel="noreferrer"
                        ></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ContactButtons;
