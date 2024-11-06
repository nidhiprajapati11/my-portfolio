import React from 'react'
import './stayle.css'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
//import 'animate.css';
function Services() {
  return (
    <>
      <main>
        <Container fluid>
          <div className='service'>
            <Row>
              <Col xl={12} className='wow fadeInUp'>
                <h1 className='sub-heading'>interest</h1>
                <hr />
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit ea enim dolor ratione odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, natus aperiam. Accusantium temporibus quisquam saepe.</p> */}

              </Col>
            </Row>

            <Row className='service-box'>
              <Col xl={4} xs={12} className='icon-box-service wow fadeInUp'>
                <div className="icon-service">
                  <i className='fa-brands fa-react' />                  
                </div>
                <h4 className="service-title"><NavLink>react developer</NavLink></h4>
                <p className="service-descreption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque.</p>
              </Col>

              <Col xl={4} xs={12} className='icon-box-service wow fadeInUp'>
                <div className="icon-service">
                  <i className='fa-solid fa-list-check' />                  
                </div>
                <h4 className="service-title"><NavLink>Full Stack Devloper</NavLink></h4>
                <p className="service-descreption">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </Col>

              <Col xl={4} xs={12} className='icon-box-service wow fadeInUp'>
                <div className="icon-service">
                  <i className='fa-solid fa-chart-column' />                  
                </div>
                <h4 className="service-title"><NavLink>UI / UX Designer</NavLink></h4>
                <p className="service-descreption">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </Col>

              <Col xl={4} xs={12} className='icon-box-service wow fadeInUp'>
                <div className="icon-service">
                  <i className='fa-regular fa-sun' />                  
                </div>
                <h4 className="service-title"><NavLink>Resposive Desingn</NavLink></h4>
                <p className="service-descreption">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </Col>

              <Col xl={4} xs={12} className='icon-box-service wow fadeInUp'>
                <div className="icon-service">
                  <i className='fa-regular fa-calendar-days' />                  
                </div>
                <h4 className="service-title"><NavLink>Web Devlopment</NavLink></h4>
                <p className="service-descreption">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </Col>
            </Row>
          </div>
        </Container>
      </main>

    </>
  )
}

export default Services;

