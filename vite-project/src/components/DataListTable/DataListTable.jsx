import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from "react";
import "ag-grid-enterprise";
import { Data } from "../../assets/Logos.jsx"; // Asegúrate de que estas importaciones sean correctas
import { FaSearch } from "react-icons/fa";

const Section = () => {
  const styles = {
    backgroundColor: "#6C63FF",
  };

  const handleClickData = () => {
    window.scrollTo({ behavior: "smooth", top: 567 });
  };

  const handleClickBars = () => {
    window.scrollTo({ behavior: "smooth", top: 1284 });
  };
  
  return (
    <section className="section columns is-desktop mb-5">
      <div className="column is-align-content-center">
        <h1 className="title is-size-1">Soon</h1>
        <h2 className="subtitle">you can see your data here</h2>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          sequi ducimus at ipsa optio quia aliquid voluptate magnam obcaecati,
          saepe nobis quis maxime. Fugiat deleniti perferendis sit distinctio
          facilis maxime..
        </p>
        <div className="buttons">
          <button
            className="button is-dark"
            style={styles}
            onClick={handleClickData}
          >
            Ver Datos
          </button>
          <button className="button" onClick={handleClickBars}>
            Ver Graficos
          </button>
        </div>
      </div>
      <div className="column has-text-centered is-align-content-center">
        <Data width={350} height={350}></Data>
      </div>
    </section>
  );
};

const Input = ({ onSearch }) => { // CAMBIO: Agregada la prop onSearch
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado
    const table = e.target.elements.table.value; // CAMBIO: Obtiene el valor del input
    console.log(table); // CAMBIO: Imprime el valor del input
    onSearch(table); // CAMBIO: Llama a la función onSearch con el valor
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="label">Tablas</label>
        <input type="text" className="input" name="table" />
        <div className="buttons mt-3 mb-4">
          <button className="button is-success is-dark" type="submit">
            <span className="icon">
              <FaSearch />
            </span>
            <span>Buscar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export const DataTableQuery = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    {field: "id_articulo",filter: true,floatingFilter: true,flex: 2,editable: true},
    {field: "id_categoria",filter: true,floatingFilter: true,rowGroup: true,hide: true},
    { field: "descripcion", filter: true, floatingFilter: true},
    { field: "codigo", filter: true, floatingFilter: true},
    { field: "fecha_compra", filter: true, floatingFilter: true},
    {field: "avaluo",filter: true,floatingFilter: true,valueFormatter: "'$' + value.toLocaleString()",},
  ]);

  const mostrarEnCosola = () => {
    console.log(setRowData)
  }

  const fetchData = async (table) => { 
    const response = await fetch(`http://localhost:3000/api/datos?table=${table}`);
    const data = await response.json();
    setRowData(data);
  };

  const [themeGrid, setThemeGrid] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  return (
    <div className="container mb-6">
      <Section />
      <Input onSearch={fetchData} /> {/* CAMBIO: Pasamos fetchData como prop */}
      <div
        className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"}
        style={{ height: 500 }}
        id="grid"
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="buttons mt-4">
        <button
          onClick={() => gridRef.current.api.exportDataAsCsv()} // Simplificado
          className="button is-primary is-outlined"
        >
          Exportar a CSV
        </button>
        <button onClick={() => window.print()} className="button is-info is-inverted"> {/* Simplificado */}
          Imprimir
        </button>
        <button className="button" onClick={mostrarEnCosola}>Mostrar en consola</button>

      </div>
    </div>
  );
};
