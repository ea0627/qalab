const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export async function getOOSCases() {
  const response = await fetch(`${API_BASE_URL}/oos`);

  if (!response.ok) {
    throw new Error("Error al consultar los casos OOS.");
  }

  const result = await response.json();
  return result.data;
}

export async function createOOSCase(oosCaseData) {
  const response = await fetch(`${API_BASE_URL}/oos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(oosCaseData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Error al crear el caso OOS.");
  }

  return result.data;
}