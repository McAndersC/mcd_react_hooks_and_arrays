import { useLocalStorage } from "@uidotdev/usehooks";
import styles from './compactViewList.module.css'
import Box from "../../Boxes/Box";

const CompactViewList = () => {

    const [boxes, setBoxes] = useLocalStorage('machines');

    return (
        <div className={styles.compactView}>

            {boxes.map( (box) => {


                return <Box key={box.id} box={box} compactView={true}/>

            } )}
        </div>
    );
};
export default CompactViewList;