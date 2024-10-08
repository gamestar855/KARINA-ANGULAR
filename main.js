document.addEventListener('DOMContentLoaded', () => {
  const infoSection = document.getElementById('infoSection');

  // Función para mostrar datos generales con imagen
  const mostrarDatosGenerales = () => {
    infoSection.innerHTML = `
      <h2>Datos Generales de Valledupar</h2>
      <img src="https://elpilon.com.co/wp-content/uploads/2019/12/PANORAMICA-VALLEDUPARJOAQUIN-RAMIREZ-74.jpg" alt="Valledupar" class="infoImage">
      <p><strong>Población:</strong> 500,000 habitantes (aproximadamente)</p>
      <p><strong>Departamento:</strong> Cesar</p>
      <p><strong>Fundación:</strong> 6 de enero de 1550</p>
    `;
  };

  // Función para mostrar lugares turísticos con imágenes
  const mostrarLugaresTuristicos = () => {
    infoSection.innerHTML = `
      <h2>Lugares Turísticos de Valledupar</h2>
      <ul>
        <li>
          <strong>Parque de la Leyenda Vallenata:</strong> 
          Lugar donde se celebra el Festival Vallenato.
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4lTfrSGnQvsd6zGc2-RIOUYKyOIzfcj4SA&s  " alt="Parque de la Leyenda" class="infoImage">
        </li>
        <li>
          <strong>Río Guatapurí:</strong> 
          Conocido por su belleza y significado cultural.
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVDrvdGvQHmpLTfaIyfYBN1JvpZx-WcRP8A&s" alt="Río Guatapurí" class="infoImage">
        </li>
        <li>
          <strong>Santo EcceHomo:</strong> 
          Monumento natural icónico de la región.
          <img src="https://cdn.semanariolacalle.com/2018/03/Santo-Ecce-Homo-el-%E2%80%98tal%C3%B3n%E2%80%99-de-Aquiles-de-los-pol%C3%ADticos-en-el-Cesar-1024x576.jpg" alt="santo eccehomo" class="infoImage">
        </li>
      </ul>
    `;
  };

  // Función para mostrar el clima con imagen
  const mostrarClima = () => {
    infoSection.innerHTML = `
      <h2>Clima en Valledupar</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Plaza_Valledupar.jpg/1200px-Plaza_Valledupar.jpg" alt="Clima de Valledupar" class="infoImage">
      <p><strong>Temperatura:</strong> 30°C (promedio anual)</p>
      <p><strong>Clima:</strong> Tropical con temporada de lluvias y seca.</p>
    `;
  };

  // Eventos para los botones de navegación
  document.getElementById('btnDatos').addEventListener('click', (e) => {
    e.preventDefault();
    mostrarDatosGenerales();
  });

  document.getElementById('btnLugares').addEventListener('click', (e) => {
    e.preventDefault();
    mostrarLugaresTuristicos();
  });

  document.getElementById('btnClima').addEventListener('click', (e) => {
    e.preventDefault();
    mostrarClima();
  });
});
