import React from 'react'

const Card = (props) => {
  return (
    <div class="col-lg-3">
      <div class="card">
        <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
          </div>

          <div class="carousel-inner">
            {props.listing.images.map((image) => (
              <div class="carousel-item active">
                <img src={image} class="d-block w-100" alt="..."></img>
              </div>
            ))}

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">{props.listing.title}<br />
            <strong>{props.listing.city_name}</strong><br />
            <strong>{props.listing.nightly_fee}</strong>night
            <span class="float-end"><strong>{props.listing.rating}</strong>&nbsp;<i class="bi bi-star"></i></span>
          </p>
        </div>
      </div>
    </div>
  )
};

export default Card