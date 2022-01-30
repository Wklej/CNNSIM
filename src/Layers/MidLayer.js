import LayerCard from "../Modal/Components/LayerCard";

const MidLayer = ({num}) => {

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <LayerCard id={index} ifLast={index === num-1 ? true : false} />
            )
        }
        return array
    }

    return (
        divs()
     );
}
 
export default MidLayer;