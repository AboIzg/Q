document.getElementById('submit').onclick = e => {

    e.preventDefault();

    let sum = +document.getElementById('number').value;
    let name = document.getElementById('name').value;
let letter = document.getElementById('letter').value;

    if(!sum || !name){
        alert('Name or bid is empty!');
        return;
    }

    let selects = document.querySelectorAll('.select_cf');
    for(let i = 0; i < selects.length; i++){
        sum *= +selects[i].value;
    }

    let checkbox = document.querySelectorAll('.input_cf');
    for(let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            sum *= +selects[i].value;					
        }
    }

    let pluses = document.querySelectorAll('.input_plus');
    for(let i = 0; i < pluses.length; i++){
        if(pluses[i].checked){
            sum += +pluses[i].value;
        }
    }

    alert(`${name}: ${sum}, ${letter}`);

}