import React, { useState } from "react";
function US7() {
    const [obj, setobj] = useState({ make: 'Lamborghini', model: "Aventador", color: "Black", year: 2020 })
    function hc() {
        if (obj === ({ make: 'Lamborghini', model: "Aventador", color: "Black", year: 2020 })) {
            setobj({ make: 'Audi', model: 'y56', color: 'zinc', year: 2021 })
        }
        else {
            setobj(({ make: 'Lamborghini', model: "Aventador", color: "Black", year: 2020 }))
        }
    }
    return (
        <>
            <button onClick={hc}>Change </button>
            <h1>My {obj.make}. It is {obj.model} of {obj.color} color from {obj.year}</h1>
        </>
    )
}
export default US7