import XLSX from 'xlsx';
import dotenv from 'dotenv';
export function getTestDataAndNames(sheetName){
    const workbook=XLSX.readFile(process.env.EXCEL_FILEPATH);
    const sheet=workbook.Sheets[sheetName];
    const allData=XLSX.utils.sheet_to_json(sheet);
    const filteredData=allData.filter(row=>row.runFlag?.toUpperCase()==='Y' && row.testName);
    const testNamesSet=new Set();
    filteredData.forEach(row=>{
        const names=row.testName?.split(';').map(name=>name.trim()) || [];
        names.forEach(name=>testNamesSet.add(name));
    });

    return{
        filteredData,testNameToRun:Array.from(testNamesSet)
    };
    
}