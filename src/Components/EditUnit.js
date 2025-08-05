// Components/EditUnit.js
function EditUnit({ unit, onBack }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    
    await fetch(`https://localhost:7097/api/UnitOfMeasurement/ChangeNameById?id=${unit.id}&newName=${encodeURIComponent(newName)}`, {
      method: 'PUT'
    });
    
    onBack();
  };

  const handleDelete = async () => {
    await fetch(`https://localhost:7097/api/UnitOfMeasurement/Delete?id=${unit.id}`, {
      method: 'DELETE'
    });
    onBack();
  };

  return (
    <div>
      <h1>Редактировать единицу измерения</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Название</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            defaultValue={unit.name} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Обозначение: {unit.symbol}</label>
        </div>
        <button type="submit" className="btn btn-primary me-2">Сохранить</button>
        <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Удалить</button>
        <button type="button" className="btn btn-secondary" onClick={onBack}>Отмена</button>
      </form>
    </div>
  );
}

export default EditUnit;