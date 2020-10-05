
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    for(i=1;i<101;i++){
        if((i%3 == 0) || (i%5 == 0)){
            if((i%3 == 0) && (i%5 == 0)){
                console.log('fizzbuzz')
            }else{
                (i%3 == 0)?console.log('fizz'):'';
                (i%5 == 0)?console.log('buzz'):'';
            }
        }else{
            console.log(i);
        }
    }

})();
