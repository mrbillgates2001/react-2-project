import React from 'react'
import House from "../../../assets/images/House.png"
import Office from "../../../assets/images/Office.png"
import Industries from "../../../assets/images/Industries.png"
import "./Services.scss"

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service-content">
          <div className="service-heading">
            <h1>Our Services</h1>
            <button className='btn-secondary'>Explore services</button>
          </div>

          <div className="service-cards">
            <div className="s-card">
              <img src={House} alt="" />
              <h6>House cleaning</h6>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className="s-card">
              <img src={Office} alt="" />
              <h6>House cleaning</h6>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className="s-card">
              <img src={Industries} alt="" />
              <h6>House cleaning</h6>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services