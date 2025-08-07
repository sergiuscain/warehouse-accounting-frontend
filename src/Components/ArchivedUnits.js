// Components/ArchivedUnits.js
import { useState, useEffect } from 'react';

function ArchivedUnits({ onBack, onUnitClick }) {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchArchivedUnits = async () => {
      const response = await fetch('https://localhost:7097/api/UnitOfMeasurement/GetByStatus?isActive=false');
      const data = await response.json();
      setUnits(data);
    };
    
    fetchArchivedUnits();
  }, []);

  return (
    <div>
      <h1 className="mb-3">Архивные единицы измерения</h1>
      
      <div className="mb-3">
        <button className="btn btn-primary" onClick={onBack}>
          К рабочим
        </button>
      </div>
      
      <div className="list-group">
        {units.map(unit => (
          <button
            key={unit.id}
            className="list-group-item list-group-item-action"
            onClick={() => onUnitClick(unit)}
          >
            {unit.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ArchivedUnits;