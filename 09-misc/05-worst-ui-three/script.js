// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    let target = document.getElementById('target');
    target.innerHTML = '0460000000';

    let button1 = document.getElementById('fix-part-one');
    let button2 = document.getElementById('fix-part-two');
    let button3 = document.getElementById('fix-part-three');
    let button4 = document.getElementById('fix-part-four');

    let button1Check = true;
    let button2Check = true;
    let button3Check = true;
    let button4Check = true;
    
    let button1Value = Number.parseInt(document.getElementById('part-one').value);
    let button2Value = Number.parseInt(document.getElementById('part-two').value);
    let button3Value = Number.parseInt(document.getElementById('part-three').value);
    let button4Value = Number.parseInt(document.getElementById('part-four').value);

    slotMachine();

    function slotMachine(){
        if((button1Value < Number.parseInt(document.getElementById('part-one').getAttribute('data-max')))&& button1Check){
            button1Value +=1;
            document.getElementById('part-one').value = button1Value;
        }else if(button1Check){
            button1Value = Number.parseInt(document.getElementById('part-one').getAttribute('data-min'));
            document.getElementById('part-one').value = button1Value;
        }

        if((button2Value < Number.parseInt(document.getElementById('part-two').getAttribute('data-max')))&& button2Check){
            button2Value +=1;
            document.getElementById('part-two').value = button2Value;
        }else if(button2Check){
            button2Value = Number.parseInt(document.getElementById('part-two').getAttribute('data-min'));
            document.getElementById('part-two').value = button2Value;
        }

        if((button3Value < Number.parseInt(document.getElementById('part-three').getAttribute('data-max')))&& button3Check){
            button3Value +=1;
            document.getElementById('part-three').value = button3Value;
        }else if(button3Check){
            button3Value = Number.parseInt(document.getElementById('part-three').getAttribute('data-min'));
            document.getElementById('part-three').value = button3Value;
        }

        if((button4Value < Number.parseInt(document.getElementById('part-four').getAttribute('data-max')))&& button4Check){
            button4Value +=1;
            document.getElementById('part-four').value = button4Value;
        }else if(button4Check){
            button4Value = Number.parseInt(document.getElementById('part-four').getAttribute('data-min'));
            document.getElementById('part-four').value = button4Value;
        }

        if(button1Check || button2Check || button3Check || button4Check){
            setTimeout(() => {
                slotMachine()
            }, 10);
        }
    }

    button1.addEventListener('click', function(){
        if(button1Check){
            button1Check = false;
            button1.innerHTML = 'Start';
        }else{
            button1Check = true;
            button1.innerHTML = 'Stop';
            slotMachine();
        }
        
    });

    button2.addEventListener('click', function(){
        if(button2Check){
            button2Check = false;
            button2.innerHTML = 'Start';
        }else{
            button2Check = true;
            button2.innerHTML = 'Stop';
            slotMachine();
        }
    });

    button3.addEventListener('click', function(){
        if(button3Check){
            button3Check = false;
            button3.innerHTML = 'Start';
        }else{
            button3Check = true;
            button3.innerHTML = 'Stop';
            slotMachine();
        }
    });

    button4.addEventListener('click', function(){
        if(button4Check){
            button4Check = false;
            button4.innerHTML = 'Start';
        }else{
            button4Check = true;
            button4.innerHTML = 'Stop';
            slotMachine();
        }
    });

    Array.from(document.querySelectorAll("[id^=fix-part-]")).forEach(btn =>
        btn.addEventListener(
            "click",
            () => {
                if(!button1Check && !button2Check && !button3Check && !button4Check){
                    target.innerHTML = '0'+button1Value;
                    (button2Value < 10)? target.innerHTML+='0'+button2Value : target.innerHTML+=button2Value;
                    (button3Value < 10)? target.innerHTML+='0'+button3Value : target.innerHTML+=button3Value;
                    (button4Value < 10)? target.innerHTML+='0'+button4Value : target.innerHTML+=button4Value;
                }
        },
        ),
    );
})();