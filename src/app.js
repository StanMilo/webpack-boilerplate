var helloTmpl = require('./templates/hello.hbs')

document.getElementById('hello-container').innerHTML = helloTmpl({name:'World!'})

console.log(helloTmpl);