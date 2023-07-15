import React from "react";

function Btn(props){
    return (
        <button type="submit" className="btn btn-outline-primary btn-lg"  value={props.city} name="cityNameBtn">{props.city}</button>
    );
}

export default Btn;