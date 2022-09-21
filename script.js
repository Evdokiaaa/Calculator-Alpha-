let a = ''; // first number

let b = ''; //second number

let sign = ''; // знак операции

let finish = false;

let counterForC = 1;

let counterForEquals=0;


const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
const action = ['-','+','X','/','%','C'];

//экран калькулятор

const screen = document.querySelector('.start-number');


//кнопокчки и кнопки очистки
const btnClear = document.querySelector('.clear');
const btns = document.querySelector('.btns')
const clearOneNumber = document.querySelector('.ClearByOne');


//наша функция очистки (готова(можно в конец поместить))
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
    if (event.target.classList.contains('clear')) return;
    const key = event.target.textContent; // получаем кнопку

    if (numbers.includes(key)){
        if(b==='' && sign ===''){ 
            a+=key;
            screen.textContent = a;
        }
        else if(a!=='' && sign !== '' && finish){
            b=key;
            finish = false;
            screen.textContent=b;

        }
        else{
            b+=key;
            screen.textContent = b;
        }
        return
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

        if(a===''){ 
            screen.textContent=0;
        } else if (a!=='' && b!=='' && sign!==''){
            finish = true; 
            screen.textContent = a; 
            
            return

        }
         
        
    }


});


