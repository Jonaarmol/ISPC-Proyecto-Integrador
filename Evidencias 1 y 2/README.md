Mercadummy
Autor: Molina, Jonathan

Descripción:
Esta aplicación es un proyecto desarrollado con React y Vite que permite consultar, filtrar y mostrar productos obtenidos desde una API externa. Se aplica Tailwind CSS para estilos modernos y Axios para el fetching de datos. Se manejan estados y efectos y crean componentes reutilizables con renderizado condicional.

Características principales:
* Configurado con Vite y React.

* Estilos aplicados con Tailwind CSS.

* Consumo de API externa (DummyJSON) mediante Axios.

* Visualización dinámica de productos: título, precio e imagen.

* Filtro de búsqueda sensible a mayúsculas/minúsculas.

* Estadísticas dinámicas basadas en los productos filtrados:
    -Producto más caro y más barato (nombre y precio).
    -Cantidad de productos con títulos largos (> 20 caracteres).
    -Precio total de productos filtrados.
    -Promedio de descuento de productos filtrados.

* Componentes funcionales reutilizables (ProductList, StatsPanel).

* Renderizado condicional y manejo de estados para evitar errores cuando no hay datos o la búsqueda no arroja resultados.


Tecnologías utilizadas:
* React
* Vite
* Tailwind CSS
* Axios

Instalación y ejecución:

1. Clonar el repositorio:
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>

2. Instalar dependencias:
npm install

3. Ejecutar el proyecto localmente:
npm run dev
Abrir el navegador en http://localhost:5173 (o la URL que indique la terminal).

Estructura del proyecto:
src/
    components/
        ProductList.jsx — Componente que renderiza la lista de productos.
        StatsPanel.jsx — Componente que muestra las estadísticas.
    App.jsx — Componente principal que maneja estado y lógica de fetching.
    index.css — Configuración e importación de Tailwind CSS.

Uso:
Al abrir la app, se realiza una solicitud GET a la API externa para obtener productos. Los productos se muestran en tarjetas con imagen, título y precio.
Se puede buscar productos por nombre, sin importar mayúsculas o minúsculas.La sección de estadísticas muestra datos calculados dinámicamente según el filtro. Si no hay resultados para la búsqueda, se muestra un mensaje informativo. Estilos y disposición adaptados con Tailwind para una visualización limpia y responsiva. La app maneja escenarios en los que no hay datos o la API no responde correctamente para evitar errores en el renderizado.

