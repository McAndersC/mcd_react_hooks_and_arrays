
import { createContext } from "react";

export const MachinesContextProvider = ({ children }) => {

  let name = "Context Api Provider";
  let surname = "Hello Surname";

  const shout = () => {

    console.log('HALLO JEG ER JO LIGE HER')

  }

  let initMachinesData = [
    {
        id: 0,
        value : 0,
        increment : 1,
        color : "green",
        title : "Machine 1"
    }
  ]

  const getProducts = async () => {

    return [
        {
            "title" : "produkt 1",
            "price" : 100
        },
        {
            "title" : "produkt 2",
            "price" : 100
        }
    ]

  }
    

  const value = {name, surname, initMachinesData, shout, getProducts};

  return (
      <MachinesContext.Provider value={value}>
        {children}
      </MachinesContext.Provider>
    );

};

  
export const MachinesContext = createContext();