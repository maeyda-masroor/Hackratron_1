import { workerData } from "worker_threads";

function generateStars(rating: number): string {
    const maxRating = 5;
    let stars = '';
  
    // Loop through and generate filled stars
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars += `<span class="star filled">★</span>`;
      } else {
        stars += `<span class="star">★</span>`;
      }
    }
  
    return stars;
  }
function generateResume(event: Event): void {
    const inputElement = document.getElementById('picture') as HTMLInputElement;
    const picture = inputElement?.files?.[0];
    let pictureURL='';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    const profile_desc = (document.getElementById('profile_description') as HTMLTextAreaElement).value;
    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;
    const job_desc = (document.getElementById('job_desc') as HTMLInputElement).value;
    const phonenumber = (document.getElementById('phonenumber') as HTMLInputElement).value;
    const email = (document.getElementById('fullname') as HTMLInputElement).value;
    const address = (document.getElementById('job_desc') as HTMLInputElement).value;
    const website = (document.getElementById('phonenumber') as HTMLInputElement).value;
    const skillData = Array.from(document.querySelectorAll('#skill .row half-width')).map(entry => {
        const skillname = (entry.querySelector('input[name="skillname"]') as HTMLInputElement);
        const rating = (entry.querySelector('input[name="rating"]') as HTMLInputElement);
        const stars = generateStars(parseInt(rating.value));
         return { skillname , stars };

    });
    const EducationData = Array.from(document.querySelectorAll('#education .row full-width .row half-width')).map(entry => {
        const Insname = (entry.querySelector('input[name="in_name"]') as HTMLInputElement).value;
        const year = (entry.querySelector('input[name="year"]') as HTMLInputElement).value;
        const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement).value;
        return { Insname , year , degree };
    });  
    const WorkData = Array.from(document.querySelectorAll('#work .row full-width .row half-width .row full-width')).map(entry => {
        const Insname = (entry.querySelector('input[name="job"]') as HTMLInputElement).value;
        const location = (entry.querySelector('input[name="location"]') as HTMLInputElement).value;
        const date = (entry.querySelector('input[name="date"]') as HTMLInputElement).value;
        const description = (entry.querySelector('textarea[name="date"]') as HTMLTextAreaElement).value;
        return { Insname , location , date ,description };
    });
    const skillList = skillData
    .map(skill => `
      <li><p>${skill.skillname} ---- ${skill.stars}</p></li>
    `)
    .join('');
    const educationList = EducationData.map(ed=>`
        <li>${ed.Insname} ---- ${ed.degree} --- ${ed.year}</li>
     `   
    ).join('')
    const exlist = WorkData.map(work=>`
    <li>${work.Insname} ---- ${work.date} --- ${work.description} --- ${work.location}</li>
 `   
).join('');
    const generatedResume = `
    <div class="inside_container">
    <div class="left_side">
    <div class="profile_img">
        <img src = ${pictureURL} alt = "" width="200" height="200" id = "image_dsp">  
    </div>
    <div class="My_profile">
    <div class="icon">
        <img src="user.png" width="20px" height="20px"/>
    </div>
    <div class="heading">
        <h1 style="font-size: 30px;">My Profile</h1>
    </div>
    </div>
    <div class="para">
        <p style="font-size: 10px;" id = "profile_desc">${profile_desc}</p>   
    </div> 
    <div class="skilldiv">
    <center><div class="personal_skill">
    <h1 style="color: white;font-weight: bold;">Personal SKill</h1>    
    </div></center>
    <div class="rating_skill">
        <div class="name">
        <ul>
              ${skillList}
        </ul>
        </div>
    </div> 
    </div>
    <ul>
    <li>
    <div class="contact">  
    <div class="contact_icon">
        <i class="fas fa-phone" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
    </div>
    <div class="details" style="padding: 10px;" >
        <span class = "preview-item-val" id = "phoneno_dsp">${phonenumber}</span>
    </div>
    </div>
</li>
<li>
<div class="contact">
    <div class="contact_icon">
        <i class="fas fa-envelope" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
    </div>
    <div class="details" style="padding: 10px;" >
        <span class = "preview-item-val" id = "email_dsp">${email}</span>
    </div>
</div>
</li>
<li>
    <div class="contact">
    <div class="contact_icon">
        <i class="fas fa-globe" style="padding: 10px;color: hotpink;"></i> <!-- Home icon from Font Awesome -->
    </div>
    <div class="details"  style="padding: 10px;">
        <span class = "preview-item-val" id = "address_dsp">${address}</span>
    </div>
    </div>
</li>
<li>
<div class="contact">
<div class="contact_icon">
    <i class="fas fa-home" style="padding: 10px;color: hotpink;"></i> 
    </div>
    <div class="details" style="padding: 10px;">
        <span class = "preview-item-val" id = "website_dsp">${website}</span>
    </div>
</div>
</li>
</ul>
</div>
<div class="right_side">
<div style="font-size: 60px;color: black;">
    <h1 style="font-size: 30px;" id = "fullname_dsp">${fullname}</h1>   
</div>
<div class="job_desc">
    <h2 style="color: white;">${job_desc}</h2>
</div>
<div class="education">
<div class="heading1" style="padding: 20px;">
    <div class="contact">
        <div style="flex: 20%;"> 
            <div class="star">
                *
                </div>
        </div>
    <div class="details">
        <ul>${educationList}</ul>
    </div> 
    </div>
    <div class="data">Education</div>
    </div>  
    <div class="experience">
                <div class="heading1" style="padding: 20px;">
                    <div class="contact">
                        <div style="flex: 20%;"> 
                            <div class="star">
                                *
                                </div>
                        </div>
                    <div class="details">
                       <ul>${exlist}</ul>
                    </div> 
                    </div>
                    <div class="data1">Work Experience</div>
                    </div>       
                </div>
            </div>
            `
    const resumeDiv = document.getElementById('generatedResume') as HTMLDivElement;
    resumeDiv.innerHTML = generatedResume; // Set the resume HTML
 

}
/*TASK FOR ADDING FORMS */
function addSkill() {
    const section = document.getElementById('skill');
    const skill = document.createElement('div');
    skill.className = 'row half-width';
    skill.innerHTML = `
    <input type="text" name="skillname" class="input-field" placeholder="Skill Name">
    <input type="number" name="rating" class="input-field" placeholder="Skill Rating" min="1" max="5">
   `;
    section?.appendChild(skill);
}
function addEducation() {
    const section = document.getElementById('education');
    const EduInst = document.createElement('div');
    EduInst.className = 'row full-width';
    EduInst.innerHTML = `
        <input type="text" name="in_name" class="input-field" placeholder="Education Institute">
    `;
    section?.appendChild(EduInst);

    // Second div with a different input style
    const year_degree = document.createElement('div');
    year_degree.className = 'row half-width';
    year_degree.innerHTML = `
        <input type="text" name="year" class="input-field different-style" placeholder="Year">
        <input type="text" name="degree" class="input-field different-style" placeholder="Degree">
        
    `;
    section?.appendChild(year_degree);

}
function addWork() {
    const section = document.getElementById('work');
    const job = document.createElement('div');
    job.className = 'row full-width';
    job.innerHTML = `
    <input type="text" name="job" class="input-field" placeholder="Job Name">
    `;
    section?.appendChild(job);
    const location = document.createElement('div');
    location.className = 'row half-width';
    location.innerHTML = `
    <input type="text" class="input-field" name="location" placeholder="location">
    <input type="text" class="input-field" name="date" placeholder="date">
  
    `
    section?.appendChild(location);

    const desc = document.createElement('div');
    desc.className = 'row full-width';
    desc.innerHTML = `
    <textarea class="textarea-field" rows="3" placeholder="Job description" name="description"></textarea>                
    `
    section?.appendChild(desc);
}
const submitButton = document.getElementById('submitBtn') as HTMLButtonElement;
submitButton.addEventListener('click', generateResume);
