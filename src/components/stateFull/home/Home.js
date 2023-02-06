import React from "react"; 
import image1 from "../../../images/car0.jpeg"
import image2 from "../../../images/car1.jpeg"
import image3 from "../../../images/car2.jpeg"
import image4 from "../../../images/car3.jpeg"
import{ Image,Row, Col ,Container} from 'react-bootstrap'
import Styles from "./#home.module.css"
export default function Home(){  
            return(
                <Container>
                    <Row >
                        <Col lg="8" >

                            <Row>
                                 {/*commerce vehicle filtering*/}
                                <Col md={8}>
                                    <Row >
                                        <Col md={4} sm={4} xs={4}>
                                            <div className={Styles.text}>
                                                 vehicles:100
                                            </div>
                                        </Col>
                                        <Col md={4} sm={4} xs={4}>
                                            <select className='form-control'>
                                                <option>mercedes</option>
                                                <option>Toyota</option>
                                                <option>Bmw</option>
                                                <option>Audi</option>
                                                <option>Range Rover</option>
                                            </select>
                                        </Col>
                                        <Col md={4} sm={4} xs={4}>
                                            <select className='form-control'>
                                                <option>mercedes</option>
                                                <option>Toyota</option>
                                                <option>Bmw</option>
                                                <option>Audi</option>
                                                <option>Range Rover</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/*End of filtering*/}

                            <hr/>
                            {/*start of cars*/}
                            <Row>
                                <Col lg={6} md={6} xs={6} sm={6} className={Styles.margin}>
                                    <Image src={image1} thumbnail/>
                                    <div className="product-price">
                                        <div>Kshs 2,000,000</div>
                                        <button className="btn btn-success">Add to cart</button>
                                    </div>

                                </Col>
                                <Col lg={6} md={6} xs={6} sm={6} className={Styles.margin}>
                                    <Image src={image2} thumbnail/>
                                    <div className="product-price">
                                        <div>Kshs 2,000,000</div>
                                        <button className="btn btn-success">Add to cart</button>
                                    </div>

                                </Col>
                                <Col lg={6} md={6} xs={6} sm={6} className={Styles.margin}>
                                    <Image src={image3} thumbnail/>
                                    <div className="product-price">
                                        <div>Kshs 2,000,000</div>
                                        <button className="btn btn-success">Add to cart</button>
                                    </div>

                                </Col>
                                <Col lg={6} md={6} xs={6} sm={6} className={Styles.margin}>
                                    <Image src={image4} thumbnail/>
                                    <div className="product-price">
                                        <div>Kshs 2,000,000</div>
                                        <button className="btn btn-success">Add to cart</button>
                                    </div>

                                </Col>

                            </Row>
                        </Col>
                        <Col lg="4">
                        </Col>

                    </Row>
                    </Container>
            )
        }
    
    




