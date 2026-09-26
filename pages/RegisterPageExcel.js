import path from "node:path";
import { CommonUtility } from "../utility/CommonUtility";
import { getBaseURL } from "../utility/configenv";


export class RegisterPageExcel extends CommonUtility {

    constructor(page,testdata){
        super(page);
        this.page=page;
        this.testdata=testdata;
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

    async fillRegisterationFormExcel(testdata){

    await this.takeScreenshot();
    await this.firstname.fill(testdata.firstName);
    await this.lastname.fill(testdata.lastName);
    await this.address.fill(testdata.street);
    await this.city.fill(testdata.city);
    await this.state.fill(testdata.state);
    await this.zipcode.fill(testdata.zipCode);
    await this.phnum.fill(testdata.phone);
    await this.ssn.fill(testdata.ssn);
    await this.username.fill(testdata.username);
    await this.password.fill(testdata.password);
    await this.confirmpassword.fill(testdata.confirmPassword);
    await this.takeScreenshot();
   
}

async submitform()
{
     await this.registerbtn.click();
     await this.takeScreenshot();
}
}





    




