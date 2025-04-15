// ! Start Global Variables For LogIn
var incorrectMsg = document.getElementById('incorrect')
var logMailInput = document.getElementById('logMail')
var logPassInput = document.getElementById('logPass')
var LogInToProject = document.getElementById('LogIn')
var goToSignAncor = document.getElementById('goToSign')
var logSection = document.querySelector('.log-box')
// ! Start Global Variables
var signUserNameInput = document.getElementById('signUserName')
var signMailInput = document.getElementById('signMail')
var signPassInput = document.getElementById('signPass')
var saveDataBtn = document.getElementById('saveData')
var goToLogAncor = document.getElementById('goToLog')
var logEmail;
var logPass;
var sinSection = document.querySelector('.sin-box')
var success = document.querySelector('.success')
var InValid = document.querySelector('.InValid')
var mainSection = document.querySelector('.main-box')




var arr = []
if(JSON.parse(window.localStorage.getItem('signData')) != null) {
    arr = JSON.parse(window.localStorage.getItem('signData'))
}

function save() {
    if( validName() && validEmail() && validPassword() ) {
        var userData = {
            SignUserName: signUserNameInput.value,
            SignEmail: signMailInput.value,
            SignPassword: signPassInput.value,
        }
        arr.push(userData)
        window.localStorage.setItem('signData', JSON.stringify(arr))
        success.classList.remove('d-none')
        InValid.classList.add('d-none')
        console.log(userData);
    }else{
        InValid.classList.remove('d-none')
        success.classList.add('d-none')
    }
}
// saveDataBtn.addEventListener('click',function() {
//     if( validName() && validEmail() && validPassword() ) {
//         var userData = {
//             SignUserName: signUserNameInput.value,
//             SignEmail: signMailInput.value,
//             SignPassword: signPassInput.value,
//         }
//         arr.push(userData)
//         window.localStorage.setItem('signData', JSON.stringify(arr))
//         success.classList.remove('d-none')
//         InValid.classList.add('d-none')
//         console.log(userData);
//     }else{
//         InValid.classList.remove('d-none')
//         success.classList.add('d-none')
//     }
// })

function validName() {
    var nameMsg = document.getElementById('nameMsg')
    var regex = /[A-Z][A-Za-z0-9]{2,20}/
    var txt = signUserNameInput.value
    if(regex.test(txt)) {
        nameMsg.classList.add('d-none')
        return true
    }else {
        nameMsg.classList.remove('d-none')
        return false
    }
}
function validEmail() {
    var mailMsg = document.getElementById('mailMsg')
    var regex = /.+@.+\..+/
    var txt = signMailInput.value
    if(regex.test(txt)) {
        mailMsg.classList.add('d-none')
        return true
    }else {
        mailMsg.classList.remove('d-none')
        return false
    }
}
function validPassword() {
    var passMsg = document.getElementById('passMsg')
    var regex = /.{8,}/
    var txt = signPassInput.value
    if(regex.test(txt)) {
        passMsg.classList.add('d-none')
        return true
        
    }else {
        passMsg.classList.remove('d-none')
        return false
    }
}

function goToLog() {
    sinSection.classList.add('d-none')
    logSection.classList.remove('d-none')
    clear() 
}

function goToSign() {
    sinSection.classList.remove('d-none')
    logSection.classList.add('d-none')
    clear() 
}

function clear() {
    signUserNameInput.value = ''
    signMailInput.value = ''
    signPassInput.value = ''
    logMailInput.value = ''
    logPassInput.value = ''
    success.classList.add('d-none')
    InValid.classList.add('d-none')
}

LogInToProject.addEventListener('click', function(e) {
    var loguserData = {
        logEmail: logMailInput.value,
        logPassword: logPassInput.value,
    }
    
    for(var i =0; i < arr.length; i++) {
        console.log(arr[i].SignEmail);
        if( arr[i].SignEmail == loguserData.logEmail && arr[i].SignPassword == loguserData.logPassword ) {
            console.log(true);
            mainSection.classList.remove('d-none')
            sinSection.classList.add('d-none')
            logSection.classList.add('d-none')
            document.querySelector('.welcom').innerHTML = `Welcome ${arr[i].SignUserName}`
        }else {
            incorrectMsg.classList.remove('d-none')
        }
    }
})

function sweetAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "incorrect email or password!",
    });
}

var logOutBtn = document.getElementById('logOut')

logOutBtn.addEventListener('click',function () {
    mainSection.classList.add('d-none')
    sinSection.classList.remove('d-none')

})