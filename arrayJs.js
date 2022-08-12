function screen() {
    let sout = " ";
    let x = +document.getElementById("x").value;
    let y = +document.getElementById("y").value;
    let a = +document.getElementById("x1").value;
    let b = +document.getElementById("y1").value;
    //tao mang 2 chieu
    let array2D = [];
    for (let i = 0; i < 10; i++) {
        array2D[i] = [];
    }
    //duyet mang 2 chieu
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            array2D[i][j] = 0;
            sout = sout + array2D[i][j] + " ";
        }
        sout += "<br>";
    }

    //duyet mang
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (i == a && j == b) {
                array2D[i][j] = 1;
                sout = sout + array2D[i][j] + " ";
            } else {
                array2D[i][j] = 0;
                sout = sout + array2D[i][j] + " ";
            }
        }
        sout += "<br>";
    }
    document.getElementById("screen").innerHTML = sout;
}

function suaGiaTri() {
    screen();
    let sout = " ";
    let a = +document.getElementById("x1").value;
    let b = +document.getElementById("y1").value;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            array2D[i][j] = 1;
            sout = sout + array2D[i][j] + " ";
            break;
        }
        sout += "<br>";
    }

    document.getElementById("screen").innerHTML = sout;
}


function gameScreen() {
    window.location = "arrayV2.html";
}

let x = 0;
let array = Array();
let b = [3, 2, 5, 7676, 3, 58, 1, 57, 5, 9];
let c = ["Red", "Green", "White", "Black"];
let d = [];

function add() {
    array[x] = document.getElementById("txtValue").value;
    x++;
    document.getElementById("txtValue ").value = "";
}

function display() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}

function reverse() {
    let screen = "<hr>";
    let indexFirst = 0;
    let indexLast = array.length - 1;
    while (indexFirst < indexLast) {
        let b = array[indexFirst];
        array[indexFirst] = array[indexLast];
        array[indexLast] = b;
        indexFirst++;
        indexLast--;
    }
    screen += array + " ";
    document.getElementById("result").innerHTML = screen;
}

function checkArray() {
    let text = document.getElementById("random").value;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == text) {
            a = i + 1;
            document.getElementById("result").innerHTML = "Ma " + text + " vua nhap o vi tri thu " + a;
            break;
        }
    }
}

function max() {
    // let a = [3, 5, 9, 45, 1, 32, 2];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        }
    }
    document.getElementById("result").innerHTML = max;
}

function splice() {
    let i, j;
    // array.splice(1, 3);
    // document.write(array + " ");
    //
    // document.write(c.join(",") + "<br>")
    // for (i = 0, j = 0; i < b.length; i++) {
    //     d[j] = b[i];
    //     if (b[i] % 2 == 0) {
    //         d.push('-');
    //         j++;
    //     }
    //     j++;
    // }
    // d=d.join("")
    // document.write(b+"<br>");
    // document.write(d)
    let newString = c.toString(); // Array to Sring
    let m=newString.toUpperCase()
    c= m.split(" ,"); //   String to Array
    console.log(c);


}
