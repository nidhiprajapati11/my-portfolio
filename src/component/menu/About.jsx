import React, { useEffect } from 'react'
import './stayle.css'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../img/20211224_114647.jpg'
import Fact from './Fact'
//import 'animate.css';
import WOW from 'wowjs';

function About() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
      <main>
        <Container fluid>
          <Row className='about'>
            <Col xl={12} className='import wow bounceInDown'>
              <h1 className='sub-heading'>about me</h1>
              <hr />
              {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, consequatur alias tenetur, saepe ipsum facere a nihil, provident atque consectetur ex ab cumque! Sequi ipsam, perferendis enim quod atque asperiores?</p> */}

            </Col>

            <Col xl={4} md={12}>

              <div className="about-col import wow fadeInLeft">
                <div className="img-col">
                  <img src={img} alt='' />
                </div>
              </div>
            </Col>

            <Col xl={8} md={12} className="about-col wow fadeInRight">
              <div className="info-col">
                <h2>front-end-developer</h2>
                <p>As a web developer, my objective is to create user-friendly and efficient web- sites that are visually appealing and easy to navigate. I utilize my skills in HTML, CSS, JavaScript, and React, to develop websites that meet all the re- quirements of the client. I am looking forward to a carrier that will provide me with avenues for exposure to different situations.</p>
                <div className="icon-list">
                  {/* ---left side---- */}
                  <div className="icon-listt">
                    <ul>
                      <li><i className='fa-solid fa-angle-right' /><strong>birthday:</strong><span>11 November 1999</span></li>
                      <li><i className='fa-solid fa-angle-right' /><strong>city:</strong><span>patan</span></li>
                      <li><i className='fa-solid fa-angle-right' /><strong>age:</strong><span>24</span></li>

                    </ul>
                  </div>
                  {/* ----right side */}
                  <div className="icon-listt">
                    <ul>
                      <li><i className='fa-solid fa-angle-right' /><strong>degree:</strong><span>B-Tech</span></li>
                      <li><i className='fa-solid fa-angle-right' /><strong>email:</strong><span>nidhiprajapati1111@gmail.com</span></li>
                      <li><i className='fa-solid fa-angle-right' /><strong>phone:</strong><span>+91 9687225937</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <Fact />
    </>
  )
}

export default About