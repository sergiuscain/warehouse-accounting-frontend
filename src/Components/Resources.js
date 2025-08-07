// Components/Resources.js
import { useState, useEffect } from 'react';
import ResourcesList from './ResourcesList';
import EditResource from './EditResource';
import ArchivedResources from './ArchivedResources';
import AddResource from './AddResource';

function Resources() {
  const [view, setView] = useState('list');
  const [selectedResource, setSelectedResource] = useState(null);

  const handleBackToList = () => {
    setView('list');
  };

  return (
    <div className="container mt-3">
      {view === 'list' && (
        <ResourcesList 
          onAdd={() => setView('add')}
          onArchive={() => setView('archive')}
          onResourceClick={(resource) => {
            setSelectedResource(resource);
            setView('edit');
          }}
        />
      )}
      
      {view === 'add' && (
        <AddResource onBack={handleBackToList} />
      )}
      
      {view === 'edit' && selectedResource && (
        <EditResource 
          resource={selectedResource} 
          onBack={handleBackToList}
        />
      )}
      
      {view === 'archive' && (
        <ArchivedResources 
          onBack={handleBackToList}
          onResourceClick={(resource) => {
            setSelectedResource(resource);
            setView('edit');
          }}
        />
      )}
    </div>
  );
}

export default Resources;