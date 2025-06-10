//create a react app to add array of five objects with properties name  and age check if age is greater than 50
//then display the person name of whose age is greater than 50
import React from "react";
function T5() {
    const people = [{ name: 'ABC', age: 30 }, { name: 'BDS', age: 40 }, { name: 'PQR', age: 51 }, { name: 'EAS', age: 20 }, { name: 'Dev', age: 60 }]
    return (
        <>
            <ul>
                {
                    people.filter((per) => (per.age > 50)).map((per) => { return <h3>{per.name}</h3> })
                }
            </ul>
        </>
    )
}0
export default T5;