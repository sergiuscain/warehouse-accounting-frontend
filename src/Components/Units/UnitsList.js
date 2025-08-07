// Components/UnitsList.js
function UnitsList({ units, onAdd, onArchive, onUnitClick }) {
  return (
    <div>
      <h1 className="mb-3">Единицы измерения</h1>
      
      <div className="mb-3 d-flex gap-2">
        <button className="btn btn-success" onClick={onAdd}>
          Добавить
        </button>
        <button className="btn btn-warning" onClick={onArchive}>
          К архиву
        </button>
      </div>

      {/* Таблица с единицами измерения */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Наименование</th>
            </tr>
          </thead>
          <tbody>
            {units.map(unit => (
              <tr 
                key={unit.id} 
                className="cursor-pointer"
                onClick={() => onUnitClick(unit)}
              >
                <td>{unit.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnitsList;