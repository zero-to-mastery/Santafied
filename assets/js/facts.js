function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../assets/json/facts.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

$(document).ready(function() {
    function init() {
        loadJSON(function(response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            actual_JSON.facts.forEach(function(element) {
                $("#card-columns").append("<div class='card'><img class='card-img-top img-fluid' src='" + element.img + "' alt='Card image cap'><div class='card-block'><h4 class='card-title'>" + element.title + "</h4><p class='card-text'>" + element.content + "</p></div><div class='card-footer'><small>By " + element.addedBy + "</small></div></div>");

            });
        });
    }
    init();
});