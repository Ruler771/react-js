==== Домашнее задание урок 1 ====
  
function loop(times = 0, callback = null){
  if(typeof(callback) === 'function'){
    for(let i = 0; i < times; i++){
     callback();
    }
  }
}

function hello() {
  console.log('hello world')
}

loop(1, hello)

==================================
  
==== Домашнее задание урок 2 ====
  
