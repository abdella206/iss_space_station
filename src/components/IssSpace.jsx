
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactPlayer from 'react-player'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const ISS_URL = "https://api.open-notify.org/iss-now.json"
const MAP_KEY = 'pk.eyJ1IjoiYWJkZWxsYTIwNjYiLCJhIjoiY2tkMnN6Mmx2MTExejJxcXZpbmMxc211bCJ9.0pvU-rBc2_cumF1N-Ct1ow'
const img = <img src="../iss.svg" alt="iss" height="30px" />

const SpaceStation = ({ img }) => <div>{img}</div>

const Map = ReactMapboxGl({
    accessToken: MAP_KEY,

});


const IssSpace = () => {

    const [issLocation, setIssLocation] = useState({ center: { lat: 0, lng: 0 }, zoom: 1 });


    useEffect(() => {
        getCoordinates()
        issLocation.interval = setInterval(getCoordinates, 3)

    }, [issLocation]);

    useEffect(() => {

        clearInterval(issLocation.interval)
    }, [issLocation]);




    const getCoordinates = () => {

        const fetchData = async () => {
            axios.get(ISS_URL)
                .then(res => {
                    console.log(res.data)
                    setIssLocation({
                        center: {
                            lat: res.data.iss_position.latitude,
                            lng: res.data.iss_position.longitude
                        }
                    })
                })
        }
        fetchData();
    }


    console.log("LAT:", issLocation.center.lat)
    console.log("LNG:", issLocation.center.lng)
    return (
        <div>
            <span style={{ color: 'gold' }}>Latitude: {issLocation.center.lat}</span> ||
            <span style={{ color: 'gold' }}>LIVE ISS FEED‼</span>||
            <span style={{ color: 'gold' }}>Longitude: {issLocation.center.lng}</span>


            <ReactPlayer
                style={{ marginLeft: '3%' }}
                url='https://www.youtube.com/watch?v=DDU-rZs-Ic4'
                playing
                width='100%'
                height='100%'
            />






            <Map
                style={"mapbox://styles/mapbox/streets-v9"}
                containerStyle={{
                    height: '50vh',
                    width: '100vw'
                }}
                center={[issLocation.center.lng, issLocation.center.lat]}
            >

                <Marker coordinates={[issLocation.center.lng, issLocation.center.lat]}>

                    <SpaceStation


                        img={img}
                    />
                </Marker>

            </Map>

        </div>
    )

}

export default IssSpace

