import { error } from "node:console";
import dotenv, { configDotenv } from 'dotenv';
import path from 'path';
import { CommonUtility } from "../utility/CommonUtility"; 
import { getBaseURL } from "../utility/configenv";



export class RegisterPage extends CommonUtility{
    
constructor(page,env)
{
    super(page);
    this.page=page;  
    this.env = process.env.TEST_ENV || 'dev';
    this.registerlink= page.getByRole('link',{name :'Register'});
    this.firstname= page.locator('input[name="customer.firstName"]');
    this.lastname= page.locator('input[name="customer.lastName"]');
    this.address= page.locator('input[name="customer.address.street"]');
    this.city= page.locator('input[name="customer.address.city"]');
    this.state= page.locator('input[name="customer.address.state"]');
    this.zipcode= page.locator('input[name="customer.address.zipCode"]');
    this.phnum= page.locator('input[name="customer.phoneNumber"]');
    this.ssn= page.locator('input[name="customer.ssn"]');
    this.username= page.locator('input[name="customer.username"]');
    this.password= page.locator('input[name="customer.password"]');
    this.confirmpassword= page.locator('input[name="repeatedPassword"]');
    this.registerbtn= page.getByRole('button',{name:'Register',exact:true});
    

}
async navigateto()
{
    this.baseURL=getBaseURL(this.env);
    await this.page.goto(this.baseURL);
}

async clickRegistrationlink()
{
    await this.registerlink.click();
}
async fillregistrationform(userData)
{
    //await this.page.screenshot({ path: `screenshots/signup-${userData.username}.png` });
    await this.takeScreenshot();
    await this.firstname.fill(userData.firstName);
    await this.lastname.fill(userData.lastName);
    await this.address.fill(userData.street);
    await this.city.fill(userData.city);
    await this.state.fill(userData.state);
    await this.zipcode.fill(userData.zipCode);
    await this.phnum.fill(userData.phone);
    await this.ssn.fill(userData.ssn);
    await this.username.fill(userData.username);
    await this.password.fill(userData.password);
    await this.confirmpassword.fill(userData.confirmPassword);
   await this.takeScreenshot();
   
   

}
async submitform()
{
     await this.registerbtn.click();
     await this.takeScreenshot();
}
}
