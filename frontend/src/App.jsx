import { useState } from "react";
import OOSList from "./pages/OOSList";
import NewOOSCase from "./pages/NewOOSCase";

function App() {
  const [currentPage, setCurrentPage] = useState("oos-list");
  const [refreshKey, setRefreshKey] = useState(0);

  function handleCaseCreated() {
    setRefreshKey((currentKey) => currentKey + 1);
    setCurrentPage("oos-list");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">🧪</span>
          <div>
            <h1>QALab</h1>
            <p>OOS + CAPA</p>
          </div>
        </div>

        <nav className="nav-menu">
          <button
            className={`nav-item ${currentPage === "oos-list" ? "active" : ""}`}
            onClick={() => setCurrentPage("oos-list")}
          >
            Casos OOS
          </button>

          <button
            className={`nav-item ${currentPage === "new-oos" ? "active" : ""}`}
            onClick={() => setCurrentPage("new-oos")}
          >
            Nuevo OOS
          </button>

          <button
            className={`nav-item ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={() => setCurrentPage("dashboard")}
          >
            Dashboard
          </button>
        </nav>
      </aside>

      <section className="content">
        <header className="hero">
          <p className="eyebrow">MVP regulatorio funcional</p>
          <h2>Asistente inteligente para investigaciones OOS y CAPA</h2>
          <p>
            Plataforma para registrar, investigar y documentar resultados fuera
            de especificación en laboratorio.
          </p>
        </header>

        {currentPage === "oos-list" && <OOSList key={refreshKey} />}

        {currentPage === "new-oos" && (
          <NewOOSCase onCaseCreated={handleCaseCreated} />
        )}

        {currentPage === "dashboard" && (
          <section className="page-section">
            <div className="section-header">
              <div>
                <p className="eyebrow">Indicadores</p>
                <h2>Dashboard</h2>
              </div>
            </div>

            <div className="empty-state">
              <h3>Dashboard en construcción</h3>
              <p>
                En esta sección se visualizarán indicadores de OOS abiertos,
                cerrados, CAPA activas y CAPA vencidas.
              </p>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;