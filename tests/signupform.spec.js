import{test,expect} from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage'
import newUserData from '../userdata.json'



test('Signingup form',async({page})=>{
     const registerPage =new RegisterPage(page);
     await registerPage.navigateto();
     await registerPage.clickRegistrationlink();
     await registerPage.fillregistrationform(newUserData);
     await registerPage.submitform();

})