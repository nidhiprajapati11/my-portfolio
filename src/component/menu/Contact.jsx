/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './stayle.css'
import { Col, Container, Row } from 'react-bootstrap'
import 'animate.css';
function Contact() {
  return (
    <>
      <main>
        <Container fluid>
          <div className='contact'>
            <Row>
              <Col xl={12} className='wow fadeInUp'>
                <h1 className='sub-heading'>contact</h1>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, consequatur alias tenetur, saepe ipsum facere a nihil, provident atque consectetur ex ab cumque! Sequi ipsam, perferendis enim quod atque asperiores?</p>

              </Col>
            </Row>

            <Row className='contact-page'>
              <Col xl={5} xs={12} className='contact-info'>
                <div className="contact-box wow fadeInLeft">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <h3 className="contact-title">loaction:</h3>
                  <p className="contact-des">62/chitrakut, patan</p>
                </div>

                <div className="contact-box wow fadeInLeft">
                  <div className="contact-icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                  <h3 className="contact-title">email:</h3>
                  <p className="contact-des">nidhiprajapati1111@gmail.com</p>
                </div>

                <div className="contact-box wow fadeInLeft">
                  <div className="contact-icon">
                    <i className="fa-solid fa-mobile-screen-button" />
                  </div>
                  <h3 className="contact-title">call:</h3>
                  <p className="contact-des">+91 9687225937</p>
                </div>

                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58386.683126442615!2d72.08112608557282!3d23.848178222303062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c87925f115695%3A0x6f1db1097c4ff9ce!2sPatan%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705734239379!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
              </Col>

              <Col xl={6} xs={12}  className='contact-info'>
                <div className="contact-form">
                  <form>
                    <input type='text' name='name' placeholder='your name' />
                    <input type='email' name='email' placeholder='your email' />
                    <input type='text' name='subject' placeholder='your subject' />
                    <textarea name='msg' rows={9} placeholder='your msg' />  
                    <div className='btn'>                
                   <button type='submit'>send message</button>
                   </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </main>

    </>
  )
}

export default Contact