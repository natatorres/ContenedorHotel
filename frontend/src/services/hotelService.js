//const API_URL = 'http://localhost:8090/api'; 
const API_URL = import.meta.env.VITE_API_URL;
// src/services/hotelService.js

export async function crearHotel(data) {
  try {
    const response = await fetch(`${API_URL}/hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Si necesitas token: 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Error al guardar el hotel');
    }

    return result;
  } catch (error) {
    throw error;
  }
}


export async function getHoteles() {
  try {
    console.log('🔥 getHoteles ejecutado');
    const response = await fetch(`${API_URL}/hoteles`);
    console.log('📡 Respuesta cruda:', response);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Error al obtener hoteles');
    }

    console.log('✅ Datos recibidos:', result);
    return result;
  } catch (error) {
    console.error('❌ Error real:', error);
    throw error;
  }
}

