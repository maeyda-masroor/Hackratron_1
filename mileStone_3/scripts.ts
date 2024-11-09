// regex for validation
const strRegex: RegExp = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex: RegExp = /^\d+$/;
const main = document.getElementById('cv-form') as HTMLFormElement;
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
};
let fullname = main.fullname as HTMLInputElement;
let job_desc = main.job_desc as HTMLInputElement;
let profile_desc = main.profile_description as HTMLTextAreaElement;
let address = main.address as HTMLInputElement;
let email = main.email as HTMLInputElement;
let website = main.website as HTMLInputElement;
let image = main.image as HTMLImageElement;
let phonenumber = main.phonenumber as HTMLInputElement;

const nameDsp = document.getElementById('fullname_dsp') as HTMLDivElement;
const imageDsp = document.getElementById('image_dsp') as HTMLImageElement;
const phonenoDsp = document.getElementById('phoneno_dsp') as HTMLDivElement;
const emailDsp = document.getElementById('email_dsp') as HTMLDivElement;
const addressDsp = document.getElementById('address_dsp') as HTMLDivElement;
const designationDsp = document.getElementById('designation_dsp') as HTMLDivElement;
const websiteDsp = document.getElementById('summary_dsp') as HTMLDivElement;
const skillsDsp = document.getElementById('skills_dsp') as HTMLDivElement;
const educationsDsp = document.getElementById('educations_dsp') as HTMLDivElement;
const experiencesDsp = document.getElementById('experiences_dsp') as HTMLDivElement;
const profile_Dsp = document.getElementById('profile_desc') as HTMLDivElement;


interface ValueObject {
    [key: string]: string;
}
const fetchValues = (attrs: string[], ...nodeLists: HTMLInputElement[][]): ValueObject[] => {
    const elemsAttrsCount = nodeLists.length;
    const elemsDataCount = nodeLists[0].length;
    const tempDataArr: ValueObject[] = [];

    for (let i = 0; i < elemsDataCount; i++) {
        const dataObj: ValueObject = {};
        for (let j = 0; j < elemsAttrsCount; j++) {
            dataObj[attrs[j]] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
};
const getUserInputs=()=>{
    const achievementsTitleElem = Array.from(document.querySelectorAll('.achieve_title')) as HTMLInputElement[];
    const achievementsDescriptionElem = Array.from(document.querySelectorAll('.achieve_description')) as HTMLInputElement[];
    return {
        fullname:fullname.value,
        job_desc:job_desc.value,
        profile_description:profile_desc.value,
        address:address.value,
        email:email.value,
        website:website.value,
        image:image.ariaValueMax,
        phonenumber:phonenumber.value,
        }
}

const generateCV=()=>{
    const userInputs=getUserInputs();
    console.log(userInputs);
}