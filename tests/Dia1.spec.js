        // Ejercicios para validar URL
import { test, expect } from "@playwright/test";
test('Validar URL de la pagina de Google', async ({ page }) => {
    await page.goto('https://example.com');
    await expect (page).toHaveTitle('Example Domain');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('This domain is for use in documentation examples without needing permission. Avoid use in operations.');
    expect(page.url()).toContain('https://example');

});
        
        
        // // -----------------------Ejercicios para validar titulo
        // import { test, expect } from "@playwright/test";

        // test('Validar título con regex', async ({ page }) => {
        //     await page.goto('https://example.com/');
        //     await expect(page).toHaveTitle('Example Domain');
        // })

        
//--------------------------------------------------Regla de oro
// expect → siempre valida
// await → solo si hay algo async (espera)

// import { test, expect } from "@playwright/test";

// test('Abrir google y verificar titulo', async ({ page }) => {
//     // a la espera de la pagina
//     await page.goto("https://www.google.com");
//     //esperar esperar pagania que tenga
//     await expect(page).toHaveTitle("Google"),
//     expect(page.url()).toContain('google'),
//     await page.goto('https://example.com/'),
//     await expect (page).toHaveTitle('Example Domain');   
// })


// // anera de utilliza el expect 
// // 1. page → tengo la página
// // 2. page.url() → saco la URL
// // 3. expect(...) → valido el resultado

// // Métodos del objeto page

// // page representa la pestaña del navegador. Son los más usados para navegar e interactuar con la página.

// // Método	Qué hace	Ejemplo
// // goto(url)	Navega a una URL	await page.goto('https://google.com');
// // url()	Obtiene la URL actual	console.log(page.url());
// // title()	Obtiene el título de la página	console.log(await page.title());
// // screenshot({ path })	Captura pantalla	await page.screenshot({ path: 'pantalla.png' });
// // waitForSelector(selector)	Espera a que un elemento aparezca	await page.waitForSelector('input[name="q"]');
// // click(selector)	Hace clic en un elemento	await page.click('button[type="submit"]');
// // fill(selector, texto)	Escribe en un input	await page.fill('input[name="q"]', 'QA Automation');
// // press(selector, key)	Presiona una tecla en un input	await page.press('input[name="q"]', 'Enter');
// // textContent(selector)	Obtiene el texto de un elemento	const texto = await page.textContent('h1');
// // getByRole(role, options)	Selecciona elementos por rol accesible	await page.getByRole('button', { name: 'Enviar' }).click();
// // 2️⃣ Métodos del objeto locator

// // locator apunta a un elemento específico. Se usa mucho junto con page.locator o page.getByRole.

// // Método	Qué hace	Ejemplo
// // click()	Hace clic	await page.locator('button').click();
// // fill(texto)	Escribe en un input	await page.locator('input').fill('Hola');
// // hover()	Pasa el mouse sobre un elemento	await page.locator('img').hover();
// // textContent()	Obtiene texto	const t = await page.locator('p').textContent();
// // isVisible()	Devuelve si el elemento es visible	await expect(page.locator('p')).toBeVisible();
// // nth(index)	Selecciona un elemento de muchos	await page.locator('li').nth(0).click();
// // 3️⃣ Métodos de expect

// // expect se usa para validar cosas en tus pruebas (asserts).

// // Método	Qué valida	Ejemplo
// // toBeVisible()	Que el elemento sea visible	await expect(page.locator('h1')).toBeVisible();
// // toHaveText(texto)	Que tenga cierto texto	await expect(page.locator('h1')).toHaveText('QA Automation');
// // toContain(texto)	Que contenga texto	expect(await page.textContent('body')).toContain('QA');
// // toHaveURL(url)	Que la URL sea igual	await expect(page).toHaveURL('https://google.com');
// // toHaveCount(n)	Que haya n elementos	await expect(page.locator('li')).toHaveCount(5);
// // 4️⃣ Otros métodos útiles
// // page.waitForTimeout(ms) → espera un tiempo (ej: await page.waitForTimeout(1000);)
// // page.reload() → recarga la página
// // page.goBack() → ir atrás
// // page.goForward() → ir adelantem