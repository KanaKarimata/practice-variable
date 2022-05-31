// 再宣言できるのはvar
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// 再代入できるのはvar,let
var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

// varは関数スコープとグローバルスコープ（有効範囲）
var str = "webcamp" // グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// // console.log(y)

// letのスコープ,constのスコープ
// function foo () {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// 巻き上げ（ホイスティング）
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()







