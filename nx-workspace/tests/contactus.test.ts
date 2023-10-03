import { chromium, test, expect } from "@playwright/test";
import assert from "assert";



test("Form demo",async () => {
    
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:4200/contact-us");

    await page.fill("id=userName","Raf1");
    

    const userNameVal = await page.getAttribute("id=userName","value");

    const userNameValLen = userNameVal?.length;

    await expect(userNameValLen).toBeGreaterThanOrEqual(3);

    await expect(userNameVal).toMatch(/^[A-z\s.-]+$/);

    await page.close();
    await context.close();
    await browser.close();
    
})