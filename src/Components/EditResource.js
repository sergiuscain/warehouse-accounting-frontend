// Components/EditResource.js
import { useState } from 'react';

function EditResource({ resource, onBack }) {
  const [name, setName] = useState(resource.name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async () => {
  setLoading(true);
  setError(null);

  try {
    // Кодируем новое имя для URL
    const encodedName = encodeURIComponent(name);
    const response = await fetch(
      `https://localhost:7097/api/Resource/ChangeNameById?id=${resource.id}&newResourceName=${encodedName}`,
      {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
        );

        if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Ошибка сохранения');
        }
        
        onBack();
    } catch (err) {
        setError(err.message || 'Не удалось сохранить изменения');
        console.error('Ошибка при сохранении:', err);
    } finally {
        setLoading(false);
    }
    };

  const handleDelete = async () => {
    if (!window.confirm('Вы уверены, что хотите удалить этот ресурс?')) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://localhost:7097/api/Resource/Delete?id=${resource.id}`, 
        {
          method: 'DELETE'
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка удаления');
      }
      onBack();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleArchive = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://localhost:7097/api/Resource/ChangeStatus?id=${resource.id}`, 
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка изменения статуса');
      }
      onBack();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Редактирование ресурса</h2>
        
        {error && <div className="alert alert-danger mb-3">{error}</div>}
        
        <div className="mb-3">
          <label className="form-label">Наименование</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="d-flex gap-2">
          <button 
            className="btn btn-success" 
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Сохранение...' : 'Сохранить'}
          </button>
          <button 
            className="btn btn-danger" 
            onClick={handleDelete}
            disabled={loading}
          >
            Удалить
          </button>
          <button 
            className={`btn ${resource.isActive ? 'btn-warning' : 'btn-info'}`} 
            onClick={handleArchive}
            disabled={loading}
          >
            {resource.isActive ? 'В архив' : 'В Работу'}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={onBack}
            disabled={loading}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditResource;