import React from 'react';
import './Place.css';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Place = (props) => {
    const { place, handleCart } = props;
    return (
            <div onClick={() => handleCart(props.place)} style={{ width: '18rem'}} className="card bg-dark text-white card_item">
                <img src={place.image} class="card_image card-img " alt="..." />
                <div className="card-img-overlay img_overlay">
                    <h5 className="card_title">{place.name}</h5>
                </div>
            </div>
    );
};

export default Place;