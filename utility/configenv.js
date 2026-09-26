import dotenv from 'dotenv';
dotenv.config({path:"C:\Monica Automation playwright\credential.env"});

export function getBaseURL(env)
{
    let url;
    switch(env){
        case 'qa':
            url=process.env.QA_URL?.trim();
            break;

            case 'qc':
                url=process.env.QC_URL?.trim();
                break;

                case 'dev':
                    url=process.env.DEV_URL?.trim();
                    break;

                    default:
                        throw new Error(`Unknown Environment: ${env}`);
    }
    console.log(`getBaseURL('${env}) returned:`,url || '[Not Set]');
    return url
}
