const original=document.getElementById("password");
const confirm=document.getElementById("confirm");
const originalRules=document.getElementById("rules-password");
const confirmRule=document.getElementById("rule-match");
const rulesOriginal={
    length: document.getElementById("length"),
    upper: document.getElementById("upper"),
    lower: document.getElementById("lower"),
    digit: document.getElementById("digit"),
    special: document.getElementById("special")
};
const ruleConfirm={
    match: document.getElementById("match")
};
original.addEventListener("input", function()
{
    const value=original.value;
    switchRules(rulesOriginal.length, value.length>=8);
    switchRules(rulesOriginal.upper, /[A-Z]/.test(value));
    switchRules(rulesOriginal.lower, /[a-z]/.test(value));
    switchRules(rulesOriginal.digit, /[0-9]/.test(value));
    switchRules(rulesOriginal.special, /[^A-Za-z0-9]/.test(value));
    switchRules(ruleConfirm.match, value===confirm.value&&value.length>0);
});
confirm.addEventListener("input", function()
{
    switchRules(ruleConfirm.match, original.value===confirm.value&&confirm.value.length>0);
});
function switchRules(element, condition)
{
    if((originalRules&&originalRules.matches(":hover"))||(confirmRule&&confirmRule.matches(":hover")))return;
    if(condition)
    {
        element.classList.add("valid");
        element.classList.remove("invalid");
    }
    else
    {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}
const form=document.getElementById("profile-signin");
form.addEventListener("submit", function(event)
{
    event.preventDefault();
    var name, gender, age, email, course, password;
    const original=document.getElementById("password");
    const confirm=document.getElementById("confirm");
    if(original.value!==confirm.value)
    {
        alert("Passwords do not match!");
        return;
    }
    name=document.getElementById('name').value;
    const radio=document.getElementsByName('gender');
    for(let index=0; index<radio.length; index++)
        if(radio[index].checked)
        {
            gender=radio[index].value;
            break;
        }
    age=document.getElementById('age').value;
    email=document.getElementById('email').value;
    course=document.getElementById('course').value;
    password=document.getElementById('password').value;
    console.log("Signin successful.");
    const profile={name, gender, age, email, course, password};
    localStorage.setItem("profile", JSON.stringify(profile));
    window.location.href="suggestions.html";
});