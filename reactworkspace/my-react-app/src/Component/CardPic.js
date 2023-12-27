import React from 'react';
import CardData from './CardData';

const CardPic = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    {CardData.map((card, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className="card">
                                <img src={card.imgSr} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.data}</p>
                                    <button onClick={card.btnLink} className="btn btn-primary">{card.btn}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )


}

export default CardPic;