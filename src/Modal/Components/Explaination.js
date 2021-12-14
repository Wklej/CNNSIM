import { Modal, Carousel } from "react-bootstrap";
// import { conv } from '../../Images/conv/'
// import convGif from '../../Images/conv/cnn2.gif'
import Karuzela from "./Karuzela";

const Explaination = ({layerType}) => {
    
    //Loading images from directory dynamically
    const cache = {};

    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }

    importAll(require.context("../../Images/conv", false, /\.(png|gif)$/));

    const images = Object.entries(cache).map(module => module[1].default);

    if (layerType === "conv") {
        return (
            <Modal.Body>
                <Karuzela content={images} />
                {console.log(images)}
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
    else if (layerType === "dropout") {
        return (
            <Modal.Body>Dropout explaination body content</Modal.Body>
        );
    }
}

export default Explaination;