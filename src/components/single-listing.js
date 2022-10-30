import React from 'react'

const SingleListing = (props) => {
    const backClick = () => {
        props.mainContentView();
    }
    return (
        <div>
            <div className='row'>
                <div className='col-lg-1'>
                    <button onClick={backClick}>BACK</button>
                </div>
                <div className='col-lg-10'>
                    <h1><strong>{props.listing.title}</strong></h1>
                    <i>{props.listing.city_name} - {props.listing.room_type}</i>
                </div>
                <div className='col-lg-1'>
                    <h2><strong>{props.listing.rating}</strong>&nbsp;<i className="bi bi-star"></i></h2>
                </div>
            </div>
            <br />
            <div className="row">
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <div className='d-flex flex-row'>
                        <div className='col-lg-8'>
                            <img src={props.listing.images[0]} alt="..."></img>
                        </div>
                        <div className='col-lg-4'>
                            <img src={props.listing.images[1]} alt="..."></img>
                            <strong>
                                ${props.listing.nightly_fee}/night <br />
                                ${props.listing.cleaning_fee} - cleaning nightly fee <br />
                                ${props.listing.service_fee} - service fee <br />
                            </strong>
                        </div>
                    </div>
                    <br />
                    <div className='d-flex flex-row'>
                        <div className='col-lg-4'>
                            <img src={props.listing.images[2]} alt="..."></img>
                            <strong>
                                {props.listing.bedrooms} bedrooms <br />
                                {props.listing.minimum_nights} minimum nights <br />
                                {props.listing.amenities}
                            </strong>
                        </div>
                        <div className='col-lg-8'>
                            <img src={props.listing.images[3]} alt="..."></img>
                        </div>
                    </div>
                    {/* {props.listing.images.map((image, index) => (
                    <img src={image} alt="..." key={index}></img>
                ))} */}
                </div>
                <div className='col-lg-1'></div>
            </div>
        </div>

    )
};

export default SingleListing