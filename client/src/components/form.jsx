import React, { useEffect, useImperativeHandle, useState } from "react";
// import Btn from "./btn";
import Information from "./information";
import Cities from "../cities";
import axios from "axios";
// require('dotenv').config();

const urlParams = "&units=imperial&appid=";
const ID = process.env.REACT_APP_ID;
const params = urlParams + ID;

// axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';


// function createBtn(name){
//     return (
//         <Btn
//             city= {name}
//         />
//     );
// }

function Form() {

    const [name, setCityName] = useState();
    const [humidity, setHumidity] = useState();
    const [weatherDescription, setWeatherDescription] = useState();
    const [temperature, setWeatherTemp] = useState();
    const [userValue, setValue] = useState();
    const [codeValue, setCodeValue] = useState();

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: "lagos",
                units: "imperial",
                appid: ID
            }
        }).then((response) => {
            const formatTemp = Math.round(response.data.main.temp);
            setWeatherTemp(formatTemp);
            setCodeValue(response.data.weather[0].id)
            setCityName(response.data.name);
            setWeatherDescription(response.data.weather[0].main);
            const formatHumidity = response.data.main.humidity + "%";
            setHumidity(formatHumidity);
        })
    }, []);




    // const onSubmit = (value) => {
    //     console.log(value);
    // }

    function handleSubmit(e) {
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: userValue,
                units: "imperial",
                appid: ID
            }
        }).then((response) => {
            const formatTemp = Math.round(response.data.main.temp);
            setWeatherTemp(formatTemp);
            setCodeValue(response.data.weather[0].id)
            setCityName(response.data.name);
            setWeatherDescription(response.data.weather[0].main);
            const formatHumidity = response.data.main.humidity + "%";
            setHumidity(formatHumidity);
        })
        setValue("");
        e.preventDefault();
    }









    return (
        <div className="container overflow-hidden weather">
            <div className="row">
                <Information
                    cityName={name}
                    humidity={humidity}
                    description={weatherDescription}
                    temp={temperature}
                    codes={codeValue}
                />
                <div id="box" className="col-6 weather-search">
                    <div className="container">
                        <form className="search-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-10 frm-dsn wef">
                                    <input type="text"
                                        onChange={(e) => setValue(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter City Name"
                                        name="cityName"
                                        value={userValue} />
                                </div>
                                <div className="col-2 frm-dsn wef">
                                    <button type="submit"
                                        className="btn btn-primary">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div id="rand-cities" className="row">
                                {Cities.map((city) => <button type="submit"
                                    onClick={(e) => setValue(e.target.value)}
                                    className="btn btn-outline-primary btn-lg"
                                    value={city} name="cityNameBtn">{city}</button>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;