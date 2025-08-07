import { useState } from "react";

// Components/AddResource.js
function AddResource({ onBack }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://localhost:7097/api/Resource/Create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, isActive: true })
      });

      if (!response.ok) throw new Error('Ошибка создания ресурса');
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
        <h2 className="card-title mb-4">Добавление ресурса</h2>
        
        {error && <div className="alert alert-danger mb-3">{error}</div>}
        
        <form onSubmit={handleSubmit}>
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
              type="submit" 
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? 'Сохранение...' : 'Сохранить'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onBack}
              disabled={loading}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddResource;