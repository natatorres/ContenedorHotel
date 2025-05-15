import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { crearHotel } from '../services/hotelService';
import Notification from '../components/Notification';

export default function IngresarHotel() {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    nit: '',
    num_habitaciones: 1, // valor numérico válido por defecto
  });


  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'num_habitaciones' ? parseInt(value, 10) || '' : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearHotel(formData);
      setNotification({
        open: true,
        message: 'Hotel guardado correctamente',
        severity: 'success',
      });
      setTimeout(() => window.location.reload(), 3000);
    } catch (err) {
      setNotification({
        open: true,
        message: `Error: ${err.message}`,
        severity: 'error',
      });
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', display: 'grid', gap: 2 }}>
        <Typography variant="h5">Ingresar Nuevo Hotel</Typography>
        <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        <TextField label="Dirección" name="direccion" value={formData.direccion} onChange={handleChange} required />
        <TextField label="Ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
        <TextField label="NIT" name="nit" value={formData.nit} onChange={handleChange} required />
        <TextField
          label="Número total de habitaciones"
          name="num_habitaciones"
          type="number"
          value={formData.num_habitaciones}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">Guardar Hotel</Button>
      </Box>

      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={() => setNotification({ ...notification, open: false })}
      />
    </>
  );
}
