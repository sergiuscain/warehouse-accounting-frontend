// Components/EditUnit.js
import { useState } from "react";

function EditUnit({ unit, onBack }) {
  const [currentStatus, setCurrentStatus] = useState(unit.isActive);

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

  const handleChangeStatus = async () => {
    try {
      const response = await fetch(`https://localhost:7097/api/UnitOfMeasurement/ChangeStatus?id=${unit.id}`, {
        method: 'PUT'
      });
      
      if (response.ok) {
        setCurrentStatus(!currentStatus);
        // Можно сразу обновить список, если нужно:
        onBack();
      }
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
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
          <label className="form-label">Статус: {currentStatus ? 'Активна' : 'В архиве'}</label>
        </div>
        <button type="submit" className="btn btn-primary me-2">Сохранить</button>
        <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Удалить</button>
        <button 
          type="button" 
          className={`btn me-2 ${currentStatus ? 'btn-warning' : 'btn-success'}`}
          onClick={handleChangeStatus}
        >
          {currentStatus ? 'В архив' : 'В работу'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onBack}>Отмена</button>
      </form>
    </div>
  );
}

export default EditUnit;