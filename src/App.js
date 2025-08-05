import LeftMenu from "./Components/leftMenu";
import { useState } from "react";
import "./CSS/App.css";
import { Row, Col, Container } from "react-bootstrap";
import Balance from "./Components/Balance";
import Receipts from "./Components/Receipts";
import UnitOfMeasurement from "./Components/UnitOfMeasurement";
import Resources from "./Components/Resources";

function App() {
  const [activeComponent, setActiveComponent] = useState("Balance");

  //Компонент для отображения выбранной вкладке.
  const renderComponent = () => {
    switch (activeComponent) {
      case "Balance":
        return <Balance />;
      case "Receipts":
        return <Receipts />;
      case "UnitOfMeasurement":
        return <UnitOfMeasurement />;
      case "Resources":
        return <Resources />;
      default:
        return <Balance />;
    }
  };

  return (
    <div className="App">
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col md={2} className="left-menu-col">
            <LeftMenu setActiveComponent={setActiveComponent} />
          </Col>
          <Col md={10} className="content-col">
            <div className="content-container">
              {renderComponent()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;