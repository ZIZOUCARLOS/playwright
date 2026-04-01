import { test,expect} from "@playwright/test";

// test('Buscar en google', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     await page.getByRole('combobox', { name: 'Buscar' }).fill('QA Automation');
//     await page.keyboard.press('Enter');
    
// })
// e-----------------------------------------jercicios 2 
// test('Hacer clic en el boton Buscar', async ({ page }) => {
//   await page.goto('https://www.google.com/');

//   const buscador = page.getByRole('combobox', { name: 'Buscar' });

//   // Escribir
//   await buscador.fill('Dragon ball z');

//   // Validar input (ANTES del click)
//   await expect(buscador).toHaveValue('Dragon ball z');

//   // Buscar
//   await page.getByRole('button', { name: 'Buscar con Google' }).click();

//   // Validar navegación
//   await expect(page).toHaveURL(/search/);
// });
// --------------------------------------------------Ejercicios 3 
test('Dia 2 de ejercicios', async ({ page }) => {
  // navegar a la pagina de google
  await page.goto('https://example.com');
  //Vlidar Titulo
  await expect (page).toHaveTitle('Example Domain')
  //Validar URL 
  expect (page.url()).toContain('example.com')
  
})



// ------------------------------------------------------------------lo que se hizo en este ejercicios fue : 

// Tu explicación (ajustada correctamente)

// 👉 Lo que hiciste fue:

// 1️⃣ Importaste herramientas de Playwright

// import { test, expect } from '@playwright/test';

// ✔ test → para crear pruebas
// ✔ expect → para validar

// 2️⃣ Creaste un test

// test('Hacer clic en el boton Buscar', async ({ page }) => {

// ✔ test() → define la prueba
// ✔ page → representa el navegador

// 3️⃣ Navegaste a la página

// await page.goto('https://www.google.com/');

// ✔ Abre la web
// ✔ Usa await porque tarda en cargar

// 4️⃣ Guardaste el elemento en una constante

// const buscador = page.getByRole('combobox', { name: 'Buscar' });

// ✔ Esto es un locator
// ✔ Apunta al input de búsqueda

// 5️⃣ Escribiste en el input

// await buscador.fill('Dragon ball z');

// ✔ fill() → escribe texto
// ✔ Usa await porque es una acción

// 6️⃣ Validaste el valor del input

// await expect(buscador).toHaveValue('Dragon ball z');

// ✔ Correctísimo 🔥
// ✔ Validas lo que escribiste

// 7️⃣ Hiciste click en el botón

// await page.getByRole('button', { name: 'Buscar con Google' }).click();

// ✔ Acción de usuario

// 8️⃣ Validaste la URL

// await expect(page).toHaveURL(/search/);

// --------------------------------------------------------
//---------------------------------------- clave 
// toHaveText() → textos visibles (h1, p, div)
// toHaveValue() → inputs

// ----------------------------------------------------------- presionar ENTER 

// await page.keyboard.press('Enter'); Esto funciona solo si ya hay un elemento enfocado (por ejemplo, un input).
// Aquí funciona porque:

// Escribiste en el input
// El input quedó enfocado
// Enter ejecuta la búsqueda

// Forma MÁS recomendada (mejor práctica)

// 👉 En lugar de usar keyboard, puedes hacerlo directo en el input:

// await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');