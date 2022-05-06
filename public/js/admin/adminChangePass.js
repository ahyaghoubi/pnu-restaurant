'use strict'

const changePassTitle = document.querySelector('#changePassTitle')
const currentPass = document.querySelector('#currentPass')
const newPass = document.querySelector('#newPass')
const repeatNewPass = document.querySelector('#repeatNewPass')

const changeButton = document.querySelector('#changeButton')

changeButton.addEventListener('click', (e) => {
    changeButton.disabled = true
    changePassTitle.textContent = 'تغییر رمز (در حال انجام...)'
    fetch('/api/admin', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + adminToken
        },
        body: JSON.stringify({
            currentPass: currentPass.value,
            newPass: newPass.value,
            repeatNewPass: repeatNewPass.value
        })
    }).then(errorHandler).then((res) => res.json()).then((data) => {
        changePassTitle.textContent = 'تغییر رمز (رمز با موفقیت تغییر یافت)'
        changeButton.disabled = false
    }).catch((e) => {
        changeButton.disabled = false
        errorMessage(2, changePassTitle)
    })
})