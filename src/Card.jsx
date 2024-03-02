import React from 'react';
import './Card.css';

const Card = (props) => {

    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 50px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        textTransform: 'uppercase'
      };

  return (
    <div className="Card">
    <img src={props.imagePath} className="card-image" />
    <h1>{props.Model}</h1>
    <p>{props.Manufacturer}</p>
    <a style={buttonStyle} href={props.viewLink} target="_blank" rel="noopener noreferrer">
      Click Here
    </a>
    </div>
  )
}

export default Card