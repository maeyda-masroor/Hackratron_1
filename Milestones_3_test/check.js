/*function generateResume(event: Event): void {
    const inputElement = document.getElementById('picture') as HTMLInputElement;
    const picture = inputElement?.files?.[0];
    let pictureURL = '';

    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }

    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;
    const job_desc = (document.getElementById('job_desc') as HTMLInputElement).value;
    const phonenumber = (document.getElementById('phonenumber') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const website = (document.getElementById('website') as HTMLInputElement).value;

    const skillData = Array.from(document.querySelectorAll('#skill .row.half-width')).map(entry => {
        const skillname = (entry.querySelector('input[name="skillname"]') as HTMLInputElement).value;
        const rating = (entry.querySelector('input[name="rating"]') as HTMLInputElement).value;
        return { skillname, rating };
    });

    const educationData = Array.from(document.querySelectorAll('#education .row.full-width')).map(entry => {
        const insname = (entry.querySelector('input[name="in_name"]') as HTMLInputElement).value;
        const year = (entry.querySelector('input[name="year"]') as HTMLInputElement).value;
        const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement).value;
        return { insname, year, degree };
    });

    const workData = Array.from(document.querySelectorAll('#work .row.full-width')).map(entry => {
        const job = (entry.querySelector('input[name="job"]') as HTMLInputElement).value;
        const location = (entry.querySelector('input[name="location"]') as HTMLInputElement).value;
        const date = (entry.querySelector('input[name="date"]') as HTMLInputElement).value;
        const description = (entry.querySelector('textarea[name="description"]') as HTMLTextAreaElement).value;
        return { job, location, date, description };
    });

    const generatedResume = `
    <div class="inside_container">
        <div class="left_side">
            <div class="profile_img">
                <h1>${fullname}</h1>
                <img src="${pictureURL}" alt="Profile Picture" class="forpic">
            </div>
            <p>${job_desc}</p>
            <p>${phonenumber}</p>
            <p>${email}</p>
            <p>${address}</p>
            <p>${website}</p>
            <h3>Skills</h3>
            <ul>
                ${skillData.map(skill => `<li>${skill.skillname}: ${skill.rating}</li>`).join('')}
            </ul>
            <h3>Education</h3>
            <ul>
                ${educationData.map(edu => `<li>${edu.insname}, ${edu.year}, ${edu.degree}</li>`).join('')}
            </ul>
            <h3>Work Experience</h3>
            <ul>
                ${workData.map(work => `<li>${work.job}, ${work.location}, ${work.date}<br>${work.description}</li>`).join('')}
            </ul>
        </div>
    </div>
    `;

    const resumeDiv = document.getElementById('generatedResume') as HTMLDivElement;
    resumeDiv.innerHTML = generatedResume;
}

// Attach event listener after ensuring the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitBtn') as HTMLButtonElement;
    submitButton?.addEventListener('click', generateResume);
});

*/ 
