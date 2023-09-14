import React, { useState, useEffect } from 'react'
import "./css/style.css"



const ImproApp = () => {

    const [data, setData] = useState({});
    const [city, setCity] = useState({});

    const handleClick = () => {
        fetchApi(city)
    }

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    const fetchApi = async (city) => {
        if (!city) return
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d1d38d66c5754920596953203681adcf`

        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json();
        console.log(resJson)
        setData(resJson);
    }

    useEffect(() => {
        fetchApi("delhi");
    }, [])




    const func = () => {
        const imgUrl = `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`;
        return (
            <div>
                <img src={imgUrl} alt='not' />
            </div>
        )
    }
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        className='inputFeild'
                        placeholder='Enter loaction'
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type='sumbit' onClick={handleClick} >Search </button>
                </div>




                <div className="info">

                    <h2 className='location mt-3'>
                        <i class="fa-solid fa-location-dot"></i>{data?.name}[{data?.sys?.country}]
                    </h2>
                    <h1 className='temp mt-2'>
                        {data?.main?.temp}ᴼC
                    </h1>
                    <div className='m-1 fa-beat-fade'>
                        {/* {func()} */}
                    </div>

                    <h3 className='tempmin_max mt-4'>
                        Min: {data?.main?.temp_min}ᴼC | Max : {data?.main?.temp_max}ᴼC
                    </h3>
                    <div className='tempmin_max fa-icon mt-4 pt-5'>
                        <div>
                            <i className="fa-solid fa-droplet fa-beat-fade"></i>
                            {data?.main?.humidity}%
                        </div>
                        <div>
                            <i class="fa-solid fa-wind fa-beat-fade"></i>
                            {data?.wind?.speed}km\hr
                        </div>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default ImproApp;