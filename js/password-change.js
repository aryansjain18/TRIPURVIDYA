const original=document.getElementById("password");
const check=document.getElementById("confirm");
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
    switchRules(ruleConfirm.match, value===check.value&&value.length>0);
});
check.addEventListener("input", function()
{
    switchRules(ruleConfirm.match, original.value===check.value&&check.value.length>0);
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
    const original=document.getElementById("password");
    const check=document.getElementById("confirm");
    if(original.value!==check.value)
    {
        alert("Passwords do not match!");
        return;
    }
    let password=document.getElementById('password').value;
    const profile=JSON.parse(localStorage.getItem("profile")) || {};
    profile.password=original.value;
    localStorage.setItem("profile", JSON.stringify(profile));
    window.location.href="password.html";
});