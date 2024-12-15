import { useEffect, useState } from "react";
import styles from './clickMachines.module.css'
import Box from "../Boxes/Box";
import { useLocalStorage } from "@uidotdev/usehooks";
import { icons } from "../../services/icons";
import { useMachines } from "../../hooks/machines.hook";



const Toggle = ({setDetailView, detailView}) => {

    return (
        <div onClick={ () => setDetailView(!detailView)}>{icons["FaWrench"]}</div>
    )
};

const AddMachine = ({createNewMachine}) => {

    return (
        <div onClick={() => createNewMachine()}>{icons["FaBoltLightning"]}</div>
    )

}

const Total = ({totalColor, total}) => {

    const onTotalClick = () => {

        console.log("Total Clicked")

    }

    return (
        <div className={`${styles.total} ${totalColor}`} onClick={onTotalClick}>
        {total}    
        </div>
    )

}

const MachinesList = ({boxes, addBoxNumber, updateMachine, removeMachine}) => {
    return (
        <div className={styles.list}>

            {boxes.map( (box, index) => {

                return <Box key={index} box={box} addBoxNumber={addBoxNumber} updateMachine={updateMachine} removeMachine={removeMachine} compactView={false}/>

            } )}

        </div>
    )
}

const MachinesDetailList = ({boxes, addBoxNumber, updateMachine, removeMachine}) => {
    return (
        <div className={styles.table}>
            <div className={styles.row}>
                <div>Id</div>
                <div>Title</div>
                <div>Increment</div>
                <div>Color</div>
                <div>Value</div>
            </div>
            
            {boxes.map( (box, index) => {

                return <div key={box.id} className={styles.row}>
                    <div>{box.id}</div>
                    <div>{box.title}</div>
                    <div>{box.increment}</div>
                    <div>{box.color}</div>
                    <div>{box.value}</div>
                </div>

            } )}

        </div>
    )
}

const ClickMachines = ({collection}) => {

    const {initMachinesData} = useMachines();
    let data = initMachinesData;
    
    let initialTotal = data.reduce((acc, {value}) => acc + value, 0);

    const [total, setTotal] = useState(initialTotal);
    const [boxes, setBoxes] = useLocalStorage(collection, data);
    const [totalColor, setTotalColor] = useState(styles.red);
    const [detailView, setDetailView] = useState(false);

    // Fanger alle ændringer på box array´et  - det udnytter vi til at få totalen opdateret både som "init" og ved ændringer.
    useEffect( () => {

    
        let sum = boxes.reduce((acc, {value}) => acc + value, 0);
        setTotal(sum);
        setTotalColors(sum);
        

    }, [boxes])

    // Sætter farve på totalen
    const setTotalColors = (sum) => {

        if(sum >= 0 && sum <= 10) {
           
            setTotalColor(styles.red);

        } else if(sum > 10 && sum <= 20 ) {
           
            setTotalColor(styles.green);

        } else if(sum > 20 && sum <= 30) {
         
            setTotalColor(styles.blue);

        }

    }

    const updateMachine = (machine) => {

        let machineToUpdateIndex = boxes.findIndex( (m) => m.id === machine.id)

        if(machineToUpdateIndex !== -1)
        {
            boxes[machineToUpdateIndex] = machine

            setBoxes(
                [
                    ...boxes
                ]
            )
        }
    }

    const removeMachine = (machine) => {

        let machineToDeleteIndex = boxes.findIndex( (m) => m.id === machine.id)

        if(machineToDeleteIndex !== -1)
        {
            let rest = boxes.filter( (m) => m.id !== machine.id)
            setBoxes(
                [
                    ...rest
                ]
            )

        }

    }

    const createNewMachine = () => {

        let nextId = 0; 
        if(boxes.length > 0) {
            let next = boxes.reduce((acc, val) => {
                return acc.id > val.id ? acc : val;
            });

            console.log("next", next)

            nextId = next.id + 1;
        }
       

        setBoxes(
            [
                ...boxes,
                {
                    id: nextId,
                    value : 0,
                    increment : 1,
                    color : "red",
                    title : "Machine"
                },
                {
                    id: nextId + 2,
                    value : 0,
                    increment : 1,
                    color : "red",
                    title : "Machine"
                },
                {
                    id: nextId + 100,
                    value : 0,
                    increment : 1,
                    color : "red",
                    title : "Machine"
                }
            ]
        )


    }

    return (
        <div className={styles.clickMachines}>
            
            <Total totalColor={totalColor} total={total}></Total>
            <Toggle detailView={detailView} setDetailView={setDetailView}></Toggle>
           
            {detailView ? 

                <MachinesDetailList boxes={boxes}></MachinesDetailList> 

            : 
            
                <MachinesList boxes={boxes} updateMachine={updateMachine} removeMachine={removeMachine}></MachinesList>
            
            }
            
            <AddMachine createNewMachine={createNewMachine}></AddMachine>

        </div>
    );
};
export default ClickMachines;