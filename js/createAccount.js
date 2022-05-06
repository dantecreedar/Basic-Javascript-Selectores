/**
 * ======================================
 * Contiene la logica de createAccount
 * ======================================
 */


const createAccountButton = document.getElementById('createAccount')
const allowPolicyCheck = document.getElementById('policyCheck')

createAccountButton.addEventListener('click', () => {
    const createAccountForm = document.getElementById('cardCreateAccount')
    createAccountForm.classList.toggle('d-none')
})

allowPolicyCheck.addEventListener('change', () => {

    const createButton = document.getElementById('create')
    const isDisabled = createButton.hasAttribute('disabled')

    if (isDisabled) {
        createButton.removeAttribute('disabled')
    } else {
        createButton.setAttribute('disabled', true)
    }
})
