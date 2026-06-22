import "./App.css";
import OOSList from "./pages/OOSList";

function App() {
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
          <button className="nav-item active">Casos OOS</button>
          <button className="nav-item">Nuevo OOS</button>
          <button className="nav-item">Dashboard</button>
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

        <OOSList />
      </section>
    </main>
  );
}

export default App;