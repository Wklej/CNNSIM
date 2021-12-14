import { Modal, Carousel } from "react-bootstrap";
import conv1 from '../../Images/conv/conv1.png'
import convGif from '../../Images/conv/cnn2.gif'

const Explaination = ({layerType}) => {

    if (layerType === "conv") {
        return (
            <Modal.Body>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src={conv1} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={convGif} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
        );    
    }
    else if (layerType === "pool") {
        return (
            <Modal.Body>
                Pool explaination body content
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
            </Modal.Body>
        );
    }
    else if (layerType === "flat") {
        return (
            <Modal.Body>Flatten explaination body content</Modal.Body>
        );
    }
    else if (layerType === "fully") {
        return (
            <Modal.Body>Fully explaination body content</Modal.Body>
        );
    }
    else if (layerType === "loss") {
        return (
            <Modal.Body>Loss param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "activation") {
        return (
            <Modal.Body>Activation param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "size") {
        return (
            <Modal.Body>Pool size param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "stride") {
        return (
            <Modal.Body>TODO: Pool/Conv stride param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "filters") {
        return (
            <Modal.Body>Conv filters param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "kernel") {
        return (
            <Modal.Body>Conv kernel param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "activation") {
        return (
            <Modal.Body>Conv activation param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "dropout") {
        return (
            <Modal.Body>Dropout explaination body content</Modal.Body>
        );
    }
}

export default Explaination;