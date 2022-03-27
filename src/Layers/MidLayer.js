import LayerCard from "../Components/LayerCard";

const MidLayer = ({num}) => {

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <LayerCard id={index} />
            )
        }
        return array
    }

    return (
        divs()
     );
}
 
export default MidLayer;