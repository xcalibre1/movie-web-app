import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import HdIcon from '@material-ui/icons/Hd';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import { Carousel, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
export default function ImageSlider(props) {
    return (
        <div className="fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/11/13/16/51/white-walker-5739181_960_720.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="pos">
                        <Card className="Card">

                            <Card.Body>
                                <Card.Title><strong>Game of Thrones</strong></Card.Title>
                                <Card.Text><StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <HdIcon />  IMDB: 8 <DateRangeOutlinedIcon /> 2015 </Card.Text>
                                <Card.Text></Card.Text>
                                <Card.Text>
                                    Glimpse the epic scale of Game of Thrones in this featurette that spends one day touring various Season 5 sets in Croatia, Spain and Ireland.
                                </Card.Text>
                                <Button variant="Secondry">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/08/18/18/39/sherlock-holmes-5499030_960_720.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="pos">
                        <Card className="Card">

                            <Card.Body>
                                <Card.Title><strong>Sherlock Holmes</strong></Card.Title>
                                <Card.Text><StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <HdIcon />  IMDB: 8 <DateRangeOutlinedIcon /></Card.Text>
                                <Card.Text></Card.Text>
                                <Card.Text></Card.Text>
                                <Card.Text>
                                    hEccentric consulting detective, Sherlock Holmes and Doctor John Watson battle to bring down a new nemesis and unravel a deadly plot that could destroy England.
                                </Card.Text>
                                <Button variant="Secondry">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/05/31/02/08/iron-man-4241268_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="pos">
                        <Card className="Card">

                            <Card.Body>
                                <Card.Title><strong>Iron Man</strong></Card.Title>
                                <Card.Text><StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <StarOutlineIcon /> <HdIcon />  IMDB: 8 <DateRangeOutlinedIcon /> 2008 </Card.Text>
                                <Card.Text>
                                    After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.
                                </Card.Text>
                                <Button variant="Secondry">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
