import React, { useState, useEffect } from 'react'
import "./css/style.css"


const TempApp = () => {

    const [city, setCity] = useState("delhi");
    const [search, setSearch] = useState("delhi");


    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d1d38d66c5754920596953203681adcf`

            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }

        fetchApi();

    }, [search])
    //    search

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        className='inputFeild'
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                    <button type='sumbit' >Search now</button>
                </div>

                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (<div><div className="info">
                        <h2 className='location'>
                            <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className='temp'>
                            {city.temp}
                        </h1>

                        <h3 className='tempmin_max'>
                            Min: {city.temp_min}ᴼC | Max : {city.temp_max}ᴼC
                        </h3>
                    </div>

                        <div className='wave -one'>

                        </div>
                        <div className='wave -two'>

                        </div>
                        <div className='wave -three'>

                        </div></div>)

                }


            </div>
        </>
    )
}

export default TempApp;