var array = [1,2,3,6,4];
var arr2D = [];

function randomArr() {
    let max = 10;
    for (let i = 0; i < max; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    document.getElementById("array").innerHTML = "array = [" + array + "]";
}

function maxArr() {
    randomArr();
    let max = array[0];
    let index = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i + 1;
        }
    }
    // console.log(max, index);
    document.getElementById("result").innerHTML = "Max: " + max + "- Vi tri: " + index;
}

function rever() {
    let isArray = [];
    randomArr();
    maxArr();
    array.reverse()
    isArray = array.join("")
    document.getElementById("rever").innerHTML = "Reverse - array = [" + array + "]" + "<br>" +
        "join - array = [" + isArray + "]";
}

function maxMin() {
    randomArr()
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - i; j > i; j--) {
            if (array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j]
                array[j] = temp;
            }
        }
    }
    document.getElementById("maxMin").innerHTML = "MaxToMin - array = [" + array + "]";
}

function randomArr2D() {
    let max = 3;
    console.log(arr2D)
    document.getElementById("arr2D").innerHTML = "array = [" + arr2D + "]";
}

function character() {
    var character = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-=+-/*"
    var arrayChar = [];
    let max = 10;
    for (let i = 0; i < max; i++)
        arrayChar[i] = character.at(Math.floor(Math.random() * character.length));
    document.getElementById("arrChar").innerHTML = "arrayChar = [" + arrayChar + "]"
}

function check() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    let count = 0;
    let max;
    if (str1.length > str2.length) max = str1.length;
    else max = str2.length;
    for (let i = 0; i < max; i++) {
        if (str1[i] == str2[i]) count++;
    }
    if (count == max) document.getElementById("check").innerHTML = "2 chuoi giong nhau";
    else document.getElementById("check").innerHTML = "2 chuoi khac nhau";
}

function find() {
    let str = document.getElementById("str1").value;

    for (let i = 0; i < str.length; i++)
        if (str[i] === "-") str[i] = 8;
    console.log(str);
}

function converseKgToPound(number) {
    number = parseFloat(number);
    document.getElementById("out").innerHTML = number * 2.20;
}

