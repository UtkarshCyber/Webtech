let form=document.getElementById('form')
console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let fname=document.getElementById('fname').value
    let mob=document.getElementById('mob').value
    let email=document.getElementById('email').value
    let password=document.getElementById('pwd').value
    let r_pwd=document.getElementById('rpwd').value
    if(fname==''|| mob==''||email==''||password==''||r_pwd==''){
        alert("Please enter your details")
    }
    else if(password!=r_pwd){
        alert("Password mismathed")
    }
    else{
        console.log(fname,mob,email,password,r_pwd)
        localStorage.setItem("username",email)
        localStorage.setItem("password",password)
        window.open("./login.html")
        window.location.reload()
    }
})