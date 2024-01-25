import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './stayle.css'
import Skill from './Skill';
import 'animate.css';

function Fact() {
    return (
        <>
            <main>
                <Container fluid>
                    <div className='fact'>
                        <Row>
                            <Col xl={12} className='wow fadeInUp'>
                                <h1 className='sub-heading'>facts</h1>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, consequatur alias tenetur, saepe ipsum facere a nihil, provident atque consectetur ex ab cumque! Sequi ipsam, perferendis enim quod atque asperiores?</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3} md={6} className='wow fadeInUp'>
                                <div className="count-box">
                                    <i className="fa-regular fa-face-smile"></i>
                                    <span>10</span>
                                    <p><strong>Collaboration</strong> consequuntur quae</p>
                                </div>
                            </Col>
                            <Col xl={3} md={6} className='wow fadeInUp'>
                                <div className="count-box">
                                    <i className="fa-solid fa-book"></i>
                                    <span>2</span>
                                    <p><strong>Projects adipisci</strong> atque cum quia aut</p>
                                </div>
                            </Col>
                            <Col xl={3} md={6} className='wow fadeInUp'>
                                <div className="count-box">
                                    <i className="fa-solid fa-headphones"></i>
                                    <span>1152</span>
                                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                </div>
                            </Col>
                            <Col xl={3} md={6} className='wow fadeInUp'>
                                <div className="count-box">
                                    <i className="fa-solid fa-users"></i>
                                    <span>21</span>
                                    <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                </div>
                            </Col>
                        </Row>
                       
                    </div>
                </Container >
            </main >

            <Skill/>
        </>
    )
}



export default Fact;