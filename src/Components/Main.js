import React, { useState, useEffect } from 'react'
import "../App.css"
import { Navbar, Nav, Form, Button} from "react-bootstrap"
import ImageSlider from "./ImageSlider.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from "./Card1"

export default function Main() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [mname, setmname] = useState("spider man");



    const searchMovies = async (e) => {
        e?.preventDefault();
        console.log("submitting");
        const url = `https://api.themoviedb.org/3/search/movie?api_key=609c11802eefdf2e8f76dbc162ba638e&language=en-US&query=${mname}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
        console.log(movies)
    }
    useEffect(() => {
        searchMovies()
    }, []);
    return (

        <div className="special">

            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="#home">RATED</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline >
                    <Form.Control className="mr-1" type="text" name="query" placeholder="i.e jurrasic park" value={query} onChange={(e) => {
                        setmname(e.target.value); setQuery(e.target.value)
                    }} />
                    <Button variant="outline-info" onClick={searchMovies}>Search</Button>
                </Form>
            </Navbar>
            <ImageSlider />
            <div className="row">

                {movies.filter((movie,index) => movie.poster_path).map((movie,index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <Card1 movies={movie} key={index}/>

                    </div>

                ))}

            </div>
        </div>

    )
}
