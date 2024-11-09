"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateStars(rating) {
    var maxRating = 5;
    var stars = '';
    // Loop through and generate filled stars
    for (var i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars += "<span class=\"star filled\">\u2605</span>";
        }
        else {
            stars += "<span class=\"star\">\u2605</span>";
        }
    }
    return stars;
}
function generateResume(event) {
    var _a;
    var inputElement = document.getElementById('picture');
    var picture = (_a = inputElement === null || inputElement === void 0 ? void 0 : inputElement.files) === null || _a === void 0 ? void 0 : _a[0];
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    var profile_desc = document.getElementById('profile_description').value;
    var fullname = document.getElementById('fullname').value;
    var job_desc = document.getElementById('job_desc').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var email = document.getElementById('fullname').value;
    var address = document.getElementById('job_desc').value;
    var website = document.getElementById('phonenumber').value;
    var skillData = Array.from(document.querySelectorAll('#skill .row half-width')).map(function (entry) {
        var skillname = entry.querySelector('input[name="skillname"]');
        var rating = entry.querySelector('input[name="rating"]');
        var stars = generateStars(parseInt(rating.value));
        return { skillname: skillname, stars: stars };
    });
    var EducationData = Array.from(document.querySelectorAll('#education .row full-width .row half-width')).map(function (entry) {
        var Insname = entry.querySelector('input[name="in_name"]').value;
        var year = entry.querySelector('input[name="year"]').value;
        var degree = entry.querySelector('input[name="degree"]').value;
        return { Insname: Insname, year: year, degree: degree };
    });
    var WorkData = Array.from(document.querySelectorAll('#work .row full-width .row half-width .row full-width')).map(function (entry) {
        var Insname = entry.querySelector('input[name="job"]').value;
        var location = entry.querySelector('input[name="location"]').value;
        var date = entry.querySelector('input[name="date"]').value;
        var description = entry.querySelector('textarea[name="date"]').value;
        return { Insname: Insname, location: location, date: date, description: description };
    });
    var skillList = skillData
        .map(function (skill) { return "\n      <li><p>".concat(skill.skillname, " ---- ").concat(skill.stars, "</p></li>\n    "); })
        .join('');
    var educationList = EducationData.map(function (ed) { return "\n        <li>".concat(ed.Insname, " ---- ").concat(ed.degree, " --- ").concat(ed.year, "</li>\n     "); }).join('');
    var exlist = WorkData.map(function (work) { return "\n    <li>".concat(work.Insname, " ---- ").concat(work.date, " --- ").concat(work.description, " --- ").concat(work.location, "</li>\n "); }).join('');
    var generatedResume = "\n    <div class=\"inside_container\">\n    <div class=\"left_side\">\n    <div class=\"profile_img\">\n        <img src = ".concat(pictureURL, " alt = \"\" width=\"200\" height=\"200\" id = \"image_dsp\">  \n    </div>\n    <div class=\"My_profile\">\n    <div class=\"icon\">\n        <img src=\"user.png\" width=\"20px\" height=\"20px\"/>\n    </div>\n    <div class=\"heading\">\n        <h1 style=\"font-size: 30px;\">My Profile</h1>\n    </div>\n    </div>\n    <div class=\"para\">\n        <p style=\"font-size: 10px;\" id = \"profile_desc\">").concat(profile_desc, "</p>   \n    </div> \n    <div class=\"skilldiv\">\n    <center><div class=\"personal_skill\">\n    <h1 style=\"color: white;font-weight: bold;\">Personal SKill</h1>    \n    </div></center>\n    <div class=\"rating_skill\">\n        <div class=\"name\">\n        <ul>\n              ").concat(skillList, "\n        </ul>\n        </div>\n    </div> \n    </div>\n    <ul>\n    <li>\n    <div class=\"contact\">  \n    <div class=\"contact_icon\">\n        <i class=\"fas fa-phone\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n    </div>\n    <div class=\"details\" style=\"padding: 10px;\" >\n        <span class = \"preview-item-val\" id = \"phoneno_dsp\">").concat(phonenumber, "</span>\n    </div>\n    </div>\n</li>\n<li>\n<div class=\"contact\">\n    <div class=\"contact_icon\">\n        <i class=\"fas fa-envelope\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n    </div>\n    <div class=\"details\" style=\"padding: 10px;\" >\n        <span class = \"preview-item-val\" id = \"email_dsp\">").concat(email, "</span>\n    </div>\n</div>\n</li>\n<li>\n    <div class=\"contact\">\n    <div class=\"contact_icon\">\n        <i class=\"fas fa-globe\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n    </div>\n    <div class=\"details\"  style=\"padding: 10px;\">\n        <span class = \"preview-item-val\" id = \"address_dsp\">").concat(address, "</span>\n    </div>\n    </div>\n</li>\n<li>\n<div class=\"contact\">\n<div class=\"contact_icon\">\n    <i class=\"fas fa-home\" style=\"padding: 10px;color: hotpink;\"></i> \n    </div>\n    <div class=\"details\" style=\"padding: 10px;\">\n        <span class = \"preview-item-val\" id = \"website_dsp\">").concat(website, "</span>\n    </div>\n</div>\n</li>\n</ul>\n</div>\n<div class=\"right_side\">\n<div style=\"font-size: 60px;color: black;\">\n    <h1 style=\"font-size: 30px;\" id = \"fullname_dsp\">").concat(fullname, "</h1>   \n</div>\n<div class=\"job_desc\">\n    <h2 style=\"color: white;\">").concat(job_desc, "</h2>\n</div>\n<div class=\"education\">\n<div class=\"heading1\" style=\"padding: 20px;\">\n    <div class=\"contact\">\n        <div style=\"flex: 20%;\"> \n            <div class=\"star\">\n                *\n                </div>\n        </div>\n    <div class=\"details\">\n        <ul>").concat(educationList, "</ul>\n    </div> \n    </div>\n    <div class=\"data\">Education</div>\n    </div>  \n    <div class=\"experience\">\n                <div class=\"heading1\" style=\"padding: 20px;\">\n                    <div class=\"contact\">\n                        <div style=\"flex: 20%;\"> \n                            <div class=\"star\">\n                                *\n                                </div>\n                        </div>\n                    <div class=\"details\">\n                       <ul>").concat(exlist, "</ul>\n                    </div> \n                    </div>\n                    <div class=\"data1\">Work Experience</div>\n                    </div>       \n                </div>\n            </div>\n            ");
    var resumeDiv = document.getElementById('generatedResume');
    resumeDiv.innerHTML = generatedResume; // Set the resume HTML
}
/*TASK FOR ADDING FORMS */
function addSkill() {
    var section = document.getElementById('skill');
    var skill = document.createElement('div');
    skill.className = 'row half-width';
    skill.innerHTML = "\n    <input type=\"text\" name=\"skillname\" class=\"input-field\" placeholder=\"Skill Name\">\n    <input type=\"number\" name=\"rating\" class=\"input-field\" placeholder=\"Skill Rating\" min=\"1\" max=\"5\">\n   ";
    section === null || section === void 0 ? void 0 : section.appendChild(skill);
}
function addEducation() {
    var section = document.getElementById('education');
    var EduInst = document.createElement('div');
    EduInst.className = 'row full-width';
    EduInst.innerHTML = "\n        <input type=\"text\" name=\"in_name\" class=\"input-field\" placeholder=\"Education Institute\">\n    ";
    section === null || section === void 0 ? void 0 : section.appendChild(EduInst);
    // Second div with a different input style
    var year_degree = document.createElement('div');
    year_degree.className = 'row half-width';
    year_degree.innerHTML = "\n        <input type=\"text\" name=\"year\" class=\"input-field different-style\" placeholder=\"Year\">\n        <input type=\"text\" name=\"degree\" class=\"input-field different-style\" placeholder=\"Degree\">\n        \n    ";
    section === null || section === void 0 ? void 0 : section.appendChild(year_degree);
}
function addWork() {
    var section = document.getElementById('work');
    var job = document.createElement('div');
    job.className = 'row full-width';
    job.innerHTML = "\n    <input type=\"text\" name=\"job\" class=\"input-field\" placeholder=\"Job Name\">\n    ";
    section === null || section === void 0 ? void 0 : section.appendChild(job);
    var location = document.createElement('div');
    location.className = 'row half-width';
    location.innerHTML = "\n    <input type=\"text\" class=\"input-field\" name=\"location\" placeholder=\"location\">\n    <input type=\"text\" class=\"input-field\" name=\"date\" placeholder=\"date\">\n  \n    ";
    section === null || section === void 0 ? void 0 : section.appendChild(location);
    var desc = document.createElement('div');
    desc.className = 'row full-width';
    desc.innerHTML = "\n    <textarea class=\"textarea-field\" rows=\"3\" placeholder=\"Job description\" name=\"description\"></textarea>                \n    ";
    section === null || section === void 0 ? void 0 : section.appendChild(desc);
}
var submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', generateResume);
