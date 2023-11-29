// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

// console.log(typeof(123))
console.log(menu);