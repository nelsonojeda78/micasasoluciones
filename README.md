# Pruebas automáticas del sistema

Estas pruebas leen **directamente** las aplicaciones de la carpeta `sistema/`, así que siempre
prueban la versión que está en disco. No hace falta internet ni instalar nada (solo Node.js).

## Cómo se ejecutan

```
cd Plan_Mi_Casa_Soluciones
node _herramientas/pruebas/test_cotizador.js
node _herramientas/pruebas/test_calculadora.js
node _herramientas/pruebas/test_despiece.js
```

Cada una imprime una lista de comprobaciones con `OK` o `FALLA` y termina con el total.
Si alguna falla, el programa devuelve un código de error (útil para automatizar).

## Qué cubre cada una

| Prueba | Qué verifica |
|---|---|
| `test_cotizador.js` | Catálogo y códigos, subtotales, IVA, anticipo, descuentos, cálculo de áreas con medidas y vanos, numeración correlativa, fechas y el texto que se envía por WhatsApp |
| `test_calculadora.js` | Las 15 actividades contra sus ejemplos documentados; que el cemento se calcule en kilogramos y sirva con bolsa de 50, 42,5 o 25 kg; y que **ninguna actividad ni base de cálculo mencione otro país** |
| `test_despiece.js` | El optimizador de corte (sin solapes, dentro de la plancha, grosor de sierra, veta) y el lector de archivos CSV en todos sus formatos |
| `test_encuesta.js` | La encuesta de precios: catálogo, proveedores, estadísticas (mínimo, promedio y **mediana**), ranking, análisis y exportación a Excel |
| `revisar_aplicaciones.js` | Revisión estática del cableado de las cinco páginas: que cada función llamada exista y que cada elemento buscado exista. No necesita instalar nada |
| `medir_diseno_movil.js` | Abre las tres aplicaciones en un navegador real de 360 px y comprueba que nada se salga de la pantalla ni del botón. **Requiere instalar puppeteer** (ver el encabezado del archivo) |

## Cuando se cambie una aplicación

1. Ejecutar las tres pruebas.
2. Si se agregó o cambió una fórmula, actualizar el ejemplo correspondiente en la prueba.
3. Subir los cambios al repositorio (política del proyecto).

Total actual: **111 comprobaciones** (23 del cotizador, 59 de la calculadora y 29 del despiece).
