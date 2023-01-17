import ContactButtons from './contactButtons'
// import ContactForm from './contactForm';

const CentralHero = () => {
    return (
        <>
            <figure
                className="uk-section uk-section-small uk-flex uk-flex-column uk-justify-content-center uk-margin-remove uk-align-center">
                <div className=" logosub uk-flex uk-justify-content-center uk-align-center">
                </div>
                
                <legend className="uk-legend uk-justify-content-center uk-align-center uk-text-center">Love & Peace
                </legend>
                <div className="uk-flex uk-flex-column uk-justify-content-center uk-align-center">
                    <img
                        id="profile"
                        src="images\adamhale.jpg"
                        alt="Vash the stampede"
                    />
                </div>
                    
                
                <div className="profile uk-flex uk-flex-column uk-justify-content-center uk-align-center">
                    <ContactButtons />
                    
                 </div>{/*<div className="uk-flex uk-flex-column uk-justify-content-center uk-margin-6 uk-align-center"><ContactForm /></div> */}
            </figure>
        </>
    );
};

export default CentralHero;
