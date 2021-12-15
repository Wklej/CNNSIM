import { Carousel } from "react-bootstrap";

const Karuzela = ({content}) => {

    const items = () => {
        let arr = []
        for (let i = content.length - 1; i >= 0; i--) {
            arr.push(
                <Carousel.Item>
                    <img className="d-block w-100" src={content[i]} alt="First slide" />
                </Carousel.Item>
            )
        }
        return arr
    }

    return (  
        <Carousel variant="dark">
            {items()}
        </Carousel>
    );
}
 
export default Karuzela;