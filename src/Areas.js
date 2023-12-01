import "./Areas.css";

export default function Areas(props) {
    return (
        <div className="area-main-container" style={{backgroundColor:`${props.bgColor}`,backgroundImage:`url("${props.bgImg}")`, }}>
            <div className="area-container">
                <div className="area-name">
                    <h5>{props.title}</h5>
                    <button className="elipsis-btn">
                        <img src="images/icon-ellipsis.svg" alt="elipsis button"/>
                    </button>
                </div>
                <div className="area-stats">
                    <h2>{props.current}hrs</h2>  
                    <p className="stats">Last Week - {props.previous}hrs</p>
                </div>
            </div>
            
        </div>
    )
}