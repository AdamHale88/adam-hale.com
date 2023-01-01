import Projects from "./projects";

const ProjectWrapper = () => {
    return (
        <>
            <div
                className="uk-grid uk-grid-match uk-width-1-12@l  uk-text-center wrapper"
                uk-grid
            >
                <Projects/>
            </div>
        </>
    );
};
export default ProjectWrapper;
