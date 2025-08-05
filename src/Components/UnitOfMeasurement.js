// Components/Units.js
import { useState, useEffect } from 'react';
import UnitsList from './UnitsList';
import AddUnit from './AddUnit';
import EditUnit from './EditUnit';
import ArchivedUnits from './ArchivedUnits';

function UnitOfMeasurement() {
  const [view, setView] = useState('list'); // 'list', 'add', 'edit', 'archive'
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Загрузка единиц измерения
  useEffect(() => {
    if (view === 'list') {
      fetchUnits();
    }
  }, [view]);

  const fetchUnits = async () => {
    // Замените на ваш API endpoint
    const response = await fetch('https://localhost:7097/api/UnitOfMeasurement/GetByStatus?isActive=true');
    const data = await response.json();
    setUnits(data);
  };

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    setView('edit');
  };

  const handleBackToList = () => {
    setView('list');
    fetchUnits();
  };

  return (
    <div>
      {view === 'list' && (
        <UnitsList 
          units={units}
          onAdd={() => setView('add')}
          onArchive={() => setView('archive')}
          onUnitClick={handleUnitClick}
        />
      )}
      
      {view === 'add' && (
        <AddUnit onBack={handleBackToList} />
      )}
      
      {view === 'edit' && selectedUnit && (
        <EditUnit 
          unit={selectedUnit} 
          onBack={handleBackToList}
        />
      )}
      
      {view === 'archive' && (
        <ArchivedUnits onBack={handleBackToList} />
      )}
    </div>
  );
}

export default UnitOfMeasurement;