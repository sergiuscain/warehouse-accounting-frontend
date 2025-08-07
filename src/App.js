import LeftMenu from "./Components/leftMenu";
import { useState } from "react";
import "./CSS/App.css";
import Balance from "./Components/Balance";
import Receipts from "./Components/Receipts";
import UnitOfMeasurement from "./Components/Units/UnitOfMeasurement";
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
      <div className="container-fluid">
        <div className="row">
          {/* Левое меню - фиксированной ширины */}
          <div className="col-md-3 col-lg-2 p-0">
            <LeftMenu setActiveComponent={setActiveComponent} />
          </div>
          
          {/* Основной контент - занимает оставшееся пространство */}
          <div className=" col-lg-10 p-2">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;