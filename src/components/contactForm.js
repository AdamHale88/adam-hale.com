const ContactForm = () => {
    return (
        <>
            <form
                className=" profile uk-flex uk-flex-column uk-justify-content-center uk-align-center uk-margin-remove">
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend uk-justify-content-center uk-align-center uk-text-center">Contact Me
                    </legend>
                    <div className="uk-margin uk-width-1-12">
                        <input className="uk-icon uk-input uk-width-1-4" type="text" placeholder="First Name"/>
                        <input className="uk-icon uk-input uk-width-1-4" type="text" placeholder="Last Name"/>
                        <input className="uk-icon uk-input uk-width-1-2" type="text" placeholder="email"/>
                    </div>
                    <div className="uk-margin uk-width-1-8">
                        <textarea className="uk-icon uk-textarea " rows="5"
                                  placeholder="Whats on your mind?"></textarea>
                    </div>
                    <button className="uk-icon m-2" type="submit"> Submit</button>
                </fieldset>
            </form>
        </>
    )
}

export default ContactForm