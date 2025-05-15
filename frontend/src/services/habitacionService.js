//const API_URL = 'http://localhost:8090/api'; 
const API_URL = import.meta.env.VITE_API_URL;

export async function crearHabitaciones(hotelId, data) {
  try {
    const response = await fetch(`${API_URL}/hotels/${hotelId}/habitaciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Error al guardar habitaciones');
    }

    return result;
  } catch (error) {
    console.error('❌ Error real al crear habitación:', error);
    throw error;
  }
}
