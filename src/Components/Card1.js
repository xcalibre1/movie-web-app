import React from 'react'
import Example from "./Example"
import "../App.css"
import { Button, Card } from "react-bootstrap"
export default function Card1(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Card key={props.key} className="h-100" style={{ backgroundColor: "rgba(19, 18, 18, 0.75)", color: "white", width: '18rem', border: "1px solid white" ,margin:"0px 10px"}}>
                <Card.Img   className="vimg" variant="top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movies.poster_path}`} />
                <Card.Body><Button onClick={() => setModalShow(true)}>know more</Button></Card.Body>

            </Card>
            <Example  show={modalShow} onHide={() => setModalShow(false)} Release={props.movies.release_date} Rating={props.movies.vote_average} overview={props.movies.overview} />
        </>
    )
}
