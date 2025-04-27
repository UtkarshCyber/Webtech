let form=document.getElementById('form')
console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let loginName=document.getElementById('email').value
    let loginpwd=document.getElementById('pwd').value
    console.log(loginName,loginpwd)
    let username=localStorage.getItem('username')
    let password=localStorage.getItem('password')
    console.log(username,password)
    if(loginName==''||loginpwd==''){
        alert("Please enter your credentials")
    }
    else if(loginName==username && loginpwd==password){
        alert("Login Successfully")
        window.open("./home.html")
        window.location.reload()
    }
    else{
        alert("Invalid Credentials")
    }
})