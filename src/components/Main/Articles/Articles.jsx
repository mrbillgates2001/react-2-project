import React from 'react'
import Article_1 from "../../../assets/images/Article_1.png"
import Article_2 from "../../../assets/images/Article_2.png"
import "./Articles.scss"

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles-content">
          <div className="articles-heading">
            <h1>Articles & resources</h1>
            <div className="articles-btns">
              <button className='btn-primary'>Get a free quote</button>
              <button className='btn-secondary'>Browse articles</button>
            </div>
          </div>
            <div className="articles-cards">
              <div className="articles-card">
                <img src={Article_1} alt="" />
                <div className="mini-card">
                  <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
                  <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                  <span>Jan 28, 2022</span>
                  <div className='rectangular'></div>
                </div>
              </div>

              <div className="articles-card">
                <img src={Article_2} alt="" />
                <div className="mini-card">
                  <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
                  <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                  <span>Jan 28, 2022</span>
                  <div className='rectangular'></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Articles