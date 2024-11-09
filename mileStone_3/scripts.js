var main = document.getElementById('cv-form');
var fullname = main.fullname;
var job_desc = main.job_desc;
var profile_desc = main.profile_description;
var address = main.address;
var email = main.email;
var website = main.website;
var image = main.image;
var phonenumber = main.phonenumber;
function fetchValues(elements) {
    return Array.from(elements).map(function (element) { return element.value; });
}
var getUserInputs = function () {
    var skillElements = document.querySelectorAll('input[name="skillname[]"]');
    var skillRatings = document.querySelectorAll('input[name="rating[]"]');
    return {
        fullname: fullname.value,
        job_desc: job_desc.value,
        profile_description: profile_desc.value,
        address: address.value,
        email: email.value,
        website: website.value,
        image: image.ariaValueMax,
        phonenumber: phonenumber.value,
        skills: fetchValues(skillElements),
        ratings: fetchValues(skillRatings),
    };
};
var generateCV = function () {
    var userInputs = getUserInputs();
    console.log(userInputs);
};
