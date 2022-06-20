function submitMail(event) {
    event.preventDefault()
    var email_input = event.currentTarget[0]
    var button = event.currentTarget[1]
    var email = email_input.value
    email_input.disabled = true
    button.disabled = true
    /*fetch('https://it-thesis.us13.list-manage.com/subscribe/post-json?' + new URLSearchParams({
        u: '38d4a003677139c8d70ce7e74',
        id: '86ac8bc96a',
        EMAIL: email
    }))*/
}

function studentMail(event) {
    submitMail(event)
    document.getElementById("student-notification").classList.add("notification-visible")
}
function companyMail(event) {
    submitMail(event)
    document.getElementById("company-notification").classList.add("notification-visible")
}


window.onload = function(){
    student_form = document.getElementById("student-from");
    student_form.addEventListener("submit", studentMail);
    company_form = document.getElementById("company-from");
    company_form.addEventListener("submit", companyMail);
};

