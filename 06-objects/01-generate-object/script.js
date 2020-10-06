// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    const Person = {
        Firstname: "Joann",
        Lastname: "D.",
        Age: "37",
        City: "Nivelles",
        Country: "Belgique"
      }

      document.getElementById('run').addEventListener('click', function(){
        console.log(Person);
    });
})();
