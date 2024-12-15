import { useContext } from "react";
import { MachinesContext } from "../context/machines.context";


export const useMachines = () => useContext(MachinesContext);

