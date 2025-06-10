import React, { useState } from "react";
import m1 from './m1.png';
import m2 from './m2.png';
import m3 from './m3.png';

function US14() {
    const mobilesData = [
        { brand: 'Samsung', image: m1 },
        { brand: 'Vivo', image: m2 },
        { brand: 'Oneplus', image: m3 }
    ];

    const [mobiles, setMobiles] = useState(mobilesData);
    const [brand, setBrand] = useState('All');

    const handleFilter = (e) => {
        const selectedBrand = e.target.value;
        setBrand(selectedBrand);
        if (selectedBrand === 'All') {
            setMobiles(mobilesData);
        } else {
            const filteredMobiles = mobilesData.filter(mobile => mobile.brand === selectedBrand);
            setMobiles(filteredMobiles);
        }
    };

    return (
        <>
            <div>
                {mobiles.map((mobile, index) => (
                    <img key={index} src={mobile.image} alt={mobile.brand} height="500px" width="500px" />
                ))}
            </div>
            <button value="All" onClick={handleFilter}>All</button>
            <button value="Samsung" onClick={handleFilter}>Samsung</button>
            <button value="Vivo" onClick={handleFilter}>Vivo</button>
            <button value="Oneplus" onClick={handleFilter}>Oneplus</button>
        </>
    );
}

export default US14;
