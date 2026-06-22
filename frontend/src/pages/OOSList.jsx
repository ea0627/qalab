import { useEffect, useState } from "react";
import { getOOSCases } from "../services/oosService";

function OOSList() {
  const [oosCases, setOosCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadOOSCases() {
      try {
        const cases = await getOOSCases();
        setOosCases(cases);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadOOSCases();
  }, []);

  if (isLoading) {
    return <p className="loading-message">Cargando casos OOS...</p>;
  }

  if (errorMessage) {
    return <p className="error-message">{errorMessage}</p>;
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Investigaciones</p>
          <h2>Casos OOS</h2>
        </div>

        <span className="counter-badge">{oosCases.length} caso(s)</span>
      </div>

      {oosCases.length === 0 ? (
        <div className="empty-state">
          <h3>No hay casos OOS registrados</h3>
          <p>Cuando registres un nuevo caso, aparecerá listado en esta sección.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {oosCases.map((oosCase) => (
            <article className="oos-card" key={oosCase.id}>
              <div className="card-top">
                <span className="case-code">{oosCase.code}</span>
                <span className={`status-badge status-${oosCase.status.toLowerCase()}`}>
                  {oosCase.status}
                </span>
              </div>

              <h3>{oosCase.productName}</h3>

              <div className="case-info">
                <p>
                  <strong>Lote:</strong> {oosCase.batchNumber}
                </p>
                <p>
                  <strong>Área:</strong> {oosCase.area || "No registrada"}
                </p>
                <p>
                  <strong>Ensayo:</strong> {oosCase.testType}
                </p>
                <p>
                  <strong>Método:</strong> {oosCase.method}
                </p>
                <p>
                  <strong>Resultado:</strong> {oosCase.resultObtained}
                </p>
                <p>
                  <strong>Especificación:</strong> {oosCase.specification}
                </p>
                <p>
                  <strong>Microorganismo:</strong>{" "}
                  {oosCase.microorganism || "No aplica"}
                </p>
              </div>

              <p className="case-description">
                {oosCase.description || "Sin descripción registrada."}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default OOSList;