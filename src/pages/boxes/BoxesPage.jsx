
import { useState } from 'react';
import page from '../../styles/modules/page/page.module.css';
import Box from '../../components/Boxes/Box';


const BoxesPage = () => {

    let pageStyles = `${page.wrapper}`;

    const [boxes, setBoxes] = useState([
        {
            value : 1,
            color : "green"
        },
        {
            value : 2,
            color : "red"
        },
        {
            value : 2,
            color : "red"
        }
    ])

    return (
        <div className={pageStyles}>
            <div>
         

            {boxes.map( (box, index) => {

                return <Box key={index} box={box}/>

            } )}

            </div>
        </div>
    );
};
export default BoxesPage;