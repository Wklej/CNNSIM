import { useContext, useState } from "react"
import { paramContext } from "../../paramContext";

const ImageSelection = ({imageID, handleChange, handleClose, imgPath}) => {

    const getValues = useContext(paramContext)

    const [values, setValues] = useState(getValues(null, 'image'))

    const ChangeAndClose = (e) => {
        handleChange(e)
        handleClose()
    }

    return (
        <>
            <input className="btn-check" type="radio" name="flexImageRadio" 
                    defaultChecked={values.toString() === imageID.toString()} id={imageID}
                    onClick={(e) => ChangeAndClose(e)} />
            <label className="btn btn-outline-orange mb-2" htmlFor={imageID}>
                <img src={imgPath} className="img-fluid" alt="img" />
                Image {imageID}
            </label>
        </> 
     );
}
 
export default ImageSelection;