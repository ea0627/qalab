import { useState } from "react";
import { createOOSCase } from "../services/oosService";

const initialForm = {
  productName: "",
  batchNumber: "",
  area: "",
  testType: "",
  method: "",
  resultObtained: "",
  specification: "",
  microorganism: "",
  description: "",
};

function NewOOSCase({ onCaseCreated }) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      await createOOSCase(formData);

      setSuccessMessage("Caso OOS creado correctamente.");
      setFormData(initialForm);

      if (onCaseCreated) {
        onCaseCreated();
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Nuevo registro</p>
          <h2>Crear caso OOS</h2>
        </div>
      </div>

      <form className="oos-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Producto *
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              placeholder="Ej: Producto A"
            />
          </label>

          <label>
            Lote *
            <input
              type="text"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleChange}
              required
              placeholder="Ej: L-2026-001"
            />
          </label>

          <label>
            Área
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Ej: Microbiología"
            />
          </label>

          <label>
            Tipo de ensayo *
            <input
              type="text"
              name="testType"
              value={formData.testType}
              onChange={handleChange}
              required
              placeholder="Ej: Ensayo microbiológico"
            />
          </label>

          <label>
            Método *
            <input
              type="text"
              name="method"
              value={formData.method}
              onChange={handleChange}
              required
              placeholder="Ej: Recuento microbiológico"
            />
          </label>

          <label>
            Microorganismo
            <input
              type="text"
              name="microorganism"
              value={formData.microorganism}
              onChange={handleChange}
              placeholder="Ej: Burkholderia cepacia"
            />
          </label>

          <label>
            Resultado obtenido *
            <input
              type="text"
              name="resultObtained"
              value={formData.resultObtained}
              onChange={handleChange}
              required
              placeholder="Ej: Presencia"
            />
          </label>

          <label>
            Especificación *
            <input
              type="text"
              name="specification"
              value={formData.specification}
              onChange={handleChange}
              required
              placeholder="Ej: Ausencia"
            />
          </label>
        </div>

        <label className="full-width">
          Descripción
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe brevemente el evento OOS detectado."
          />
        </label>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-actions">
          <button className="primary-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Guardando..." : "Crear caso OOS"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewOOSCase;