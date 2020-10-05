// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    document.getElementById('run').addEventListener('click', function(){
        const removeSet = new Set([
            "apple",
            "cherry",
            "banana",
            "kiwi"
        ]);
        let newSet = fruits;
        removeFromFruits(newSet,removeSet);
        console.log(newSet);
    });

    function removeFromFruits(theFruits, removeSet) {
        [...removeSet].forEach(function(v) {
          theFruits.delete(v); 
        });
    }

})();
