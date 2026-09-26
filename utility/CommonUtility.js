// utils/screenshot.js
import path from "node:path";
import fs from "fs";

export class CommonUtility {
    constructor(page)
    {
        this.page=page;
    }


async takeScreenshot(step='screenshot',testName) {


//Create screenshots folder if doesnt exist

if(!fs.existsSync('screenshots')){
    fs.mkdirSync('screenshots');
}
const now=new Date();
const hours=now.getHours() % 12 || 12;
const minutes=now.getMinutes().toString().padStart(2,'0');
const seconds=now.getSeconds().toString().padStart(2,'0');
const ampm=now.getHours> 12 ? 'PM' : 'AM';
const date=now.toISOString().split('T')[0];
const folderPath=path.join('screenshots',date);
const timestamp=`${date}_${hours}-${minutes}-${seconds}_${ampm}`;
const fileName =`${step}-${timestamp}.png`;
const fullPath=path.join(folderPath,fileName);

//create folder if it doesnt exist
fs.mkdirSync(folderPath,{recursive:true})

await this.page.screenshot({path:fullPath,fullPage:true});

try{
    await this.page.screenshot({path:fullPath});
     console.log(`✅ Screenshot saved: ${fullPath}`);
}
catch(error){
    console.error('Screenshot failed:',error);
}
}
}










  