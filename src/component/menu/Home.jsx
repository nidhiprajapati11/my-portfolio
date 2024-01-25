import React  from 'react'
import './stayle.css'
import About from './About'
import Resume from './Resume'
import Services from './Services'
import Contact from './Contact'
import { TypeAnimation } from 'react-type-animation'
//import 'animate.css';


function Home() {
   
    return (
        <>
            <main>
                <section className='home'>
                    <div className="home-row">
                        <h1 className='wow fadeInLeft'> nidhi prajapati</h1>
                        <p className='wow fadeInLeft'> i'm a <TypeAnimation
                            sequence={[
                                500,
                                'front end developer',
                                1000,
                                'designer',
                                500,
                                'coder',
                                500,

                            ]}
                            speed={40}
                            repeat={Infinity}
                        /> </p>

                    </div>
                </section>
            </main>

            <About />
            <Resume />
            <Services />
            <Contact />
        </>
    )
}

export default Home