// Components/UnitsList.js
function UnitsList({ units, onAdd, onArchive, onUnitClick }) {
  return (
    <div>
      <h1 className="mb-3">Единицы измерения</h1>
      
      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={onAdd}>
          Добавить
        </button>
        <button className="btn btn-warning" onClick={onArchive}>
          К архиву
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

export default UnitsList;