import ClickMachines from "../../components/ClickMachines/ClickMachines";
import CompactViewList from "../../components/ClickMachines/compactViewList/CompactViewList";

const MachinesDashboardPage = () => {
    return (
        <div>


            <h1>DashBoard</h1>

            <div>
                <ClickMachines></ClickMachines>
            </div>

            <div>
                <CompactViewList></CompactViewList>
            </div>

        </div>
    );
};
export default MachinesDashboardPage;