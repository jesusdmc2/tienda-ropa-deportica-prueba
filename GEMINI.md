# Apex Performance - Contexto del Proyecto

## Descripción General del Proyecto
**Apex Performance** es una plataforma de comercio electrónico de equipamiento deportivo de alto rendimiento. Es una aplicación web moderna construida con **Next.js 16 (React 19)**, aprovechando **Tailwind CSS 4** para una interfaz de usuario sofisticada con tema oscuro. La aplicación está diseñada con un enfoque prioritario para móviles (mobile-first), contando con una barra de navegación inferior y una estética visual limpia y de alto impacto.

### Tecnologías Clave
- **Framework:** Next.js 16.1.6 (App Router)
- **Librería:** React 19.2.3
- **Estilos:** Tailwind CSS 4 (vía `@tailwindcss/postcss`)
- **Lenguaje:** TypeScript
- **Iconos:** Material Symbols Outlined
- **Fuentes:** Space Grotesk, Lexend, Plus Jakarta Sans, Noto Sans
- **Verificación:** Playwright (script de Python)

## Arquitectura
El proyecto sigue la estructura estándar de Next.js App Router:
- `src/app/`: Contiene todas las rutas y layouts (ej. `/home`, `/cart`, `/product/[id]`, `/profile`).
- `src/components/ui/`: Contiene componentes de UI reutilizables como `Button`, `Input`, `Header`, `BottomNav` y `ProductCard`.
- `public/`: Activos estáticos como SVGs e imágenes.
- `verify_pages.py`: Una utilidad de Python para automatizar la verificación visual de todas las rutas clave usando Playwright.

## Construcción y Ejecución

### Desarrollo
Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

### Producción
Construye e inicia el servidor de producción:
```bash
npm run build
npm run start
```

### Linting
Ejecuta ESLint para comprobar la calidad del código:
```bash
npm run lint
```

### Verificación Visual
Para tomar capturas de pantalla de todas las páginas para una auditoría visual (requiere Python y Playwright):
```bash
# Asegúrate de que playwright esté instalado: pip install playwright && playwright install
python verify_pages.py
```

## Convenciones de Desarrollo

### Estilos e Interfaz de Usuario (UI)
- **Modo Oscuro:** La aplicación está forzada al modo oscuro por defecto (`className="dark"` en `RootLayout`).
- **Colores:** Utiliza una paleta de colores personalizada definida en `globals.css` (primary, background-dark, background-light).
- **Iconos:** Usa `<span className="material-symbols-outlined">icon_name</span>` (nombre_icono).
- **Responsivo:** Prioriza los diseños móviles asegurando la compatibilidad con escritorio.

### Estándares de Codificación
- **TypeScript:** Usa tipado estricto para componentes y props.
- **Componentes:** Favorece los componentes funcionales con características estándar de React 19.
- **Enrutamiento:** Usa `Link` de `next/link` para la navegación interna para mantener el comportamiento de SPA (Single Page Application).

### Pruebas
- Las comprobaciones visuales automatizadas deben ejecutarse usando `verify_pages.py` tras cambios significativos en la interfaz para asegurar la consistencia en todas las rutas.
