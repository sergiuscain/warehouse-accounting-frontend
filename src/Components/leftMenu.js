import { Button, ListGroup } from "react-bootstrap";

function LeftMenu({ setActiveComponent }) {
  return (
    <div className="left-menu-container">
      <div className="menu-header p-3 bg-primary">
        <h2 className="mb-0 text-white">Управление складом</h2>
      </div>
      
      <div className="menu-body p-3">
        <ListGroup variant="flush">
          <ListGroup.Item>Склад</ListGroup.Item>
          <ListGroup.Item>
            <Button onClick={() => setActiveComponent("Balance")}>Баланс</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button onClick={() => setActiveComponent("Receipts")}>Поступления</Button>
          </ListGroup.Item>
          <ListGroup.Item>Справочники</ListGroup.Item>
          <ListGroup.Item>
            <Button onClick={() => setActiveComponent("UnitOfMeasurement")}>Единицы измерения</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button onClick={() => setActiveComponent("Resources")}>Ресурсы</Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default LeftMenu;