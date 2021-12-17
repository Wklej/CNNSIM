import ModelSet from "../Modal/Components/ModelSet";

const Input = ({handleModelChange, handleImageChange}) => {
    return ( 
        <div>
            <ModelSet modelID={1} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet modelID={2} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
            <ModelSet modelID={3} handleModelChange={handleModelChange} handleImageChange={handleImageChange} />
        </div>
    );
}
 
export default Input;