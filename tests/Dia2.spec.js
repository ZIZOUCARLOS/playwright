import { test,expect} from "@playwright/test";

test('Buscar en google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.getByRole('combobox', { name: 'Buscar' }).click().fill('carlos');

    
})

