import React from 'react';
import './PlaceDetails.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'

const PlaceDetails = () => {
    const { placeName } = useParams();
    console.log(placeName)
    // const placeDetails = fakeData.find(pl => pl.id === placeId);
    // console.log(placeDetails);
    return (
        <div className="App">
            <h1>this is place details : {placeName}</h1>
        </div>
    );
};

export default PlaceDetails;