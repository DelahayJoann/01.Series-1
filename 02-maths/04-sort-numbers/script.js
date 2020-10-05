// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    function sortArray(anArray, count = 0){
        let pos = count;
        let val = anArray[count];
    
        if(count >= anArray.length){return null;}
        for (i = count; i < anArray.length;i++){
            if(anArray[i] < val){
                val = anArray[i];
                pos = i;
            }
        }
        anArray[pos] = anArray[count];
        anArray[count] = val;
        count++;
        
        sortArray(anArray, count);
    
        return anArray;
    }

    document.getElementById("run").addEventListener("click", () => {

        let array = document.getElementById("numbers").value.split(', ');
        for(var i=0; i<array.length;i++) array[i] = +array[i];
        alert(sortArray(array));
    });

})();
