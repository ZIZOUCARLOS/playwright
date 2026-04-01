import { test,expect} from "@playwright/test";

// test('Buscar en google', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     await page.getByRole('combobox', { name: 'Buscar' }).fill('QA Automation');
//     await page.keyboard.press('Enter');
    
// })

test('Hacer clic en el boton Buscar', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const buscador = page.getByRole('combobox', { name: 'Buscar' });

  // Escribir
  await buscador.fill('Dragon ball z');

  // Validar input (ANTES del click)
  await expect(buscador).toHaveValue('Dragon ball z');

  // Buscar
  await page.getByRole('button', { name: 'Buscar con Google' }).click();

  // Validar navegación
  await expect(page).toHaveURL(/search/);
});


// ----------------------------------------------------------- presionar ENTER 

// await page.keyboard.press('Enter'); Esto funciona solo si ya hay un elemento enfocado (por ejemplo, un input).
// Aquí funciona porque:

// Escribiste en el input
// El input quedó enfocado
// Enter ejecuta la búsqueda

// Forma MÁS recomendada (mejor práctica)

// 👉 En lugar de usar keyboard, puedes hacerlo directo en el input:

// await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');