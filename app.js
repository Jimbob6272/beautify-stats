//Selectors
const statInput = document.querySelector('.stat-input');
const statInput2 = document.querySelector('.stat-input2');
const statButton = document.querySelector('.stat-button');
const statList = document.querySelector('.stat-list');



//Event Listeners
statButton.addEventListener('click', addStat,);


//Functions
    //Randomize color
    var color = ['#ffb833','#16a085',  '#715d8f','#3e4c5a'];
    var i = 0;
    document.querySelector('.stat-button').addEventListener("click", function addColor(){
        i = i < color.length ? ++i : 0;
    });

function addStat(event) {
    //prevent form from submitting
    event.preventDefault();
    //stat DIV
    const statDiv = document.createElement('div');
    statDiv.classList.add('stat');
    statDiv.style.borderColor = color[i];
    //Create h2
    const newStat = document.createElement('h2');
    newStat.innerText = statInput.value;
    newStat.style.color = color[i];

    statDiv.appendChild(newStat);

    //create p
    const newStat2 = document.createElement('p');
    newStat2.innerText = statInput2.value;
    statDiv.appendChild(newStat2);






    //Append to div
    statList.appendChild(statDiv);
    //Clear input value
    statInput.value = '';
    statInput2.value = '';

}
