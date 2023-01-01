import ContactButtons from './contactButtons'

const CentralHero = () => {
    return (
        <>
            <figure
                className="uk-section uk-section-xlarge uk-flex uk-flex-column uk-justify-content-center uk-margin-remove uk-align-center">
                <div className=" logosub uk-flex uk-justify-content-center uk-align-center">
                </div>
                <div className="uk-flex uk-flex-column uk-justify-content-center uk-align-center">
                    <img
                        id="profile"
                        src="images\adamhale.jpeg"
                        alt="full stack web developer"
                    />
                </div>
                <div className="profile uk-flex uk-flex-column uk-justify-content-center uk-align-center">
                    <ContactButtons/>
                </div>
            </figure>
        </>
    );
};

export default CentralHero;
