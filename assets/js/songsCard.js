window.onload = function () {

    // Sort the songs on title
    const songsSorted = songs.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    // Render songs using HTML template
    songsSorted.forEach(function(song, index){
        renderSong(song, index);
    })
}
    
const renderSong = function (song, index) {
    const { title, description, imageUrl, youtubeUrl, audioUrl, lyrics } = song;
    
    const menuContainer = document.querySelector("#list-tab");
    const cardContainer = document.querySelector("#card-container");

    const menuTemplate = document.querySelector('#menu-template');
    const cardTemplate = document.querySelector('#card-template');

    const menuClone = document.importNode(menuTemplate.content, true);
    const cardClone = document.importNode(cardTemplate.content, true);

    // Menu item
    const menuItem = menuClone.querySelector("a.list-group-item");
    menuItem.textContent = title;

    //Image url
    const images = cardClone.querySelector("img.card-img");
    images.setAttribute('src', imageUrl);

    // Card title
    const cardTitle = cardClone.querySelector("h5.card-title");
    cardTitle.textContent = title;

    // Description
    const cardDescription = cardClone.querySelector("p.card-text");
    cardDescription.innerHTML = description;

    // Caption
    const cardCaption = cardClone.querySelector("figcaption");
    cardCaption.innerHTML = title;

    // Youtube
    if (youtubeUrl && youtubeUrl !== '') {
        const cardYoutube = cardClone.querySelector("small.text-muted a");
        cardYoutube.setAttribute("href", youtubeUrl);
    }

    // Audio
    if (audioUrl && audioUrl !== '') {
        const cardAudio = cardClone.querySelector("audio");
        cardAudio.setAttribute("src", audioUrl);
    }

    // Lyrics
    const cardLyrics = cardClone.querySelector("p#lyrics");
    cardLyrics.innerHTML = lyrics;

    // Set correct ids
    menuClone.querySelector("a").setAttribute("href", `#card${index}`);
    cardClone.querySelector(".tab-pane").setAttribute("id", `card${index}`);
    

    // If first item, make it active
    if (index === 0) {
        menuClone.querySelector("a").classList.toggle('active');
        cardClone.querySelector(".tab-pane").classList.toggle('active');
        cardClone.querySelector(".tab-pane").classList.toggle('show');
    }

    menuContainer.appendChild(menuClone);
    cardContainer.appendChild(cardClone);
};