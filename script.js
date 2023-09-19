const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
const action = ['-','+','X','/','%','C'];

let a = ''; // first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;
let counterForC = 1;
let counterForEquals=0;



//экран калькулятор

const screen = document.querySelector('.start__number');


//кнопокчки и кнопки очистки
const btnClear = document.querySelector('.clear');
const btns = document.querySelector('.btns')
const clearOneNumber = document.querySelector('.ClearByOne');


//наша функция очистки (готова(можно в конец поместить)) //Looks good
btnClear.addEventListener('click',() =>{
    a = ''; 
    b = '';
    sign = ''; 
    finish = false;
    screen.textContent = 0;

});

clearOneNumber.addEventListener('click',()=>{
    if (a!=='' && sign === ''){
        a = a.slice(0,-1);
        screen.textContent=a;
    }
    
    else if(a!=='' && sign !==''){
        b=b.slice(0,-1);
        screen.textContent=b;

    }    
        
    if (a<=0){  
        screen.textContent=0;                          
    }else if(b==='' && a!=='' && sign!==''){
        screen.textContent=0;
        
    }
    ++counterForC; // изменить название
});



btns.addEventListener('click',(event)=>{
    if (!event.target.classList.contains('calc_button')) return; // если кликну в промежуток, то выходим
    if (event.target.classList.contains('clear')) return; //Если кликаем на clear, то выходим из обработчика и запускаем другую ф
    const key = event.target.textContent; // получаем текст кнопки ( 1,2.. x, % ..)

    if (numbers.includes(key)){ //Если есть циферки, то
        if(b==='' && sign ===''){ //Все очищаем(потом переделать)
            a+=key; //Добавляем первую нашу букву
            screen.textContent = a;
        }
        else if(a!=='' && sign !== '' && finish){
            b=key; //Добавляем вторую циферку , если ввели знак и а
            finish = false;
            screen.textContent=b;

        }
        else{
            b+=key; //Добавляем б, потом фиксануть
            screen.textContent = b;
        }
        return //выходим если не цифра
    }

    if (action.includes(key)){ // если нажата * / ..
        sign = key;
        screen.textContent=sign;
        return
    }
    

    // равно
    if(key==='=' ){
        switch(sign){
            case '-':
                a=a-b;
                break;
            case '+':
                a=(+a) + (+b);
                break;
            case '/':
                a=a/b;
                a = a.toFixed(2);
                break;
            case 'X':
                a = a*b;
                break;
            case '%':
                a = a%b;
                break;
        };
        //Короче переделываем данную функцию, мне не нравится многое
        if(a===''){ 
            screen.textContent=0;
        } else if (a!=='' && b!=='' && sign!==''){
            finish = true; 
            screen.textContent = a;
            return

        }
         
        
    }


});


