
// function fun1() {
//     var checkbox = document.getElementById('one');

// if (checkbox.checked) {
//     alert('Выбран');
// }
// else
// {
//     alert('Не выбран');
// }
// }


function fun1() {
    var radio=document.getElementsByName('r1');
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked) {
            alert('Выбран ' +i+ ' Элемент');
            
        } 
    }
}
