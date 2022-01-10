import ModelSet from "../Modal/Components/ModelSet";

const Input = ({handleModelChange, handleImageChange, setLossFunc}) => {
    return ( 
        <div>
            <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange} check={true} setLossFunc={setLossFunc} />
            <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange} setLossFunc={setLossFunc} />
        </div>
    );
}
 
export default Input;