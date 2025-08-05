function AddUnit({ onBack }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const unitData = {
      Name: formData.get('name'), // Исправлено: 'name' вместо 'Name'
      IsActive: true // Добавляем значение по умолчанию
    };
    
    try {
      const response = await fetch('https://localhost:7097/api/UnitOfMeasurement/Create', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(unitData)
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      onBack();
    } catch (error) {
      console.error('Ошибка при создании:', error);
      // Можно добавить уведомление пользователю об ошибке
    }
  };

  return (
    <div>
      <h1>Добавить единицу измерения</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Название</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" // Это имя используется в FormData
            required 
          />
        </div>
        <button type="submit" className="btn btn-success me-2">Сохранить</button>
        <button type="button" className="btn btn-secondary" onClick={onBack}>Отмена</button>
      </form>
    </div>
  );
}

export default AddUnit;