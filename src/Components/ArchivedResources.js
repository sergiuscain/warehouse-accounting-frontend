// Components/ArchivedResources.js
import { useState, useEffect } from 'react';

function ArchivedResources({ onBack, onResourceClick }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArchivedResources = async () => {
      try {
        const response = await fetch('https://localhost:7097/api/Resource/GetByStatus?isActive=false');
        if (!response.ok) throw new Error('Ошибка загрузки архива');
        const data = await response.json();
        setResources(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArchivedResources();
  }, []);

  if (loading) return <div className="text-center my-4">Загрузка архива...</div>;
  if (error) return <div className="alert alert-danger">Ошибка: {error}</div>;

  return (
    <div>
      <h1 className="mb-3">Архивные ресурсы</h1>
      
      {/* Кнопка "К рабочим" на отдельной строке под заголовком */}
      <div className="mb-3">
        <button className="btn btn-primary" onClick={onBack}>
          К рабочим
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Наименование</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {resources.map(resource => (
              <tr 
                key={resource.id} 
                className="cursor-pointer"
                onClick={() => onResourceClick(resource)}
              >
                <td>{resource.name}</td>
                <td>
                  <span className="badge bg-secondary">В архиве</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArchivedResources;