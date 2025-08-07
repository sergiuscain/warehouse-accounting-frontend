// Components/ResourcesList.js
import { useState, useEffect } from 'react';

function ResourcesList({ onAdd, onArchive, onResourceClick }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('https://localhost:7097/api/Resource/GetByStatus?isActive=true');
        if (!response.ok) throw new Error('Ошибка загрузки ресурсов');
        const data = await response.json();
        setResources(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) return <div className="text-center my-4">Загрузка...</div>;
  if (error) return <div className="alert alert-danger">Ошибка: {error}</div>;

  return (
    <div>
      <h1 className="mb-3">Ресурсы</h1>
      
      <div className="mb-3 d-flex gap-2">
        <button className="btn btn-success" onClick={onAdd}>
          Добавить
        </button>
        <button className="btn btn-warning" onClick={onArchive}>
          К архиву
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Наименование</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourcesList;