import projects from '../projects.json'

const Projects = () => {
    return [...projects].map((project, index) => (
        <div className="uk-section  uk-flex uk-flex-column uk-justify-content-center uk-align-center ">
            <div className="uk-flex uk-flex-middle ">
                <div className="uk-tile uk-box-shadow-hover-xlarge uk-padding">
                    <div className="uk-inline uk-background">
                        <a target="_blank" href={project.url} rel="noreferrer" key={index}>
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                                <h3>{project.title}</h3>
                            </div>
                        </a>
                        <img src={project.image} alt={project.alt}/>
                        <a target="_blank" href={project.repo} rel="noreferrer">
                            <div className="uk-card-badge uk-overlay-primary uk-label uk-box-shadow-hover-xlarge">
                                REPO
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));
};

export default Projects;
