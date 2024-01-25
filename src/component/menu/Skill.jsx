import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './stayle.css'
import html from '../img/html.png';
import css from '../img/css.png';
import bootstrap from '../img/bootstrap.jpg'
import js from '../img/js.png'
import taliwain from '../img/tailwind-css.png'
import react from '../img/react.png'
import 'animate.css';

function Skill() {
    return (
        <>

            <main>
                <div className='skill-section'>
                    <Container fluid>
                        <div className='fact'>
                        <Row className='skil-title wow fadeInUp'>
                            <Col xl={12} className='skill'>
                                <h1 className='sub-heading'>skills</h1>
                                <hr />
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3} md={6} className='wow fadeInLeft img-skil'>
                                <div className='skli-imge'>
                                    <img src={html} alt='' />
                                    <h4>html</h4>
                                </div>
                            </Col>

                            <Col xl={3} md={6} className='wow fadeInLeft img-skil'>
                                <div className='skli-imge'>
                                    <img src={css} alt='' />
                                    <h4>css</h4>
                                </div>
                            </Col>

                            <Col xl={3} md={6} className='wow fadeInLeft img-skil'>
                                <div className='skli-imge'>
                                    <img src={js} alt='' />
                                    <h4>js</h4>
                                </div>
                            </Col>

                            <Col xl={3} md={6} className='wow fadeInRight img-skil'>
                                <div className='skli-imge'>
                                    <img src={bootstrap} alt='' />
                                    <h4>bootstrap</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3} md={6} className='wow fadeInRight img-skil'>
                                <div className='skli-imge'>
                                    <img src={js} alt='' />
                                    <h4>js</h4>
                                </div>
                            </Col>
                            <Col xl={3} md={6} className='wow fadeInLeft img-skil'>
                                <div className='skli-imge'>
                                    <img src={react} alt='' />
                                    <h4>react</h4>
                                </div>
                            </Col>
                            <Col xl={3} md={6} className='wow fadeInRight img-skil'>
                                <div className='skli-imge'>
                                    <img src={taliwain} alt='' />
                                    <h4>taliwain-css</h4>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                </div>
            </main>

        </>
    )
}

export default Skill