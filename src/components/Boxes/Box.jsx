
import { useState } from 'react';
import styles from './box.module.css'
import { icons } from '../../services/icons';

const BoxCompact = ({box}) => {

    return (<div className={`${styles.box} ${styles[box.color]} ${styles.compact}`}>

        <h4>{box.value}</h4>
        {box.title}
        

    </div>)

}

const Box = ({box, addBoxNumber, updateMachine, removeMachine, compactView}) => {

    const [counter, setCounter] = useState(box.value)
    
    const [increment, setIncrement] = useState(parseInt(box.increment))
    
    const themeColors = ["blue", "red", "green", "white"];

    const onEventkHandler = (amount) => {

        let sum = counter + amount
      
        if(sum >= 0) {

            box.value = counter + amount;
            setCounter(box.value);
     
            updateMachine(box);
        }

    }

    const onTitleUpdate = (e) => {

        box.title = e.target.value;

        updateMachine(box);

    }    
    
    const onThemeUpdate = (e) => {

        box.color = e.target.value;

        updateMachine(box);

    }

    const onSliderChange = (e) => {
  
        box.increment = parseInt(e.target.value);
        setIncrement(box.increment);
        updateMachine(box);

    }   

    return (

        <div>

        {
            compactView ? <BoxCompact box={box}></BoxCompact> : 
            <div className={`${styles.box} ${styles[box.color]}`}>            
                <div className={styles.remove} onClick={() => removeMachine(box)}>{icons["FaTrash"]}</div>

                <div>
                    <h3>{counter}</h3>
                    <h5><input name="title" defaultValue={box.title} onChange={(e) => onTitleUpdate(e, box.id)}></input></h5>   

                    <div className={styles.actions}>
                        <button onClick={() => onEventkHandler(increment)}>+{increment}</button> 
                        <button onClick={() => onEventkHandler(-increment)}>-{increment}</button>
                    </div>             

                    <div>
                        <select onChange={(e) => onThemeUpdate(e, box.id)} defaultValue={box.color}>
                            {themeColors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <input type="range" min={0} max={100} onChange={onSliderChange} defaultValue={increment}></input>
                    </div>
                </div>
            </div>
        }

            

        </div>
    );

};
export default Box;