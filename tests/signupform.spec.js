import{test,expect} from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage'
import newUserData from '../userdata.json'
import { getTestDataAndNames } from '../utility/excelReader';
import { configDotenv } from 'dotenv';
import { json } from 'node:stream/consumers';
import { RegisterPageExcel } from '../pages/RegisterPageExcel';
const{filteredData,testNameToRun}=getTestDataAndNames('Registerform')


          try{
               console.log('Fetched Test Data:',JSON.stringify(filteredData,null,2));
               console.log('Test Names to Run:',testNameToRun);
          }
          catch(error){
               console.error('Failed to load test data and testnames:',error);

          }


  if (testNameToRun.includes('Signingup_form'))
     { 
          for(const data of filteredData.filter(d=>d.testName.includes('Signingup_form'))){
  test(`Signingup_form=${data.testCaseID}`,async({page})=>{
   //  console.log(`Running test:{testName}`);
     const registerPage =new RegisterPage(page);
     await registerPage.navigateto();
     await registerPage.clickRegistrationlink();
     await registerPage.fillregistrationform(newUserData);
     await registerPage.submitform();
})
}}

if(testNameToRun.includes('Signingup_formexcel')){
     for(const data of filteredData.filter(d=>d.testName.includes('Signingup_formexcel'))){
test(`Signingup_form=${data.testCaseID}`,async({page})=>{
   //  console.log(`Running test:{testName}`);
     const registerPageExcel =new RegisterPageExcel(page);
     await registerPageExcel.navigateto();
     await registerPageExcel.clickRegistrationlink();
     await registerPageExcel.fillRegisterationFormExcel(data);
     await registerPageExcel.submitform();
})
}
}
 



