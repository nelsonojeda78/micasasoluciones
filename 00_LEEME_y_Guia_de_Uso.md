# MI CASA SOLUCIONES — PLAN DE NEGOCIO COMPLETO
## Guía de uso: qué es cada documento y en qué orden leerlo

**Preparado para:** Nelson Patricio Ojeda Pantoja (48 años, 38 años de oficio)
**Zona de operación:** La Libertad y Salinas, provincia de Santa Elena, Ecuador
**Fecha:** versión 1.0
**Decisiones ya tomadas:** capital de arranque USD 500–2.000 · ferretería por catálogo con entrega
(sin local físico) · formalización con RUC y facturación electrónica desde el inicio

---

## Los documentos, en orden de lectura

| # | Documento | Qué contiene | Léelo si... |
|---|---|---|---|
| **00** | `00_LEEME_y_Guia_de_Uso.md` | Esta guía | Empiezas |
| **01** | `01_Perfil_de_Empresa_y_Branding.md` | Quién es la empresa: visión, misión, valores, público, arquitectura de marca (las 7 líneas), análisis y elección del logo, paleta, tipografía, tono de voz y datos legales | Quieres entender qué estás construyendo |
| **02** | `02_Plan_de_Inicio_y_Captacion_de_Clientes.md` | **El plan de acción de 90 días**: cómo generar confianza sin contactos, los 3 trabajos fundadores, las 100 conversaciones, las alianzas, los 7 canales, los indicadores y el presupuesto de arranque | Vas a empezar a buscar clientes |
| **03** | `03_Catalogo_de_Servicios_y_Precios.md` | Las 6 especialidades + ferretería, con qué incluye y qué no incluye cada servicio, el sistema de precios basado en la tabla oficial de salarios 2026, el APU simplificado, las políticas de cobro y la encuesta para fijar tus precios | Vas a cotizar o publicar precios |
| **04** | `04_Mercado_Networking_y_Prospectos.md` | **La lista real de empresas** de La Libertad, Salinas y Santa Elena (ferreterías, proveedores, hoteles, condominios, inmobiliarias, sector público), los gremios, la formalización paso a paso y el plan de contacto de 30 días | Vas a hacer networking |
| **05** | `05_Plantillas_Comerciales.md` | Todo el material listo para copiar y pegar: perfil profesional de una página, 10 mensajes de WhatsApp, guion de visita, cotización, contrato, garantía, acta de entrega, textos de redes y propuestas de alianza | Necesitas el texto exacto ahora |
| **06** | `06_Finanzas_y_Metas.md` | Costos fijos, punto de equilibrio, uso del capital, metas por trimestre, reparto de cada dólar, control semanal y riesgos financieros | Quieres saber si el negocio da |
| — | `branding/Manual_de_Marca.md` | Cómo se aplica la marca: logo, colores, tipografía, uniforme, vehículo, tarjeta, sello y errores a evitar | Vas a imprimir o publicar algo |
| — | `plantillas/` | Archivos de trabajo: calculadora de precios, base de clientes (CRM), encuesta de precios y registro de ingresos y gastos | Vas a trabajar día a día |
| — | `investigacion/` | Los datos crudos recopilados (fichas de empresas con su fuente) | Quieres verificar un dato |

---

## Los 5 logos: cuál usar y dónde

| Archivo original | Nombre | Uso |
|---|---|---|
| `1.svg` | Logotipo extendido "techos" | Fachadas, vallas, banners grandes |
| **`2.svg` / `2(1).svg`** | **Emblema casa + visto bueno — MARCA PRINCIPAL** | Avatar de WhatsApp y Google, sello, tarjetas, uniforme, vehículo |
| `3.svg` / `3(1).svg` | Rodillo de pintura | Solo para la línea de pintura (sobre fondo ámbar: el "Mi Casa" es blanco) |

Los archivos ya listos para usar están en `branding/assets/` (PNG en los tamaños que se necesitan) y
los vectores maestros en `branding/logos/`.

---

## Cómo usar este plan en la práctica: la primera semana

**Día 1** — Lee el documento 02 (plan de inicio) y el 01 (perfil). Subraya lo que puedes hacer ya.
**Día 2** — Reescribe tu presentación con el perfil de una página (documento 05, sección 1).
**Día 3** — Crea el WhatsApp Business con el avatar de `branding/assets/` y el Perfil de Empresa en
Google con las fotos de tus trabajos anteriores.
**Día 4** — Manda a imprimir 100 tarjetas y los volantes; encarga la camiseta y el carnet.
**Día 5** — Recorre las primeras 5 ferreterías de la lista del documento 04 con las tarjetas y el
guion de 60 segundos.
**Día 6** — Publica el primer antes/después (aunque sea un trabajo viejo, con permiso).
**Día 7** — Revisa los 8 indicadores del documento 02 y planifica la semana siguiente.

---

## Las tres cosas que, si se cumplen, hacen que esto funcione

1. **Nunca entregar un trabajo sin presupuesto escrito, garantía firmada y factura.** Eso es la marca.
2. **Pedir una reseña en Google después de cada trabajo.** Es el activo que trae clientes mientras
   duermes.
3. **Conseguir contratos mensuales** (condominios, hoteles, arriendos) antes de acumular trabajos
   sueltos. La recurrencia es lo que convierte un oficio en una empresa.

---

## Advertencias de honestidad sobre este plan

- Los **precios de lista** del documento 03 son un **punto de partida calculado**, no precios de
  mercado verificados: hay que ajustarlos con la encuesta de precios de la sección 6 de ese
  documento, hecha en La Libertad y Salinas.
- Los **datos de empresas** del documento 04 provienen de directorios públicos y se indica su fuente
  y su nivel de confianza. Algunos teléfonos u horarios pueden haber cambiado: hay que verificar en
  campo antes de confiar en ellos.
- Las **proyecciones financieras** del documento 06 son estimaciones de planificación, no promesas.
- Los requisitos legales (RUC, RIMPE, SERCOP, permisos municipales, certificaciones del oficio)
  citan fuentes oficiales, pero **conviene confirmar el trámite vigente** en el SRI, el municipio
  correspondiente y el SERCOP antes de iniciarlo.

---

*Carpeta del proyecto: `Plan_Mi_Casa_Soluciones/` — dentro de la carpeta general "Mi Casa Soluciones".*

---

## Política de trabajo del proyecto (acordada)

**Cada cambio que se haga en el sistema sigue este orden:**

1. Se modifica el archivo **local** en la carpeta `sistema/`.
2. Se ejecutan las **pruebas automáticas** (ver abajo) y las tres aplicaciones se revisan.
3. Si todo pasa, se **sube al repositorio** `github.com/nelsonojeda78/micasasoluciones`, que es el
   respaldo en línea y lo que publica la web.
4. Se comprueba que el archivo publicado sea **idéntico** al local (misma huella) y que la página
   responda.

**Repositorio:** `https://github.com/nelsonojeda78/micasasoluciones`
**Web publicada:** `https://nelsonojeda78.github.io/micasasoluciones/`

## Herramientas del proyecto (carpeta `_herramientas/`)

| Archivo | Para qué sirve |
|---|---|
| `_herramientas/pruebas/test_cotizador.js` | 95 pruebas del cotizador, del modelo de precios, del rubro de carpintería, de los 107 materiales y de la actualización del catálogo en teléfonos que ya lo tenían guardado |
| `_herramientas/pruebas/test_calculadora.js` | 160 pruebas de las 25 actividades de materiales, incluidas las 6 de carpintería, las 4 de **Mi Casa Metal** y la agrupación por rubro |
| `_herramientas/pruebas/test_despiece.js` | 29 pruebas del optimizador de corte y del lector de CSV |
| `_herramientas/pruebas/test_encuesta.js` | 78 pruebas de la encuesta de precios (estadísticas, ranking, exportación, el formulario que pide solo lo que falta y el filtro de empresas del rubro) |
| `_herramientas/pruebas/revisar_aplicaciones.js` | 199 comprobaciones de cableado de las cinco páginas, y que el logo de cada aplicación lleve a la pantalla principal |
| `_herramientas/pruebas/README.md` | Cómo ejecutar las pruebas |
| `_herramientas/build_docs.py` | Vuelve a generar el dossier en Word y PDF desde los documentos |

**Cómo se ejecutan las pruebas** (solo hace falta Node.js, no hay que instalar nada):

```
cd Plan_Mi_Casa_Soluciones
node _herramientas/pruebas/test_cotizador.js
node _herramientas/pruebas/test_calculadora.js
node _herramientas/pruebas/test_despiece.js
node _herramientas/pruebas/test_encuesta.js
node _herramientas/pruebas/revisar_aplicaciones.js
```

Las pruebas leen las aplicaciones directamente de `sistema/`, así que **siempre prueban la versión
que está en disco**. Total actual: **362 comprobaciones** más 199 de cableado.

---

# AMPLIACIÓN v1.1 — Sistema digital y cálculo de materiales

Se agregaron tres aplicaciones de trabajo, dos libros de Excel compatibles con Linux y tres documentos
nuevos.

## Documentos nuevos

| # | Documento | Qué contiene |
|---|---|---|
| **07** | `07_Sistema_de_Calculo_de_Materiales.md` | **La memoria de cálculo**: todas las fórmulas de metrado y dosificación con **criterios adaptados a Ecuador** (cemento en kilogramos, precios en dólares, equivalencias locales), con ejemplos verificados y las pruebas ejecutadas |
| **08** | `08_Sistemas_Digitales_Guia_de_Uso.md` | **Cómo usar y publicar las aplicaciones**: el cotizador paso a paso, la calculadora, el despiece, cómo subirlas gratis a internet, cómo instalarlas en el teléfono, respaldos, pruebas y la respuesta sobre Ingetrazo y OpenCutList |
| — | `investigacion/05_ingetrazo_opencutlist.md` | El informe técnico completo sobre Ingetrazo y OpenCutList, con todas las fuentes |

## Aplicaciones (carpeta `sistema/`)

| Archivo | Para qué sirve |
|---|---|
| `index.html` | **Página de entrada**: la que se abre en la dirección publicada, con los tres botones. Es el archivo que evita el error 404 en GitHub Pages |
| `cotizador.html` | **Cotizar en minutos** desde el teléfono y enviar por WhatsApp o como PDF |
| `calculadora_materiales.html` | Calcular **cuánto material comprar** en **25 actividades agrupadas en 6 rubros** (Obra gris, Acabados, **Carpintería**, **Mi Casa Metal**, Instalaciones y Herramientas) |
| `despiece_melamina.html` | **Despiece de melamina y plan de corte óptimo** (reemplazo de MelaminaPRO en Linux) |
| `encuesta_precios.html` | **Precios de mercado**: encuesta telefónica a ferreterías y empresas, con los **60 contactos del rubro** cargados (solo venta de materiales de construcción), base de datos de precios y análisis. El formulario de la llamada pide **solo lo que falta** y trae las **7 preguntas del guión** |
| `manifest*.webmanifest`, `sw.js`, `icono-*.png` | Permiten instalar **cada herramienta por separado** en el teléfono (con su propio ícono) y usarlas sin internet |

## Plantillas nuevas (carpeta `plantillas/`)

| Archivo | Para qué sirve |
|---|---|
| `Calculadora_Materiales_MiCasaSoluciones.xlsx` | Las 25 actividades (26 hojas) con fórmulas vivas, incluida la tabla de los 59 perfiles metálicos, compatible con LibreOffice Calc |
| `Despiece_Melamina_Compatible_Linux.xlsx` | Despiece con fórmulas, resumen por material y comparador de proveedores |

## Diseño (carpeta `branding/svg/`)

Todos los diseños de marca ahora también en **SVG editable** (logo, emblema, tarjeta con código QR,
sello, avatar, portada, plantilla de antes y después, hoja membretada y paleta).
Ver la *Actualización v1.1* al final del `Manual_de_Marca.md`.

## Qué hacer esta semana con lo nuevo

1. **Publica las tres aplicaciones** siguiendo el punto 6 del documento 08 (Netlify Drop o GitHub
   Pages). Sube los **17 archivos** de la carpeta `sistema`, incluido **`index.html`**, y agrégalas a la
   pantalla de inicio del teléfono.
2. **Haz una cotización de prueba** completa en tu teléfono, con un cliente real imaginario, y
   envíatela a ti mismo por WhatsApp. Mide cuánto tardas: debe ser menos de 5 minutos.
3. **Escanea el QR** de la tarjeta antes de mandarla a imprimir.
4. **Ajusta el catálogo** de precios del cotizador con los precios reales de La Libertad y Salinas
   (usa la encuesta de precios del documento 03).
5. **Haz un despiece de prueba** de un mueble que ya hayas hecho y compara las planchas que calcula con
   las que realmente compraste. Ese es el mejor control de calidad del sistema.

---

# AMPLIACIÓN v1.2 — Agente de atención al cliente

Se agregó la carpeta **`agente_atencion/`**: un paquete completo para poner a funcionar un
**asistente virtual de atención al cliente** que responde a los prospectos con lenguaje humano,
solo con lo que está estipulado en el plan, y que **avisa a Nelson** cada vez que hay dinero o una
decisión de por medio.

## Documentos nuevos (carpeta `agente_atencion/`)

| # | Documento | Qué contiene |
|---|---|---|
| **00** | `00_LEEME_y_Como_usarlo.md` | **Cómo usarlo fuera de esta interfaz**: las cuatro formas de ponerlo a trabajar, paso a paso y sin conocimientos técnicos |
| **01** | `01_Prompt_del_Agente.md` | Las instrucciones del agente (el "prompt") listo para copiar y pegar: identidad, lo que sí puede hacer, las 12 reglas duras de lo que nunca debe hacer, y el formato de aviso |
| **02** | `02_Base_de_Conocimiento.md` | Lo único que el agente puede decir: la empresa, las 7 líneas, las políticas, la garantía y los **8 precios públicos autorizados** |
| **03** | `03_Preguntas_Frecuentes.md` | Las respuestas exactas a las dudas más comunes y **8 conversaciones modelo** que enseñan cuándo responde solo y cuándo avisa |
| **04** | `04_Avisos_a_Nelson.md` | El protocolo de escalamiento: qué se avisa, con qué prioridad y con qué formato |
| **05** | `05_Pruebas_de_Aceptacion.md` | Las **25 pruebas** obligatorias antes de publicar el agente (más 9 recomendadas) |
| **06** | `06_Alojamiento_y_Costos.md` | **La cotización**: dónde alojarlo, cuánto cuesta cada opción y cuál es la más barata |
| **07** | `07_Datos_Pendientes_Antes_de_Publicar.md` | Lo que falta completar antes de publicar (RUC, cuenta bancaria, precios definitivos…) |
| — | `agente_config.json` | La misma información en formato de máquina, para automatizar o entregar a un desarrollador |

## Implementación gratuita (carpeta `agente_atencion/implementacion/`)

| Archivo | Para qué sirve |
|---|---|
| `worker.js` | El servidor del agente, listo para pegar en Cloudflare Workers (plan gratuito). **Se genera solo**: no se edita a mano |
| `construir_worker.py` | Vuelve a generar `worker.js` desde los documentos 01 a 04, para que exista una sola fuente de verdad |
| `widget.html` | La ventana de chat para la página web, con los colores y la marca |
| `probar_worker.mjs` | **40 pruebas automáticas** del servidor, sin internet y sin claves: `node probar_worker.mjs` |
| `README_Implementacion_Gratuita.md` | El paso a paso para publicarlo gratis |

## Los tres principios del agente

1. **No inventa.** Solo responde con lo que está en su base de conocimiento. Si no está, dice
   "se lo consulto a Nelson".
2. **No sale del catálogo.** No ofrece ningún servicio que no esté en las 7 líneas, y solo dice los
   **8 precios públicos** autorizados.
3. **No decide.** Todo lo que tenga que ver con dinero, fechas o compromisos se detiene y se
   convierte en un **aviso para Nelson**, con tipo, prioridad y la cita textual de lo que pidió el
   cliente.
