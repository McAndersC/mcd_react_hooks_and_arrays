import ClickMachines from "../../components/ClickMachines/ClickMachines";
import useAnchorScroll from "../../hooks/useAnchorScroll";

const ManyPage = () => {

    useAnchorScroll();

    return (
        <div>

            <a href="#hest">hest</a>
            ManyPage

            <ClickMachines collection={"hest"} ></ClickMachines>
            <ClickMachines collection={"hanne"}></ClickMachines>
            <ClickMachines collection={"hans"}></ClickMachines>
            <ClickMachines collection={"helle"}></ClickMachines>
            <ClickMachines collection={"anton"}></ClickMachines>
            <ClickMachines collection={"marlene"}></ClickMachines>
            
            <div id="hest">hest</div>
        </div>
    );
};
export default ManyPage;