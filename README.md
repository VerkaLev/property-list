# property-list app

## 1️⃣ Instrucciones para instalar y ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/VerkaLev/property-list.git
cd property-list
```

2. Instala las dependencias:

```bash
npm install
# o
yarn
```

3. Ejecuta el proyecto en modo desarrollo:

```bash
npm start
# o
yarn start
```

- Para Vite: `npm run dev` / `yarn dev`

4. Construcción para producción:

```bash
npm run build
# o
yarn build
```

5. El despliegue (por ejemplo, en Vercel) utiliza automáticamente `npm run build`.

---

## 2️⃣ Estructura del proyecto y decisiones técnicas

```
src/
 ├─ components/
 │   ├─ features/properties/
 │   │   ├─ PropertiesFilter/
 │   │   │   └─ index.jsx
 │   │   │   └─ FilterForm.jsx
 │   │   ├─ PropertiesTable/
 │   │   │   └─ PropertyRow/
 │   │   │       └─ index.jsx
 │   │   │       └─ Desktop.jsx
 │   │   │       └─ Mobile.jsx
 │   │   │   └─ index.jsx
 │   │   │   └─ TableHeader.jsx
 │   │   ├─ PropertyInfo.jsx/
 │   │   │   └─ Caracteristixs.jsx
 │   │   │   └─ Description.jsx
 │   │   │   └─ Features.jsx
 │   │   │   └─ Header.jsx
 │   │   │   └─ Images.jsx
 │   │   │   └─ Nav.jsx
 │   │   │   └─ index.jsx
 │   ├─ layout/Sidebar/
 │   │   ├─ PropertiesFilter/
 │   │   │   └─ index.jsx
 │   │   │   └─ SidebarItem.jsx
 │   │   │   └─ SidebarSection.jsx
 │   ├─ pages
 │   │   │ └─ PropertiesPage.jsx
 │   └─ ui/
 │       └─ AddBtn.jsx
 │       └─ BgCover.jsx
 │       └─ ImgWithFallback.jsx
 │       └─ PageHeader.jsx
 │       └─ Pagination.jsx
 │       └─ SearchInput.jsx
```

**Decisiones y enfoques:**

- Componentes **reutilizables** y **controlados mediante props**.
- Estado de filtros y propiedad seleccionada manejado con **React Context** y el hook personalizado `useProperties`.
- Se utiliza **TailwindCSS** para estilizado rápido y diseño adaptativo.

---

## 3️⃣ Funcionalidades implementadas

- Lista de propiedades con tabla adaptativa.
- Filtros: ciudad, tipo, precio, superficie, fechas.
- Búsqueda por título, dirección y otras propiedades.
- Modal con información detallada de la propiedad seleccionada (`PropertyInfo`).
- Botones para navegar entre propiedades dentro del modal (`PropertyNav`).
- Carga de imágenes con fallback e indicador de carga (`ImgWithFallback`).
- Paginación con número de filas adaptativo según la pantalla.

---

## 4️⃣ Desafíos encontrados y cómo se resolvieron

- **Scroll momentáneo al abrir el modal** → se eliminaron `h-full` y `flex-1` innecesarios, se ajustó correctamente la altura de los contenedores.
- **Imágenes que no se cargaban** → se añadió fallback y estado de carga.
- **Filtros que se reiniciaban al hacer clic en el botón** → componentes controlados y filtrado gestionado a través del formulario.

---

## 5️⃣ Mejoras con más tiempo disponible

- Añadir animaciones al abrir y cerrar el modal.
- Guardar el estado de filtros y búsqueda en la URL para compartir enlaces.
- Conectar con una API real en lugar de usar JSON estático.
- Añadir funcionalidad para agregar nuevas propiedades, lo que requiere un API real.
- Lazy loading de imágenes y optimización de rendimiento para listas grandes.

---

## 6️⃣ Información adicional

- Repositorio público: `https://github.com/VerkaLev/property-list`
- La prueba se completó en un plazo de 2 días.
