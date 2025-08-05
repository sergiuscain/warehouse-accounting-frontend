// Components/ArchivedUnits.js
import { useState, useEffect } from 'react';

function ArchivedUnits({ onBack }) {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchArchivedUnits = async () => {
      const response = await fetch('/api/UnitOfMeasurement/GetByStatus?isActive=false');
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
          <div key={unit.id} className="list-group-item">
            {unit.name} ({unit.symbol})
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchivedUnits;