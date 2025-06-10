// Task-1 

// Write a reactJS program to perform the tasks as asked below.

// Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js, Comp3.js.

// Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the numbers using useContext.

import { createContext } from "react";
import Comp3 from './Comp3'
const Num1=createContext()
const Num2=createContext()
function Comp(){
    return(
        <>
        <Num1.Provider value={10}>
        <Num2.Provider value={20}>
        <Comp3/>
        </Num2.Provider>
        </Num1.Provider>
        </>
    )
}
export default Comp
export {Num1,Num2}