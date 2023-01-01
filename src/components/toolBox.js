import tools from "../tools.json";

const ToolBox = () => {
    return [...tools].map((tool, index) => (
        <div key={tool.index} className="uk-margin-remove">
            <div className="uk-card uk-card-body uk-margin-remove">
                <span className="iconify" data-icon={tool.icon}></span>
                <div
                    class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
                    uk-parallax="target: #test-filter;  sepia: 100; blur: 2;"
                >
                    {tool.title}
                </div>
            </div>
        </div>
    ));
};

export default ToolBox;
