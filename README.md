# Mi Casa Soluciones

**Soluciones integrales para tu hogar** · La Libertad – Salinas, Santa Elena, Ecuador

Conjunto de herramientas digitales **gratuitas y sin conexión** para cotizar, calcular materiales y
levantar precios de mercado en obras de construcción, remodelación y mantenimiento. Pensadas para
maestros y técnicos que trabajan desde el teléfono, en la obra, y necesitan enviar una cotización
clara al cliente en minutos.

---

## Las 5 herramientas

| Herramienta | Qué hace |
|---|---|
| 🏠 **Inicio** (`index.html`) | Pantalla de entrada con el acceso a las cinco aplicaciones |
| 📄 **Cotizador** (`cotizador.html`) | Cotiza en minutos y envía por **WhatsApp** o **PDF**. Desglose transparente de **material + mano de obra + gestión y garantía**, lista de "incluye" y "no incluye", IVA, anticipo y **plazo estimado de obra** con imprevistos |
| 🧮 **Calculadora de materiales** (`calculadora_materiales.html`) | 25 actividades en 6 rubros: obra gris, acabados, carpintería, **estructura metálica**, instalaciones y herramientas. Calcula cuánto comprar antes de empezar |
| ✂️ **Despiece y corte** (`despiece_melamina.html`) | Optimiza el corte de tableros de melamina: reparte las piezas con el menor sobrante |
| 📊 **Precios de mercado** (`encuesta_precios.html`) | Encuesta telefónica a proveedores, con análisis por **mediana** y exportación a Excel |

> El catálogo del cotizador incluye **252 partidas** organizadas por rubro (agua, luz, metal,
> diseño, madera, color, gypsum, albañilería con **concreto armado**, materiales, mano de obra y
> servicios), y **107 materiales** con precio de referencia del mercado ecuatoriano.

---

## Qué lo hace distinto

- **Cotización transparente de tres líneas**: el cliente ve cuánto es material, cuánto mano de
  obra y cuánto gestión y garantía. Así se vende por *resultados* y no por "precio por hora".
- **Con base normativa ecuatoriana**: las partidas de estructura metálica citan la **NEC-SE-AC**,
  **NEC-SE-DS** y **AWS D1.1**; las de concreto armado citan la **NEC-SE-HM**, el **ACI 318** y la
  **NEC-SE-GC**. La soldadura se ofrece con soldador calificado y la garantía escrita de **12 meses**
  en mano de obra.
- **Funciona sin internet**: cada aplicación es un solo archivo que se instala en el teléfono como
  cualquier app (PWA) y guarda los datos en el propio dispositivo.
- **Los datos son del maestro**: clientes, cotizaciones y precios quedan guardados en su teléfono,
  con respaldo exportable en un solo toque.

---

## Cómo usarlo

1. Abre **<https://nelsonojeda78.github.io/micasasoluciones/>** desde el teléfono o la computadora.
2. Pulsa la herramienta que necesitas.
3. Para usarla **sin internet**, usa "Agregar a la pantalla de inicio" del navegador: cada
   herramienta queda instalada con su propio ícono.

---

## Cómo publicarlo en tu propia cuenta (gratis)

Todo el sistema son **archivos estáticos**: no necesita servidor ni base de datos.

**Opción A — GitHub Pages (dirección estable para siempre):**

1. Haz un *fork* de este repositorio.
2. Ve a **Settings → Pages** y publica la rama `main` desde la carpeta raíz.
3. En unos minutos tu sistema queda en `https://TUUSUARIO.github.io/micasasoluciones/`.

**Opción B — Netlify Drop (la más rápida):**

1. Entra a <https://app.netlify.com/drop>.
2. Arrastra la carpeta `sistema/` completa.
3. Netlify te da una dirección al instante.

> Los archivos van **todos juntos en la misma carpeta**, con el nombre exacto y sin subcarpetas.

---

## Estructura del repositorio

```
sistema/                     # las 5 aplicaciones + íconos + manifiestos + service worker
  index.html                 # pantalla de entrada
  cotizador.html
  calculadora_materiales.html
  despiece_melamina.html
  encuesta_precios.html
  sw.js                      # service worker (permite usarlas sin internet)
  manifest*.webmanifest      # instalación como app
  icono-*.png                # íconos de cada herramienta
```

---

## Pruebas

El sistema trae pruebas automáticas que se ejecutan con Node.js, sin internet:

```
cd Plan_Mi_Casa_Soluciones
node _herramientas/pruebas/test_cotizador.js
node _herramientas/pruebas/test_calculadora.js
node _herramientas/pruebas/test_despiece.js
node _herramientas/pruebas/test_encuesta.js
node _herramientas/pruebas/revisar_aplicaciones.js
```

**Total: 400 pruebas** (133 cotizador · 160 calculadora · 29 despiece · 78 encuesta) más **201
referencias de cableado**, todas en verde. La verificación incluye navegador real a 360 px y la
comparación del Excel con la aplicación.

---

## Contacto

- **WhatsApp:** [+593 96 330 3081](https://wa.me/593963303081)
- **Correo:** nelsonojedablog@gmail.com
- **Zona:** La Libertad – Salinas, Santa Elena, Ecuador

*Gasfitería · Electricidad · Soldadura y estructura metálica · Remodelación · Pintura · Gypsum ·
Carpintería · Concreto armado*
