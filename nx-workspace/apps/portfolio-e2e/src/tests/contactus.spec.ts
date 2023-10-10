import { test, expect } from '@playwright/test';
import * as testData from './user.json';


const {urlLocator} = testData[process.env.VITE_REACT_ENVIRONMENT_NAME];

test.beforeEach(async ({ page }) => { 
  await page.goto('about:blank');  
  await page.goto(urlLocator);
});

test('Validating Name min length', async ({page}) => { 
  await page.fill("id=userName","Sa");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Must be atleast 3 characters long.')).toBeVisible();
});

test('Validating Name max length', async ({page}) => {  
  await page.fill("id=userName","Sathyanarayanamoorthy");
  await page.keyboard.press('Tab');      
  await expect(page.getByText('Must not be greater than 20 characters long.')).toBeVisible();

});
test('Validating Name pattern', async ({page}) => {  
  await page.fill("id=userName","Sass2");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Please enter only characters.')).toBeVisible();
});

test('Validating Name expected behaviour', async ({page}) => { 
  await page.fill("id=userName","Sass");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Please enter only characters.')).toBeHidden();
  await expect(page.getByText('Must be atleast 3 characters long.')).toBeHidden();
  await expect(page.getByText('Must not be greater than 20 characters long.')).toBeHidden();
  await expect(page.getByText('Name is required.')).toBeHidden();
});

test('Validating Name is empty', async ({page}) => { 
  await page.fill("id=userName","Sass");
  await page.keyboard.press('Tab');    
  await page.getByLabel('Name *').click(); 
  await page.fill("id=userName","");
  await expect(page.getByText('Name is required.')).toBeVisible();
});

test('Validating Email min length', async ({page}) => {  
  await page.fill("id=contactEmail","Sa");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Must be atleast 3 characters long.')).toBeVisible();
});
test('Validating Email is empty', async ({page}) => { 
  await page.fill("id=contactEmail","Sass");
  await page.keyboard.press('Tab');    
  await page.getByLabel('Email *').click(); 
  await page.fill("id=contactEmail","");
  await expect(page.getByText('Email is required.')).toBeVisible();
});

test('Validating Email pattern', async ({page}) => {  
  await page.fill("id=contactEmail","Sass");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Must be valid email.')).toBeVisible();
});

test('Validating Email expected behaviour', async ({page}) => { 
  await page.fill("id=contactEmail","abc@gmail.com");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Email is required.')).toBeHidden();
  await expect(page.getByText('Must be atleast 3 characters long.')).toBeHidden();
  await expect(page.getByText('Must be valid email.')).toBeHidden();
});

test('Validating Conatact Number min length', async ({page}) => {  
  await page.fill("id=contactNumber","50");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Invalid Phone Number.')).toBeVisible();
});

test('Validating Conatact Number max length', async ({page}) => {  
  await page.fill("id=contactNumber","99999999999");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Must not be more than 10 digits.')).toBeVisible();
});

test('Validating Conatact Number pattern', async ({page}) => {  
  await page.fill("id=contactNumber","9999999ww");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Invalid Phone Number.')).toBeVisible();
});

test('Validating Contact Number is empty', async ({page}) => { 
  await page.fill("id=contactNumber","9999");
  await page.keyboard.press('Tab');    
  await page.getByLabel('Contact Number *').click(); 
  await page.fill("id=contactNumber","");
  await expect(page.getByText('Contact Number is required.')).toBeVisible();
});

test('Validating Contact Number expected behaviour', async ({page}) => { 
  await page.fill("id=contactNumber","9999999999");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Contact Number is required.')).toBeHidden();
  await expect(page.getByText('Invalid Phone Number.')).toBeHidden();
  await expect(page.getByText('Must be 10 digits.')).toBeHidden();
  await expect(page.getByText('Must not be more than 10 digits.')).toBeHidden();
});

test('Validating Message is empty', async ({page}) => { 
  await page.fill("id=contactMessage","9999gh");
  await page.keyboard.press('Tab');    
  await page.getByLabel('Message *').click(); 
  await page.fill("id=contactMessage","");
  await expect(page.getByText('Message is required.')).toBeVisible();
});

test('Validating Message min length', async ({page}) => { 
  await page.fill("id=contactMessage","999");
  await page.keyboard.press('Tab');    
  await expect(page.getByText('Must be atleast 5 characters long.')).toBeVisible();
});

test('Validating Message max length', async ({page}) => { 
  await page.fill("id=contactMessage","999hyuiolkj786543vbghyujk9876543wsdfrtghku8765okg6789");
  await page.keyboard.press('Tab');    
  await expect(page.getByText('Must not be more than 50 characters long.')).toBeVisible();
});

test('Validating Message expected behaviour', async ({page}) => { 
  await page.fill("id=contactMessage","9999999999ghytr");
  await page.keyboard.press('Tab');     
  await expect(page.getByText('Message is required.')).toBeHidden();
  await expect(page.getByText('Must be atleast 5 characters long.')).toBeHidden();
  await expect(page.getByText('Must not be more than 50 characters long.')).toBeHidden();
});

test('Validating tnc checkbox not checked', async ({page}) => { 
  await page.fill("id=userName","Sass");
  await page.fill("id=contactEmail","abc@gmail.com");
  await page.fill("id=contactNumber","9999999999");
  await page.fill("id=contactMessage","Triggering from Playwright testcases");
  await page.getByLabel('I have read and agree to SoftBytez\'s  Terms of Use and Privacy Policy  *').check();
  await page.getByLabel('I have read and agree to SoftBytez\'s  Terms of Use and Privacy Policy  *').uncheck();
  await expect(page.getByText('Please read and accept the Terms of Use.')).toBeVisible();
 });

test('Validating Button Click expected behaviour', async ({page}) => { 
  await page.fill("id=userName","Sass");
  await page.fill("id=contactEmail","abc@gmail.com");
  await page.fill("id=contactNumber","9999999999");
  await page.fill("id=contactMessage","Triggering from Playwright testcases");
  await page.getByLabel('I have read and agree to SoftBytez\'s  Terms of Use and Privacy Policy  *').check();
  await page.getByRole('button', { name: 'Send Message' }).click();  
  await expect(page.getByText('Thanks for the message. Will reach you shortly!')).toBeVisible();
 });