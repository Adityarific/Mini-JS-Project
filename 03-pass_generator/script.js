function generatePassword(){
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
const length = document.getElementById('length').value;
let password = "";
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random()*charset.length);
    password += charset[randomIndex]
    document.getElementById('copyBtn').style.display = "inline-block";
}
document.getElementById('password').textContent = password;
}
function copyPassword(){
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText).then(()=>{
        alert("password copied successfully!!"); 
    })
 
}
