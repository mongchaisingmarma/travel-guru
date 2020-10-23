import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData'
import Place from '../Place/Place';

const Home = () => {
    const [places, setplaces] = useState([])


    useEffect(() => {
        console.log(fakeData);
        setplaces(fakeData)
    }, [])
    return (
        <div>
            <Header/>
            <h1>{places.length}</h1>
            {
                places.map(place => <Place place={place} key={place.id}></Place>)
            }
        </div>
    );
};

export default Home;