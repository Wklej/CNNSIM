import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';
import Karuzela from './Karuzela';
import { epochsContext } from '../../epochsContext';
import { paramContext } from '../../paramContext';
import { useContext } from 'react';

const Features = ({show, handleClose, idx}) => {

    //Current epoch status
    const epoch = useContext(epochsContext)
    
    //Current model set
    const getValues = useContext(paramContext)

    const modelSet = getValues(null, 'modelSet')
    const imageNumber = getValues(null, 'image')

    // Function to map whole dir content to @images object
    // const getImages = (dirVariable) => {
    //     const cache = {};

    //     const r = dirVariable

    //     r.keys().forEach((key) => (cache[key] = r(key)))
    
    //     const images = Object.entries(cache).map(module => module[1].default);
        
    //     return images
    // }

    const getImg = (index, epoch) => {
        let arr = []

        for (let i = 0; i < 4; ++i) {
            arr.push(
                type === 'activations' ?
                    'Activations/' + index + '/' + epoch + '/outputs/output_' + i + '_' + imageNumber + '.png' :
                    'Activations/' + index + '/' + epoch + '/filters/filter_' + i + '_' + imageNumber + '.png'
            )   
        }

        return arr
    }

    // Function to choose path based on @layerType
    // const getDir = (layerType) => {
    //     switch (layerType) {
    //         case "activations":
    //             switch (epoch) {
    //                 //return set of img tags with outputs
    //                 case 1:
    //                     return require.context("../../Images/Activations/test/1/outputs", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 5:
    //                     return require.context("../../Images/Activations/test/5/outputs", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 15:
    //                     return require.context("../../Images/Activations/test/15/outputs", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 20:
    //                     return require.context("../../Images/Activations/test/20/outputs", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 30:
    //                     return require.context("../../Images/Activations/test/30/outputs", false, /\.(png|gif|jpg)$/)
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         case "filters":
    //             switch (epoch) {
    //                 case 1:
    //                     return require.context("../../Images/Activations/test/1/filters", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 5:
    //                     return require.context("../../Images/Activations/test/5/filters", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 15:
    //                     return require.context("../../Images/Activations/test/15/filters", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 20:
    //                     return require.context("../../Images/Activations/test/20/filters", false, /\.(png|gif|jpg)$/)        
    //                     break;
    //                 case 30:
    //                     return require.context("../../Images/Activations/test/30/filters", false, /\.(png|gif|jpg)$/)
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         default:
    //             break;
    //     }
    // }

    const [type, setType] = useState('activations')

    const bodyType = () => {
        if (type === "activations" || type === "filters") {
            return(
                <Modal.Body>
                    {/* <Karuzela content={getImages(getDir(type))} idx={idx} /> */}
                    <Karuzela content={getImg(modelSet, epoch)} idx={idx} />
                </Modal.Body>
            )    
        }
        else if(type === "comparison") {
            return(<Modal.Body>Feature 3</Modal.Body>)
        }
    }

   return ( 
        <Modal show={show} onHide={handleClose} size='lg'>
            <Tabs activeKey={type} onSelect={(e) => setType(e)}>
                <Tab tabClassName='tabFont' eventKey="activations" title="Activations">
                    { bodyType() }
                </Tab>
                <Tab tabClassName='tabFont' eventKey="filters" title="Filters">
                    { bodyType() }
                </Tab>   
                <Tab tabClassName='tabFont' eventKey="comparison" title="Comparison">
                    { epoch }
                </Tab>   
            </Tabs>
            <Modal.Footer>
                <button className="btn btn-orange" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default Features;