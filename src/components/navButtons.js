/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const BottomNavButtons = () => {
    return (
        <>
            <nav
                className="uk-flex uk-flex-direction-column uk-justify-content-center uk-align-center uk-margin-remove">
                <ul className="uk-iconnav uk-iconnav-horizontal uk-flex uk-flex-direction-row uk-align-center ">
                    <Link to="/resume">
                        <a
                            className="uk-button uk-icon"
                            target="_blank"
                            rel="noreferrer"
                            
                        >
                            Resume
                            🍩
                        </a>
                    </Link>

                    <Link to="/project">
                        <a
                            className="uk-button uk-icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Projects
                            🍩
                        </a>
                    </Link>

                    <Link to="/">
                        <a
                            className="uk-button uk-icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Home
                            🍩
                        </a>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default BottomNavButtons;
