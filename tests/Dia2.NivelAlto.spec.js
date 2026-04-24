import {test, expect} from '@playwright/test'

test('Validar multiples elementos',async({page}) =>{
    await page.goto('https://example.com')
    
    // Validar la URL
    expect (page.url()).toContain('example.com');
    //Validar el titulo principal
    await expect(page).toHaveTitle('Example Domain');
    //Validar una elemento o etiqueta semantica
    await expect(page.locator('h1')).toBeVisible();

    await expect(page.locator('body')).toHaveText('Example DomainThis domain is for use in documentation examples without needing permission. Avoid use in operations.Learn more');
    // Validar un contendido parcial
    await expect(page.locator('body')).toContainText('Avoid use in operations');
    // Validar link - con cick hacia otra pagina
    await page.getByRole('link', { name: 'Learn more' }).click();
    expect(page.url()).toContain('iana.org/help/example-domains');
    //Validar texto despues del click
    await expect(page.locator('body')).toContainText('As described in RFC 2606 and RFC 6761, a number of domains such as example.com and example.org are maintained for documentation purposes. These domains may be used as illustrative examples in documents without prior coordination with us. They are not available for registration or transfer.')
    
});

// // -----------------------------------Estudiar metodo de page para validar texto

// // toHaveText() → EXACTO

// // 👉 Se usa cuando quieres validar el texto tal cual

// // await expect(page.locator('h1')).toHaveText('Example Domain');

// // // ✔ Debe coincidir EXACTAMENTE
// // // ❌ Si cambia una palabra → falla

// // 👉 Se usa cuando quieres validar parte del texto

// // await expect(page.locator('body')).toContainText('Example');

// // ✔ Más flexible
// // ✔ Más usado en QA real
// _______________________________________________________________________
// // toContain() → STRING (NO locator)

// // 👉 Se usa así:

// // const texto = await page.textContent('body');
// // expect(texto).toContain('Example');

// // 👉 Aquí NO usas locator directamente, usas una variable


// ____________________________________________________________________________________________________
// // locator → cuando interactúas o validas elementos del DOM
// // NO locator → cuando trabajas con datos (strings, números, etc.)
// // CUÁNDO USAR locator (LO MÁS IMPORTANTE)

// // 👉 Cuando quieres trabajar con algo de la página:

// // Click
// // Escribir
// // Validar texto
// // Ver si existe
// // Contar elementos

// // // Regla de ORO USAr locator SIEMPRE que puedas 🔥-------------------------------------------
// // Si estás viendo la página → locator
// // Si ya sacaste el dato → NO locator


