let boxes = document.querySelectorAll(".boxes");
let startPlayer = "X"
let moves = ["","","","","","","","",""];
h1 = document.querySelector("h1");
const winning = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];


boxes.forEach((box,index) => {
box.addEventListener("click" , function(){
    if(box.textContent === ""){
        box.textContent = startPlayer;
        moves[index] = startPlayer ;
        console.log(startPlayer);
        startPlayer = startPlayer === "X" ? "O" : "X";
        winner();
        }
});
});

function winner (){
   for(let i = 0; i < winning.length; i++){
        let [a, b, c] = winning[i];
        if(moves[a] === moves[b] && moves[b] === moves[c] && moves[a] !== ""){
                setTimeout(() => {
                    h1.textContent = `Player ${moves[a]} wins`;
                }, 100);
                setTimeout(() => {
                    reset();
                    h1.textContent = "";
                }, 2000);
                return;
                } 
                if (!moves.includes("")) { // .includes check if that value is present in the array or not.
                    setTimeout(() => {
                        h1.textContent = "It's Draw";
                    }, 100);
                    setTimeout(() => {
                        reset();
                        h1.textContent = "";
                    }, 2000);
                }
            }
        };

        function reset() {
            moves.fill(""); // .fill replace the value of array.
            boxes.forEach(box => box.textContent = "");
            startPlayer = "X";
        }
        