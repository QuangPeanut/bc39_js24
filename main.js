// Bài tập 1
var number_1 = document.getElementById("number_1");
var number_2 = document.getElementById("number_2");
var number_3 = document.getElementById("number_3");
var btn = document.getElementById("btn");
var ketqua = document.getElementById("ketqua");
btn.onclick = function () {
    var arr = [number_1.value, number_2.value, number_3.value]
    arr.sort((a, b) => a - b);
    //     for (var i = 0; i <= arr.length; i++) {
    //         for (var j = i + 1; j < arr.length; j++)
    //             if (arr[i] > arr[j]) {
    //                 var temp = arr[j]
    //                 arr[j] = arr[i]
    //                 arr[i] = temp
    //             }
    //     }
    ketqua.innerHTML = arr.join();
}

// Bài tập 2
var people = document.getElementById("people");
var btn_people = document.getElementById("btn-people");
var computer = document.getElementById("computer");

btn_people.onclick = function () {
    var person = people.value;
    var temp;
    if (person === 'Bo' || person === 'Bố') {
        temp = person;
    }
    if (person === 'Me' || person === 'Mẹ') {
        temp = person;
    }
    if (person === 'Anh Trai' || person === 'anhtrai' || person === 'Anhtrai' || person === 'Anh trai') {
        temp = person;
    }
    if (person === 'Em Gai' || person === 'Em Gái' || person === 'emgai' || person === 'Emgai' || person === 'em gái') {
        temp = person;
    }
    computer.innerHTML = "Chào " + temp;
}

// Bài 3

var btnEven = document.getElementById('btn-even');
var ketQuaEven = document.getElementById('ketqua-even');
btnEven.onclick = function () {
    var odd = 0;
    var even = 0;
    var evenNumber1 = document.getElementById('even_number1').value;
    var evenNumber2 = document.getElementById('even_number2').value;
    var evenNumber3 = document.getElementById('even_number3').value;
    if (evenNumber1 % 2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }

    if (evenNumber2 % 2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }
    if (evenNumber3 % 2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }
    ketQuaEven.innerHTML = `Số chẵn: ${even}, Số lẻ: ${odd}`

}