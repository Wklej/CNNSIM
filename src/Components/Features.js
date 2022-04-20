import Tabs from 'react-bootstrap/Tabs'
import { Modal, Tab } from "react-bootstrap";
import { useState } from 'react';
import Karuzela from './Karuzela';
import { epochsContext } from '../Contexts/epochsContext';
import { paramContext } from '../Contexts/paramContext';
import { useContext } from 'react';

const Features = ({show, handleClose, idx}) => {

    //Current epoch status
    const epoch = useContext(epochsContext)
    
    const getValues = useContext(paramContext)

    // const epoch = getValues(null, 'epoch')

    const modelSet = getValues(null, 'modelSet')
    const imageNumber = getValues(null, 'image')

    const gitPath = 'https://raw.githubusercontent.com/Wklej/inzData/1/'

    const getImg = (index, epoch) => {
        let arr = []

        for (let i = 0; i < getValues(null, 'layers'); ++i) {
            arr.push(
                type === 'activations' ?
                    gitPath + index + '/' + epoch + '/outputs/output_' + i + '_' + imageNumber + '.png' :
                    gitPath + index + '/' + epoch + '/filters/filter_' + i + '.png'
            )   
        }
        return arr
    }

    const [type, setType] = useState('activations')

    const bodyType = () => {
        return(
            <Modal.Body>
                <Karuzela content={getImg(modelSet, epoch)} idx={idx} ftr={true} />
            </Modal.Body>
        )    
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