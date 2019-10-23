function generateName() {

    let firstLetter = document.getElementById('firstLetter').value,
        userMonth = document.getElementById('selectMonth').value,
        index = 0,
        snowmanName,
        snowmanSurname,
        result = document.getElementById('result');

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const snowNames = ['Carrot', 'Eve', 'Sherry', 'Cozy', 'Teddy', 'Sweetie', 'Hope', 'Cookie', 'Robin', 'Tinsel', 'Joy', 'Sugarplum', 'Sparkle', 'Magic', 'Candy', 'Festive', 'Berry', 'Holly', 'Rosie', 'Twinkle', 'Angel', 'Frostie', 'Bells', 'Merry', 'Jingle', 'Joy'];

    const snowSurnames = ['McSnowflake', 'McSparkles', 'McBlizzard', 'McIcicles', 'McSnowballs', 'McFreeze', 'McFrosty', 'McSparkle', 'McGlisten', 'McChilly', 'McSlushy', 'McSnowy'];

    if (firstLetter && userMonth) {
        index = alphabet.indexOf(firstLetter.toLowerCase());
        snowmanName = snowNames[index];
        snowmanSurname = snowSurnames[userMonth];
        document.getElementById("resultContainer").style.display = "block";
        result.textContent = snowmanName + ' ' + snowmanSurname;
    } else {
        alert('Please input your data first.');
    }

}