import { test, expect } from '@playwright/test';
import { parse, intervalToDuration, differenceInSeconds, format, addHours, addMinutes  } from 'date-fns'
import {persons, urlLocator} from './users-dev.json';

test('Validating Landing Screen', async ({page}) => {
    await page.goto('about:blank');  
    //await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');    
    await page.goto('http://localhost:4200/store?deviceID=IndiaQATestTablet');
    await page.getByRole('button', { name: 'OK' }).click();
    await expect(page.getByRole('img', { name: 'jeresey-mikes-logo' })).toBeVisible();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByText('Tap on your Name to login')).toBeVisible();
    await expect(page.getByPlaceholder('Search Name')).toBeVisible();
    console.log(urlLocator);
    persons.forEach((item) => {
      console.log(item.name);
    })
    //await expect(page.getByText('AK Ajith Ks')).toBeVisible();
    // await expect(page.getByText('AA Ajith Ak')).toBeVisible();
    // await expect(page.getByText('Dhoni Ms')).toBeVisible();
    // await expect(page.getByText('DM Dhoni Ms')).toBeVisible();
    // await expect(page.getByText('SS Steve Smith')).toBeVisible();   
    //await expect(page.getByText('(Manager)')).toBeVisible();
    //await expect(page.getByText('BS (Manager)Bob Simpson')).toBeVisible();    
    //await expect(page.getByText('Kiosk')).toBeVisible();  
    //await expect(page.getByRole('img', { name: 'logo', exact: true })).toBeVisible();  

  });

  
// test('Validating PIN Screen', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');    
//     await page.getByRole('button', { name: 'OK' }).click();
  
//     await page.getByText('Ajith Ks').click();
//     await expect(page.getByText('Hello, Ajith !')).toBeVisible();
//     await expect(page.getByText('Please enter your PIN')).toBeVisible();
//     await expect(page.locator('#pin-0')).toBeVisible();
//     await expect(page.locator('#pin-1')).toBeVisible();
//     await expect(page.locator('#pin-2')).toBeVisible();
//     await expect(page.locator('#pin-3')).toBeVisible();

//     await expect(page.getByRole('button', { name: '1' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '2' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '3' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '4' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '5' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '6' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '7' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '8' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '9' })).toBeVisible();
//     await expect(page.getByRole('button', { name: '0' })).toBeVisible();
   
//     await expect(page.locator('.grid > button')).toBeVisible();
//     await expect(page.locator('div').filter({ hasText: /^AKHello, Ajith !Please enter your PIN$/ }).getByRole('button')).toBeVisible();
//   });

//   test('Validating Invalid Pin', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');       
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '2' }).click();
//     await page.getByRole('button', { name: '3' }).click();
//     await page.getByRole('button', { name: '4' }).click();    
//     await expect(page.getByText('Incorrect PIN', { exact: true })).toBeVisible();
   
//   });

//   test('Validating Valid PIN', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');       
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();    
//     await expect(page.getByText('Hello, ajith !')).toBeVisible();
//     await expect(page.getByText("You don't have a shift now")).toBeVisible();
//     await expect(page.getByText('Do you want to Clock in now?')).toBeVisible();
//     await expect(page.getByText('ak', { exact: true })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'CLOCK IN' })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'LOGOUT' })).toBeVisible();    
//   });

 
//   test('Validating ClockIn functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');       
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();    
//     await page.getByRole('button', { name: 'CLOCK IN' }).click();  
//     await expect(page.getByText('Choose shift to clock in')).toBeVisible();
//     await expect(page.getByText('Unscheduled Shift')).toBeVisible();
//     await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible(); 
    
//   });

//   test('Validating ClockIn Popup functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');       
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();    
//     await page.getByRole('button', { name: 'CLOCK IN' }).click();  
//     await page.getByRole('button', { name: 'Confirm' }).click();   
//     await expect(page.getByText('Thank You')).toBeVisible();
//     await expect(page.getByText('ajith!!')).toBeVisible();
//     await expect(page.getByText('Clocked in')).toBeVisible();
//     await expect(page.getByText('at')).toBeVisible();
//     await expect(page.locator('svg').nth(1)).toBeVisible();
//     await expect(page.getByText('6001 - Chennai')).toBeVisible(); 
//     await expect(page.getByText('Tap on your Name to login')).toBeVisible();
//     await expect(page.getByPlaceholder('Search Name')).toBeVisible();
//     await expect(page.getByText('AK Ajith Ks')).toBeVisible();
//   });

//   test('Validating Employee Screen', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');       
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await expect(page.getByText('Hello, ajith !')).toBeVisible();
//     await expect(page.getByText('You are clocked in')).toBeVisible();
//     await expect(page.getByText('Unscheduled Shift')).toBeVisible();
//     await expect(page.getByText('Clocked in', { exact: true })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'TAKE BREAK' })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'CLOCK OUT' })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'LOGOUT' })).toBeVisible();
//   });

//   test('Validating Break functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');
//    await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await page.getByRole('button', { name: 'TAKE BREAK' }).click();    
//     await expect(page.getByText('Thank You')).toBeVisible();
//     await expect(page.getByText('ajith!!')).toBeVisible();
//     await expect(page.getByText('Break started')).toBeVisible();
//     await expect(page.getByText('at')).toBeVisible();
//     await expect(page.locator('svg').nth(1)).toBeVisible();
//     await expect(page.getByText('6001 - Chennai')).toBeVisible();
//     await expect(page.getByText('Tap on your Name to login')).toBeVisible();
//     await expect(page.getByPlaceholder('Search Name')).toBeVisible();
//     await expect(page.getByText('AK Ajith Ks')).toBeVisible();
//   });

//   test('Validating Break screen', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');      
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await expect(page.getByText('Hello, ajith !')).toBeVisible();
//     await expect(page.getByText('You are on a break')).toBeVisible();
//     await expect(page.getByText('Unscheduled Shift')).toBeVisible();
//     await expect(page.getByText('Break', { exact: true })).toBeVisible();      
//     await expect(page.getByRole('button', { name: 'RESUME' })).toBeVisible();
//     await expect(page.getByRole('button', { name: 'CLOCK OUT' })).toBeVisible();   
//     await expect(page.getByRole('button', { name: 'LOGOUT' })).toBeVisible(); 
//   });

//   test('Validating Resume functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');      
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await page.getByRole('button', { name: 'RESUME' }).click(); 
//     await expect(page.getByText('Thank You')).toBeVisible();
//     await expect(page.getByText('ajith!!')).toBeVisible();
//     await expect(page.getByText('Resumed work')).toBeVisible();
//     await expect(page.getByText('at')).toBeVisible();
//     await expect(page.locator('svg').nth(1)).toBeVisible();
//     await expect(page.getByText('6001 - Chennai')).toBeVisible(); 
//     await expect(page.getByText('Tap on your Name to login')).toBeVisible();
//     await expect(page.getByPlaceholder('Search Name')).toBeVisible();
//     await expect(page.getByText('AK Ajith Ks')).toBeVisible();
//   });



//   test('Validating ClockOut functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');      
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await page.getByRole('button', { name: 'CLOCK OUT' }).click(); 
//     await expect(page.getByText('Confirm Clock Out')).toBeVisible();
//     await expect(page.getByText('You are about to clock out. Please confirm')).toBeVisible();
//     await expect(page.getByText('Cancel')).toBeVisible();
//     await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible();
   
//   });

//   test('Validating ClockOut Confirm functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');      
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await page.getByRole('button', { name: 'CLOCK OUT' }).click(); 
//     await page.getByRole('button', { name: 'Confirm' }).click();   
//     await expect(page.getByText('Thank You')).toBeVisible();
//     await expect(page.getByText('ajith!!')).toBeVisible();
//     await expect(page.getByText('Clocked out')).toBeVisible();
//     await expect(page.getByText('at')).toBeVisible();
//     await expect(page.locator('svg').nth(1)).toBeVisible();
//     await expect(page.getByText('6001 - Chennai')).toBeVisible(); 
//     await expect(page.getByText('Tap on your Name to login')).toBeVisible();
//     await expect(page.getByPlaceholder('Search Name')).toBeVisible();
//     await expect(page.getByText('AK Ajith Ks')).toBeVisible();
//   });

//   test('Validating Logout functionality', async ({page}) => {
//     await page.goto('about:blank');  
//     await page.goto('https://totalqsr-kiosk--develop-jar3rer2.web.app/store?deviceID=IndiaQATestTablet');      
//     await page.getByRole('button', { name: 'OK' }).click();    
//     await page.getByText('Ajith Ks').click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();
//     await page.getByRole('button', { name: '1' }).click();     
//     await page.getByRole('button', { name: 'LOGOUT' }).click();      
//     await expect(page.getByText('Tap on your Name to login')).toBeVisible();
//     await expect(page.getByPlaceholder('Search Name')).toBeVisible();
//     await expect(page.getByText('AK Ajith Ks')).toBeVisible();
    
//   });

// test('Validating Day Total', async ({page}) => {
//   await page.goto('about:blank');
//   await page.goto('http://localhost:4200/store?deviceID=IndiaQATestTablet');
//   await page.getByRole('button', { name: 'OK' }).click();  
//   await page.getByText('Ajith Ks').click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();

//   const clockedInTime = await page.getByTestId('clocked-in-time').textContent();
//   const currentTime = await page.getByTestId('current-time').textContent();
//   const dayTotal = await page.getByTestId('day-total').textContent();
//   const zeroPad = (num) => String(num).padStart(2, '0');

//   const clockedInDateTime = clockedInTime != null ? (parse(clockedInTime,'hh:mm aa', new Date())) : '';
//   const currentDateTime = currentTime != null ? (parse(currentTime,'hh:mm aa', new Date())) : ''; 
  
//   const intervalDuration = intervalToDuration({start: 0, end: differenceInSeconds(new Date(currentDateTime), new Date(clockedInDateTime)) * 1000});
  
//   const differenceInHoursAndMins = intervalDuration.hours+':'+zeroPad(intervalDuration.minutes); 
//   console.log(dayTotal, differenceInHoursAndMins);

//   await expect(page.getByTestId('day-total')).toHaveText(differenceInHoursAndMins);
// });

// test('Validating Break Total', async ({page}) => {
//   await page.goto('about:blank');
//   await page.goto('http://localhost:4200/store?deviceID=IndiaQATestTablet');
//   await page.getByRole('button', { name: 'OK' }).click();  
//   await page.getByText('Ajith Ks').click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();   

//   const clockedInTime = await page.getByTestId('clocked-in-time').textContent();
//   const currentTime = await page.getByTestId('current-time').textContent();
//   const breakTotal = await page.getByTestId('break-total').textContent();
//   const breakLocator = page.getByTestId('break-time');
//   const resumeLocator = page.getByTestId('resume-time');
//   const zeroPad = (num) => String(num).padStart(2, '0');

//   const clockedInDateTime = clockedInTime != null ? (parse(clockedInTime,'hh:mm aa', new Date())) : '';
//   const currentDateTime = currentTime != null ? (parse(currentTime,'hh:mm aa', new Date())) : ''; 
  
//   const intervalDuration = intervalToDuration({start: 0, end: differenceInSeconds(new Date(currentDateTime), new Date(clockedInDateTime)) * 1000});

//   let totalBreakTimeinHrs : number = 0;
//   let totalBreakTimeinMins : number = 0; 
//   let workTotalinHrs : number = 0;
//   let workTotalInMins : number = 0;

//   console.log(await breakLocator.count());
//   for (let i = 0; i < await breakLocator.count(); i++) {
//       let breakTime = await breakLocator.nth(i).textContent();
//       let resumeTime = await resumeLocator.nth(i).textContent();
//       let breakDateTime = breakTime != null ? (parse(breakTime,'hh:mm aa', new Date())) : '';
//       let resumeDateTime = resumeTime != null ? (parse(resumeTime,'hh:mm aa', new Date())) : '';
//       let breakDuration = intervalToDuration({start: 0, end: differenceInSeconds(new Date(resumeDateTime), new Date(breakDateTime)) * 1000});
//       if(breakDuration.hours != undefined){
//         totalBreakTimeinHrs = totalBreakTimeinHrs + breakDuration.hours;
//       }
//       if(breakDuration.minutes != undefined){
//         totalBreakTimeinMins = totalBreakTimeinMins + breakDuration.minutes;
//       }
//       console.log('Inside', totalBreakTimeinHrs, totalBreakTimeinMins);
//   } 
//   console.log('Outside', totalBreakTimeinHrs, totalBreakTimeinMins, zeroPad(totalBreakTimeinMins));

//  if(totalBreakTimeinMins > 60){ 
//     totalBreakTimeinHrs = (totalBreakTimeinHrs + Math.floor(totalBreakTimeinMins / 60));
//     totalBreakTimeinMins = (totalBreakTimeinMins % 60);
//  }
//   const differenceBreakInHoursAndMins = totalBreakTimeinHrs+':'+zeroPad(totalBreakTimeinMins); 
  
//   console.log('Break Time', differenceBreakInHoursAndMins, await page.getByTestId('break-total').textContent()); 
//   await expect(page.getByTestId('break-total')).toHaveText(differenceBreakInHoursAndMins);
// });


// test('Validating Work Total', async ({page}) => {
//   await page.goto('about:blank');
//   await page.goto('http://localhost:4200/store?deviceID=IndiaQATestTablet');
//   await page.getByRole('button', { name: 'OK' }).click();  
//   await page.getByText('Ajith Ks').click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
  
//   const clockedInTime = await page.getByTestId('clocked-in-time').textContent();
//   const currentTime = await page.getByTestId('current-time').textContent();
//   const breakTotal = await page.getByTestId('break-total').textContent();
//   const breakLocator = page.getByTestId('break-time');
//   const resumeLocator = page.getByTestId('resume-time');
//   const zeroPad = (num) => String(num).padStart(2, '0');

//   const clockedInDateTime = clockedInTime != null ? (parse(clockedInTime,'hh:mm aa', new Date())) : '';
//   const currentDateTime = currentTime != null ? (parse(currentTime,'hh:mm aa', new Date())) : ''; 
  
//   const intervalDuration = intervalToDuration({start: 0, end: differenceInSeconds(new Date(currentDateTime), new Date(clockedInDateTime)) * 1000});

//   let totalBreakTimeinHrs : number = 0;
//   let totalBreakTimeinMins : number = 0; 
//   let workTotalinHrs : number = 0;
//   let workTotalInMins : number = 0;

//   console.log(await breakLocator.count());

//   for (let i = 0; i < await breakLocator.count(); i++) {
//       let breakTime = await breakLocator.nth(i).textContent();
//       let resumeTime = await resumeLocator.nth(i).textContent();
//       let breakDateTime = breakTime != null ? (parse(breakTime,'hh:mm aa', new Date())) : '';
//       let resumeDateTime = resumeTime != null ? (parse(resumeTime,'hh:mm aa', new Date())) : '';
//       let breakDuration = intervalToDuration({start: 0, end: differenceInSeconds(new Date(resumeDateTime), new Date(breakDateTime)) * 1000});
//       if(breakDuration.hours != undefined){
//         totalBreakTimeinHrs = totalBreakTimeinHrs + breakDuration.hours;
//       }
//       if(breakDuration.minutes != undefined){
//         totalBreakTimeinMins = totalBreakTimeinMins + breakDuration.minutes;
//       }
      
//   } 
//   if(totalBreakTimeinMins > 60){ 
//     totalBreakTimeinHrs = (totalBreakTimeinHrs + Math.floor(totalBreakTimeinMins / 60));
//     totalBreakTimeinMins = (totalBreakTimeinMins % 60);
//   }

//   console.log('Before Calculating work total ', intervalDuration, totalBreakTimeinHrs, totalBreakTimeinMins);
//   if(intervalDuration.hours != undefined){
//     workTotalinHrs = intervalDuration.hours - totalBreakTimeinHrs;
//   }

//   if(intervalDuration.minutes != undefined){
//     workTotalInMins = intervalDuration.minutes - totalBreakTimeinMins;
//   }

//   console.log('Work Total ', workTotalinHrs, workTotalInMins);
  
//   const differenceWorkInHoursAndMins = workTotalinHrs+':'+zeroPad(workTotalInMins); 
//   console.log('Break Time in worktotal', differenceWorkInHoursAndMins, await page.getByTestId('work-total').textContent()); 
//   await expect(page.getByTestId('work-total')).toHaveText(differenceWorkInHoursAndMins);
// });