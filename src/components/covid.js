import React, { useEffect, useState } from "react";

const  Covid = () => {


    const[data, setData] = useState([]);

    const getCovidData = async () => {

        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise[0]);
        }catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <>
        <section>
            <h1> 🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS DASHBOARD</h2>

            <ul>
                <li className="card card__country">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>OUR</span> COUNTRY</p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card card__recovered">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> RECOVERED</p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card card__confirmed">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card card__death">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>TOTAL</span> DEATH</p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card card__active">
                    <div className="card__main">
                        <div className="card__name">
                            <p className="card__active"><span>TOTAL</span> ACTIVE</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card card__update">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>LAST</span> UPDATE</p>
                            <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    );
    }

export default Covid;