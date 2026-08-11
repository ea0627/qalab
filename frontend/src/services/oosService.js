import { getStoredToken } from "./authService";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

function getAuthHeaders() {
  const token = getStoredToken();

  if (!token) {
    throw new Error("Debes iniciar sesión para consultar casos OOS.");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getOOSCases() {
  const response = await fetch(`${API_BASE_URL}/oos`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const result = await response.json();

  if (response.status === 401) {
    throw new Error(
      "Tu sesión no es válida o ha expirado. Inicia sesión nuevamente."
    );
  }

  if (!response.ok) {
    throw new Error(result.message || "Error al consultar los casos OOS.");
  }

  return result.data;
}

export async function createOOSCase(oosCaseData) {
  const response = await fetch(`${API_BASE_URL}/oos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(oosCaseData),
  });

  const result = await response.json();

  if (response.status === 401) {
    throw new Error(
      "Tu sesión no es válida o ha expirado. Inicia sesión nuevamente."
    );
  }

  if (response.status === 403) {
    throw new Error("No tienes permisos para crear casos OOS.");
  }

  if (!response.ok) {
    throw new Error(result.message || "Error al crear el caso OOS.");
  }

  return result.data;
}