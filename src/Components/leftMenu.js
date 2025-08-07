function LeftMenu({ setActiveComponent }) {
  return (
    <div className="d-flex flex-column leftMenu h-100">
      <div className="menu-header p-3 menu-top-text-block">
        <h2 className="menu-top-text">Управление складом</h2>
      </div>
      
      <div className="menu-body p-3 d-flex flex-column gap-3 bg-transparent border-0">
        <div className="d-flex flex-column gap-2">
          <h2 className="text-white">Склад</h2>
          <button 
            className="btn btn-primary w-100 text-start bg-transparent border-0 p-2 hover-darken" 
            onClick={() => setActiveComponent("Balance")}>
              Баланс
              </button>
          <button 
            className="btn btn-primary w-100 text-start bg-transparent border-0 p-2 hover-darken" 
            onClick={() => setActiveComponent("Receipts")}>
            Поступления
          </button>
        </div>
        
        <div className="d-flex flex-column gap-2">
          <h2 className="text-white">Справочники</h2>
          <button 
            className="btn btn-primary w-100 text-start bg-transparent border-0 p-2 hover-darken" 
            onClick={() => setActiveComponent("UnitOfMeasurement")}>
            Единицы измерения
          </button>
          <button 
            className="btn btn-primary w-100 text-start bg-transparent border-0 p-2 hover-darken" 
            onClick={() => setActiveComponent("Resources")}>
            Ресурсы
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;