import { Carousel } from "react-bootstrap";

const Karuzela = ({content}) => {
    return (  
        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block w-100" src={content[0]} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={content[1]} alt="Second slide" />
            </Carousel.Item>
        </Carousel>
    );
}
 
export default Karuzela;