const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

const TOKEN_KEY = "qalab_token";
const USER_KEY = "qalab_user";

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();

    if (response.status === 401) {
      throw new Error("Correo o contraseña incorrectos.");
    }

    if (!response.ok) {
      throw new Error(
        result.message || "No fue posible iniciar sesión. Inténtalo nuevamente."
      );
    }

    localStorage.setItem(TOKEN_KEY, result.data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(result.data.user));

    return result.data;
  } catch (error) {
    if (error.message === "Correo o contraseña incorrectos.") {
      throw error;
    }

    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "No fue posible conectar con el servidor. Verifica que la API de QALab esté activa e inténtalo nuevamente."
      );
    }

    throw new Error(
      error.message || "No fue posible iniciar sesión. Inténtalo nuevamente."
    );
  }
}

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  const storedUser = localStorage.getItem(USER_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}