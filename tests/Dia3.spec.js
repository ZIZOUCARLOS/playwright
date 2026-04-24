// import { test, expect } from "@playwright/test";

// test('toma de selectores', async ({ page }) => {

//     // 🔹 1. Navegar a la página inicial
//     await page.goto('https://example.com');

//     // 🔹 2. Definir elemento (link principal)
//     const link = page.locator('a');

//     // 🔹 3. Validaciones iniciales (estado antes del click)
//     await expect(page).toHaveURL(/example.com/);
//     await expect(link).toBeVisible();
//     await expect(link).toHaveAttribute(
//         'href',
//         'https://iana.org/domains/example'
//     );

//     // 🔹 4. Acción: hacer click en el link
//     await link.click();

//     // 🔹 5. Validaciones después del click (nuevo contexto)
//     await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Example');
// });

// BONUS (muy importante)

// También puedes usar:

// npx playwright codegen https://example.com

// 👉 Esto:

// abre navegador
// graba lo que haces
// te genera código automáticamente

import { test, expect } from "@playwright/test";


test('Ejercicios de practica nivel 3', async ({ page }) => {
    await page.goto('https://example.com')
    const link = page.locator('a');


    await expect(page.locator('a')).toHaveAttribute('href',"https://iana.org/domains/example") ;
    await expect (link).toBeVisible('Learn more');
    await link.click();
    await expect(page.url()).toContain('https://www.iana.org/help/example-domains');
});
