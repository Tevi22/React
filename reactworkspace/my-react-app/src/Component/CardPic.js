import React from 'react';

const CardPic = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button href="#" class="btn btn-primary">Go somewhere</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardPic;