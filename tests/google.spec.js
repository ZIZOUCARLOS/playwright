import { test, expect } from '@playwright/test';

test('Buscar QA Automation en Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Escribir en el buscador
  await page.getByRole('combobox', { name: 'Buscar' }).fill('QA Automation');
  await page.press('input[name="q"]', 'Enter');

  // Validar que el primer resultado contenga "QA"
  const primerResultado = page.getByText('QA'); // busca directamente el texto "QA" en la página
  await expect(primerResultado).toBeVisible();  // valida que esté visible
});

// Explicación línea por línea
// Línea	Qué hace	Por qué
// test('buscar QA Automation en Google', async ({ page }) => {	 test es una funcion de playwright y define un string, Define un caso de prueba	page representa la pestaña del navegador
// await page.goto('https://www.google.com');	Abre Google	await espera a que la página cargue antes de continuar
// await page.fill('input[name="q"]', 'QA Automation');	Escribe en la barra de búsqueda	Simula que el usuario escribe
// await page.press('input[name="q"]', 'Enter');	Presiona Enter	Lanza la búsqueda
// await page.waitForSelector('text=QA');	Espera a que aparezca texto con “QA”	Sin esto la validación podría fallar si la página no cargó rápido
// const contenido = await page.textContent('body');	Obtiene todo el texto visible	Necesario para validar que el resultado existe
// expect(contenido).toContain('QA');	Valida que aparece “QA”	Esto hace que la prueba tenga sentido y pueda pasar o fallar

// paso a paso para entender el test 

//  1 - test('mi prueba', () => {
//   Es una función que significa:

// “esto es una prueba”

//  2 - async () => {

// 👉 significa:

// Dentro de esta función voy a manejar operaciones que pueden tardar tiempo

//  2 - await algo();

// 👉 significa:

// “espera que esto termine antes de seguir”

// page → “la pestaña del navegador que Playwright me da para interactuar con la página”

// 📝 Forma de recordarlo como QA/dev
// page = pestaña del navegador
// Con page puedo hacer cosas como:
// page.goto(url) → abrir una página
// page.click(selector) → hacer click
// page.fill(selector, texto) → escribir
// page.textContent(selector) → leer contenido

// 💡 Piensa en page como tu control remoto de la pestaña.

// __________________________________________________________________ EXPECT 
// 🔹 1️⃣ Qué es expect
// expect es una función de Playwright (y de otras librerías de testing como Jest).
// Su función principal es verificar o “asegurar” que algo sea lo que esperamos.
// Es lo que convierte tu script en un test real, porque sin expect solo estás haciendo acciones, no comprobaciones.
// 🔹 2️⃣ Cómo funciona

// Se usa así:

// expect(valor_a_probar).matcher(valor_esperado)
// valor_a_probar → lo que quieres validar (puede ser texto, existencia de un elemento, atributo, etc.)
// matcher → la comparación que quieres hacer (toBe, toContain, toBeVisible, etc.)
// valor_esperado → lo que esperas que sea
// 🔹 3️⃣ Ejemplos fáciles

// Ejemplo 1: Validar texto completo

// const mensaje = 'Hola QA';
// expect(mensaje).toBe('Hola QA'); // ✅ pasa, porque coincide exactamente
