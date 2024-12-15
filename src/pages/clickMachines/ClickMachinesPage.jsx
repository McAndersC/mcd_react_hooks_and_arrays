import { useState } from "react";
import ClickMachines from "../../components/ClickMachines/ClickMachines";
import { useDocumentTitle } from "@uidotdev/usehooks";


const ClickMachinesPage = () => {

    const [title, setTitle] = useState("HELLO TITLE");

    useDocumentTitle(title);


   

    const updateTitle = () => {
       setTitle('OPDATERET')
    }

    return (
        <div>
            <h1 onClick={updateTitle}>{title}</h1>
            <ClickMachines></ClickMachines>
        </div>
    );
};
export default ClickMachinesPage;