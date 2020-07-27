import React, { useState, useEffect } from "react";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Particles from 'react-particles-js';

const useStyles = makeStyles({
    table: {
        minWidth: 50,
    },
});






const Astronauts = () => {
    const classes = useStyles();

    const [astro, setAstro] = useState([]);

    // useEffect(() => {

    //     axios.get(`http://api.open-notify.org/astros.json`)
    //         .then((res) => {
    //             console.log(res.data.people)
    //             setAstro(res.data.people)
    //         })


    // }, [astro])


    useEffect(() => {
        const fetchData = async () => {
            axios.get('http://api.open-notify.org/astros.json')
                .then(res => {
                    console.log(res.data.people)
                    setAstro(res.data.people)
                })
        }
        fetchData();
    }, [])



    return (
        <>


            <TableContainer component={Paper} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'gold' }}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: 'gold' }}>NAME</TableCell>
                            <TableCell style={{ color: 'gold' }} align="right">CRAFT</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {astro.map((astro, id) => (
                            <TableRow key={id}>
                                <TableCell style={{ color: 'gold' }} component="th" scope="row">
                                    {astro.name}
                                </TableCell>
                                <TableCell style={{ color: 'gold' }} align="right">{astro.craft}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 250,
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
                                "distance": 150,
                                "duration": 2,
                                "size": 0,
                                "opacity": 1
                            },
                        }
                    },
                    "retina_detect": true
                }} />

        </>
    )

}



export default Astronauts;
