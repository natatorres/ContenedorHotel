import React, { useState, useEffect } from 'react';
import { Box, TextField, MenuItem, Button, Typography } from '@mui/material';
import { crearHabitaciones } from '../services/habitacionService';
import { getHoteles } from '../services/hotelService';
import Notification from '../components/Notification';

const tipos = ['ESTANDAR', 'JUNIOR', 'SUITE'];
const acomodaciones = {
  ESTANDAR: ['SENCILLA', 'DOBLE'],
  JUNIOR: ['TRIPLE', 'CUADRUPLE'],
  SUITE: ['SENCILLA', 'DOBLE', 'TRIPLE'],
};

export default function IngresarHabitaciones() {
  const [hoteles, setHoteles] = useState([]);
  const [hotelId, setHotelId] = useState('');
  const [tipo, setTipo] = useState('');
  const [acomodacion, setAcomodacion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const data = await getHoteles();
        setHoteles(data);
      } catch (err) {
        setNotification({
          open: true,
          message: `Error al cargar hoteles: ${err.message}`,
          severity: 'error',
        });
      }
    };

    fetchHoteles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      tipo,
      acomodacion,
      cantidad: parseInt(cantidad, 10),
    };

    try {
      await crearHabitaciones(hotelId, payload);
      setNotification({
        open: true,
        message: 'Habitaciones guardadas correctamente',
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
        <Typography variant="h5">Configurar Habitaciones</Typography>

        <TextField
          select
          label="Hotel"
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
          required
        >
          {hoteles.map((hotel) => (
            <MenuItem key={hotel.id} value={hotel.id}>
              {hotel.nombre}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Tipo de habitación"
          value={tipo}
          onChange={(e) => {
            const selectedTipo = e.target.value.toUpperCase();
            setTipo(selectedTipo);
            setAcomodacion('');
          }}
          required
        >
          {tipos.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Acomodación"
          value={acomodacion}
          onChange={(e) => setAcomodacion(e.target.value)}
          disabled={!tipo}
          required
        >
          {tipo &&
            acomodaciones[tipo]?.map((a) => (
              <MenuItem key={a} value={a}>
                {a}
              </MenuItem>
            ))}
        </TextField>

        <TextField
          label="Cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          inputProps={{ min: 1 }}
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Guardar Habitaciones
        </Button>
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
