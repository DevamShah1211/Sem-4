import React from "react";
function List(){
    const student=[{id:1,name:'ABC'},{id:2,name:'PQR'}]
    return(
        <>
        <ul>
            {
                student.map((data)=>{return <li key={data.id.toString()}>{data.name}</li>})
            }
        </ul>
        </>
    )
}
export default List;


