import React, { useEffect, useRef } from "react";
import firebase from "firebase"
import ReactAudioPlayer from 'react-audio-player';
import gsap from "gsap";
import logo from "../logo.svg";
import Particles from 'react-particles-js';


const Home = () => {
    const intro = useRef();
    const title = useRef();
    const content = useRef();



    useEffect(() => {
        let tl = new gsap.timeline();

        tl.to(intro.current, {
            opacity: 1,
            delay: 1,
            duration: 4.5
        })
            .to(intro.current, {
                opacity: 0,
                duration: 1.5,

            })
            .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
            .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
            .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
            .to(content.current, { top: "-170%", duration: 100 });
    }, []);


    return (
        <div className="container2">

            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

            <section className="intro" ref={intro}>
                <p>
                    A long time ago, in a galaxy far,
            <br /> far away....
        </p>
            </section>
            <section className="title" ref={title}>
                <img src={logo} alt="Code Wars title" />
            </section>
            <section className="crawl">
                <div className="contents" ref={content}>
                    <h1 className="episode-number">Episode X</h1>
                    <h2 className="episode-title">THE APP AWAKENS</h2>
                    <p>
                        The International Space Station (ISS) took 10 years and more than 30 missions to assemble.
                        It is the result of unprecedented scientific and engineering collaboration among five space
                        agencies representing 15 countries. The space station is approximately the size of a football
                        field: a 460-ton, permanently crewed platform orbiting 250 miles above Earth. It is about four
                        times as large as the Russian space station Mir and five times as large as the U.S. Skylab.
            </p>
                    <p>
                        The idea of a space station was once science fiction, existing only in the imagination until
                        it became clear in the 1940s that construction of such a structure might be attainable by our
                        nation. As the Space Age began in the 1950s, designs of “space planes” and stations dominated popular
                        media.
            </p>
                    <p>
                        Until recently, U.S. research space onboard the ISS had been reserved for mostly government initiatives,
                        but new opportunities for commercial and academic use of the ISS are now available, facilitated by the
                        ISS National Lab.
            </p>
                </div>
            </section>

            {/* <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 700,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            },
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },

                        }
                    },
                    "retina_detect": true
                }} /> */}
{/* 
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "../iss.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "../logo.png",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "../logo512.png",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} /> */}

            <ReactAudioPlayer
                src="../starwars.mp3"
                autoPlay
                controls={false}
            />
        </div>
    )

}



export default Home;