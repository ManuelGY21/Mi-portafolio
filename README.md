# Portafolio de Manuel Gonzales

Sitio web personal centrado en soporte TI, infraestructura y ciberseguridad.

## Desarrollo local

No requiere instalación ni compilación. Para probarlo con un servidor local:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Estructura

- `index.html`: contenido, metadatos y estructura semántica.
- `script.js`: traducciones, navegación, certificados y formulario.
- `styles/`: estilos base, por sección y responsive.
- `images/`: imágenes, certificados y documentos.

El formulario utiliza EmailJS desde su CDN. La clave pública debe estar restringida al dominio publicado desde el panel de EmailJS.

## Publicación

El sitio está preparado para GitHub Pages en:

`https://manuelgy21.github.io/Mi-portafolio/`
