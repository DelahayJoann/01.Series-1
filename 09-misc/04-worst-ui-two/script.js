// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {
    let target = document.getElementById('target');
    target.innerHTML = '0460000000';

    let button1 = document.getElementById('part-one');
    let button2 = document.getElementById('part-two');
    let button3 = document.getElementById('part-three');
    let button4 = document.getElementById('part-four');
    
    let button1Value = Number.parseInt(button1.innerHTML);
    let button2Value = Number.parseInt(button2.innerHTML);
    let button3Value = Number.parseInt(button3.innerHTML);
    let button4Value = Number.parseInt(button4.innerHTML);


    button1.addEventListener('click', function(){
        if(button1Value < Number.parseInt(button1.getAttribute('data-max'))){
            button1Value +=1;
        }
        else{
            button1Value = Number.parseInt(button1.getAttribute('data-min'));
        }
    });

    button2.addEventListener('click', function(){
        if(button2Value < Number.parseInt(button2.getAttribute('data-max'))){
            button2Value +=1;
        }
        else{
            button2Value = Number.parseInt(button2.getAttribute('data-min'));
        }
    });

    button3.addEventListener('click', function(){
        if(button3Value < Number.parseInt(button3.getAttribute('data-max'))){
            button3Value +=1;
        }
        else{
            button3Value = Number.parseInt(button3.getAttribute('data-min'));
        }
    });

    button4.addEventListener('click', function(){
        if(button4Value < Number.parseInt(button4.getAttribute('data-max'))){
            button4Value +=1;
        }
        else{
            button4Value = Number.parseInt(button4.getAttribute('data-min'));
        }
    });

    Array.from(document.querySelectorAll("[id^=part-]")).forEach(btn =>
        btn.addEventListener(
            "click",
            () => {
                target.innerHTML = '0'+button1Value;
                (button2Value < 10)? target.innerHTML+='0'+button2Value : target.innerHTML+=button2Value;
                (button3Value < 10)? target.innerHTML+='0'+button3Value : target.innerHTML+=button3Value;
                (button4Value < 10)? target.innerHTML+='0'+button4Value : target.innerHTML+=button4Value;
        },
        ),
    );

})();
