import react from "react";

function Logo (){
    return (
    <div className="header container">
      <div className="logo row justify-content-center align-items-center">
        <div className="col-xs-6 img-logo" >
          <i className="bi bi-clouds-fill"></i>
        </div>
        <div className="col-xs-6 logo-text">
          <h2><span style={{"color": "#1D67F1"}}>weather </span><span style={{"color": "#646363"}}>lookup</span></h2>
        </div>
      </div>
    </div>
    );
}

export default Logo;
