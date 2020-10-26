import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData'
import Place from '../Place/Place';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();


    const [places, setplaces] = useState([]);
    const [selectedCart, setSelectedCart] = useState({});


    const handleCart = (data) => {
        setSelectedCart(data);
    }

    const handlePlace = (placeName) => {
        history.push(`/place/${placeName}`);
    }

    useEffect(() => {
        // console.log(fakeData);
        setplaces(fakeData);
        setSelectedCart(fakeData[0]);
    }, [])
    return (
        <div className="App">
            <Header/>
            <div className="row text-justify"  style={{marginTop: '50px'}}>
                <div className="col-md-4 text-white">
                    <h1>{selectedCart.name}</h1>
                    <p>{selectedCart.details}</p>
                    <Button onClick = {() => handlePlace(selectedCart.name)} className="text-center text-white" variant="warning">Booking...</Button>
                </div>
                <div className="col-md-8 d-flex justify-content-around">
                    {
                        places.map(place => <Place handleCart={handleCart} place={place}></Place>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;