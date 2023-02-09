// console.log(this)

const obj = {
  name: "Amit",
  f1: function () {
    console.log(this)
  },
  f2: () => {
    console.log(this)
  }
}

const fn = () => {
  console.log(this)
}

function fun() {
  console.log(this)
}

fun()
fun.call(obj)
fn()
fn.call(obj)

obj.f1()
obj.f2()
