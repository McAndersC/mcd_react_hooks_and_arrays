
import { useState } from 'react';
import styles from './box.module.css'
const Box = ({box}) => {


    const [counter, setCounter] = useState(box.value)

    const onEventkHandler = (e) => {

        console.log('EVENT', e)

        setCounter(
            counter + 1
        )

    }


    return (
        <div className={`${styles.box} ${styles[box.color]} `}>
            <div>
                <h3>{counter}</h3>

                <button onClick={onEventkHandler}>ADD</button> <button onClick={onEventkHandler}>SUB</button>

            </div>

        </div>
    );

};
export default Box;