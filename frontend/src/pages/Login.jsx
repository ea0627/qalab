import { useState } from "react";
import { loginUser } from "../services/authService";

const initialForm = {
  email: "",
  password: "",
};

function Login({ onLogin }) {
  const [formData, setFormData] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      const sessionData = await loginUser(formData);

      if (onLogin) {
        onLogin(sessionData.user);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-shell">
      <section className="login-card">
        <div className="login-brand">
          <span className="brand-icon">🧪</span>
          <div>
            <h1>QALab</h1>
            <p>Investigaciones OOS + CAPA</p>
          </div>
        </div>

        <div className="login-header">
          <p className="eyebrow">Acceso regulatorio</p>
          <h2>Iniciar sesión</h2>
          <p>
            Ingresa con tu usuario autorizado para registrar y gestionar casos
            OOS.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@qalab.local"
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </label>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button className="primary-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;