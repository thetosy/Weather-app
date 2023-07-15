import React, { useEffect, useState } from "react";
import cloudyIcon from '../icons/cloudy-icon.svg';
import cloudyRainHeavy from '../icons/cloudy-rain-heavy.svg';
import cloudyRain from '../icons/cloudy-rain.svg';
import mistIcon from '../icons/mist.svg';
import partlyCloudyIcon from '../icons/partly-cloudy.svg';
import partlyCloudyNight from '../icons/partly-cloudy-night.svg';
import snowIcon from '../icons/snow.svg';
import sunnyIcon from '../icons/sunny-icon.svg';


function Information(props) {
  const [clock, setClockState] = useState();
  const [date, setDateState] = useState();


  useEffect(() => {
    const currentDate = new Date().toDateString();
    const formatDate = currentDate.substring(currentDate.indexOf(" ") + 1);
    setDateState(formatDate);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const index = time.indexOf(":", time.indexOf(":") + 1);
      const timeFormat = time.substring(0, index) + time.substring(time.indexOf(" "), time.length);
      setClockState(timeFormat);
    }, 1000);
  }, []);

  function WeatherCode(codes) {
    if (codes >= 200 && codes <= 232) {
      return cloudyRainHeavy;
    } else if (codes >= 300 && codes <= 531) {
      return cloudyRain;
    } else if (codes >= 600 && codes <= 622) {
      return snowIcon;
    } else if (codes >= 700 && codes <= 781) {
      return mistIcon;
    } else if (codes == 800) {
      return sunnyIcon;
    } else {
      return cloudyIcon;
    }

  }



  return (
    <div id="box" className="col-5 weather-display">
      <div className="container">
        <div className="row row-bottom-margin"><h3>{props.cityName}</h3></div>

        <div id="temp-sign" className="row align-items-center row-bottom-margin">
          <span className="col-6 we">
            <h1 id="temp-indicator">{props.temp}</h1>
          </span>
          <span id="temp-indicator-img" className="col-6 we">
            <img src={WeatherCode(props.codes)} alt='cloudy-icon' />
          </span>
        </div>

        <div className="row row-bottom-margin" id="temp-indicator-text">
          <button type="button" className="btn btn-secondary btn-sm rounded-pill" disabled>{props.description}</button>
        </div>
        <div className="row row-bottom-margin" id="more-details">
          <div className="col"><i className="bi bi-moisture"></i> <pre>{props.humidity}</pre></div>
          <div className="col"><i className="bi bi-clock"></i><pre>{clock}</pre></div>
          <div className="col"><i className="bi bi-calendar-week"></i><pre>{date}</pre></div>
        </div>
      </div>
    </div>
  );
}

export default Information;