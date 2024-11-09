import React from 'react'
import './stayle.css'
import { Col, Container, Row } from 'react-bootstrap'
import 'animate.css';
function Resume() {
  return (
    <main>
      <Container fluid >
        <div className='resume'>
        <Row>
          <Col className='skil-title wow fadeInUp'>
            <h1 className="sub-heading">resume</h1>
            <hr />
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </Col>
        </Row>

        <Row>
          <Col xl={6} className='wow fadeInLeft'>
            <div className="resume-cols">
              <h2>summary</h2>

              <div className="my-info wow fadeInLeft">
                <h3>nidhi prajapati</h3>
                <p>A highly organized and hard-working individual looking for a responsible position to gainpractical experience.</p>

                <ul>
                  <li>patan, 384265</li>
                  <li>+91 9687225937</li>
                  <li>nidhiprajapati1111@gmail.com</li>
                </ul>
              </div>

              <h2 className='wow fadeInLeft'>education</h2>
              <div className="my-edu wow fadeInLeft">
                <h3>BACHELOR OF ENGINEERING</h3>
                <span className='sp-box'>2020-2023</span>
                <p>cpi:- 6:65</p>
              </div>

              <div className="my-edu wow fadeInLeft">
                <h3>DIPLOMA COMPUTER ENGINEERING</h3>
                <span className='sp-box'>2017-2020</span>
                <h6>Gujarat Technological University</h6>
                <p>cpi:- 6:68</p>
              </div>
            </div>
          </Col>
        
          <Col xl={6}>
            <div className="resume-cols wow fadeInRight">
              <h2 className='wow fadeInRight'>projects</h2>
              <div className="pro-exp wow fadeInRight">
                <h3 className="wow fadeInRight">event meanegment</h3>
                <span className='sp-box'>2023</span>
                <p>sparks to ideas.</p>

                <ul>
                  <li>This project is an event planner built with React.js, designed for events like weddings, sports, etc.</li>
                  <li>When an admin logs in, a list of registered users should be displayed. On the user side, events posted by the admin will be visible.</li>
                  <li>The admin can monitor all events, and users can view all available events. When a user clicks on a particular event, its details will be displayed, and the user can book the event.</li>
                  {/* <li>user is show the all event. the user click on a particular event and the details are display. user can book the show.</li> */}
                </ul>
              </div>

              <div className="pro-exp wow fadeInRight">
                <h3 className="wow fadeInRight">grocery</h3>
                <span className='sp-box'>2019-2020</span>
                <p>K.D Polytechnic College</p>

                <ul>
                  <li>Online grocery shopping allows for the online purchase of fruits, vegetables, and more</li>
                  <li>You can select your preferred fruits and vegetables from the grocery store. Many people today prefer buying their groceries online.</li>
                  {/* <li>a lot of pepole have come to prefer buying their groceries online today. </li> */}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </main>
  )
}

export default Resume;