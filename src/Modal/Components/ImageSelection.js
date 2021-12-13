const ImageSelection = ({imageID, handleChange, handleClose, imgPath}) => {

    const ChangeAndClose = (e) => {
        handleChange(e)
        handleClose()
    }

    return (
        <>
            <input className="btn-check" type="radio" name="flexImageRadio" id={imageID} onClick={(e) => ChangeAndClose(e)} />
            <label className="btn btn-outline-dark mb-2" htmlFor={imageID}>
                <img src={imgPath} className="img-fluid" alt="img" />
                Image {imageID}
            </label>
        </> 
     );
}
 
export default ImageSelection;