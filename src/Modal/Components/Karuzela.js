import { Carousel } from "react-bootstrap";

const Karuzela = ({content, idx}) => {

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

    const item = () => {
        return(
            <Carousel.Item>
                <img className="d-block w-100" src={content[idx]} alt="First slide" />
            </Carousel.Item>
        )
    }

    return (  
        <Carousel variant="dark" controls={content.length === 1 || idx ? false : true} 
                                    indicators={content.length === 1 || idx ? false : true}>
            { idx === undefined ? items() : item() }
        </Carousel>
    );
}
 
export default Karuzela;