import React from 'react'
import './Info.css'

export default function Info(props) {
  return (
    <div className='promotional-materials'>


      <div className=' float-end d-flex flex-column flex-md-row w-100 mb-3'>

        <div className='px-1 w-100'>
          <div className='info_back donor-num form-control text-center shadow'>
            <h1>{props.info.totalDonors}</h1>
            <span>Blood donors</span>
          </div>
        </div>

        <div className='px-1 w-100'>
          <div className='request-num info_back form-control text-center shadow'>
            <h1>{props.info.totalpost}</h1>
            <span>Total request</span>
          </div>
        </div>

        <div className='px-1 w-100'>
          <div className='received-num info_back form-control text-center shadow'>
            <h1>0</h1>
            <span>Transfusion received</span>
          </div>
        </div>

        <div>
        </div>
      </div>
      {/* sliders */}

      {/* <div class="campaign_slier_item mx-2" >
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-5">
            <div class="campaign_img">
              <img src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/c1.png"
              />
              <a href="https://www.hhs.gov/givingequalsliving/giveblood/why-give#:~:text=If%20you%20donate%20blood%2C%20it,them%20from%20making%20blood%20correctly" tabindex="-1">Read More</a>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
            <div class="campaign_content">
              <div class="meta_date">
                <span><i className='fa-solid fa-heart-pulse'></i> Life Saver</span>
              </div>
              <a href="campaign-details.html" tabindex="-1">
                <h6>Give Life: Donate Blood Today! Be a Hero</h6>
              </a>
              <p>Be a hero, donate blood! Your contribution saves lives. Join us today to make a difference through this invaluable gift. Together, let's build a healthier community!</p>
              <div class="meta_time d-flex gap-4">
                <span><i class="fa-regular fa-clock"></i> 24 hours</span>
                <span><i class="fa-solid fa-location-dot"></i>Bangladesh </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="campaign_slier_item mx-2" >
              <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-5">
                  <div class="campaign_img">
                    <img src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/c1.png"
                    />
                    <a href="https://www.hhs.gov/givingequalsliving/giveblood/why-give#:~:text=If%20you%20donate%20blood%2C%20it,them%20from%20making%20blood%20correctly" tabindex="-1">Read More</a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                  <div class="campaign_content">
                    <div class="meta_date">
                      <span><i className='fa-solid fa-heart-pulse'></i> Life Saver</span>
                    </div>
                    <a href="campaign-details.html" tabindex="-1">
                      <h6>Give Life: Donate Blood Today! Be a Hero</h6>
                    </a>
                    <p>Be a hero, donate blood! Your contribution saves lives. Join us today to make a difference through this invaluable gift. Together, let's build a healthier community!</p>
                    <div class="meta_time d-flex gap-4">
                      <span><i class="fa-regular fa-clock"></i> 24 hours</span>
                      <span><i class="fa-solid fa-location-dot"></i>Bangladesh </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="campaign_slier_item mx-2" >
              <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-5">
                  <div class="campaign_img">
                    <img src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/c1.png"
                    />
                    <a href="https://www.hhs.gov/givingequalsliving/giveblood/why-give#:~:text=If%20you%20donate%20blood%2C%20it,them%20from%20making%20blood%20correctly" tabindex="-1">Read More</a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                  <div class="campaign_content">
                    <div class="meta_date">
                      <span><i className='fa-solid fa-heart-pulse'></i> Life Saver</span>
                    </div>
                    <a href="campaign-details.html" tabindex="-1">
                      <h6>Give Life: Donate Blood Today! Be a Hero</h6>
                    </a>
                    <p>Be a hero, donate blood! Your contribution saves lives. Join us today to make a difference through this invaluable gift. Together, let's build a healthier community!</p>
                    <div class="meta_time d-flex gap-4">
                      <span><i class="fa-regular fa-clock"></i> 24 hours</span>
                      <span><i class="fa-solid fa-location-dot"></i>Bangladesh </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="campaign_slier_item mx-2" >
              <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-5">
                  <div class="campaign_img">
                    <img src="https://innovativeartisan.com/demo/html/blad-ai/assets/images/c1.png"
                    />
                    <a href="https://www.hhs.gov/givingequalsliving/giveblood/why-give#:~:text=If%20you%20donate%20blood%2C%20it,them%20from%20making%20blood%20correctly" tabindex="-1">Read More</a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                  <div class="campaign_content">
                    <div class="meta_date">
                      <span><i className='fa-solid fa-heart-pulse'></i> Life Saver</span>
                    </div>
                    <a href="campaign-details.html" tabindex="-1">
                      <h6>Give Life: Donate Blood Today! Be a Hero</h6>
                    </a>
                    <p>Be a hero, donate blood! Your contribution saves lives. Join us today to make a difference through this invaluable gift. Together, let's build a healthier community!</p>
                    <div class="meta_time d-flex gap-4">
                      <span><i class="fa-regular fa-clock"></i> 24 hours</span>
                      <span><i class="fa-solid fa-location-dot"></i>Bangladesh </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}