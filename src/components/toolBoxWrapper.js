import ToolBox from "./toolBox";

const ToolBoxWrapper = () => {
    return (
        <>
            <div
                className="uk-child-width-1-2@xs uk-child-width-1-6@m uk-child-width-1-12@l uk-text-center wrapper"
                uk-grid="parallax: 100"
            >
                <ToolBox/>
            </div>
        </>
    );
};

export default ToolBoxWrapper;
