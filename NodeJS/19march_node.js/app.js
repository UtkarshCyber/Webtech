let url=require("url")
// console.log(url);
// let myUrl= url.parse('https://users1.pwd@www.exapmle.com:81/sub?id=134&num=2#block')
// console.log(myUrl)

let myUrl= new URL('https://users1.pwd@www.exapmle.com:81/sub?id=134&num=2#block')
console.log(myUrl)
console.log(myUrl.hostname)
console.log(myUrl.password)
console.log(myUrl.host)