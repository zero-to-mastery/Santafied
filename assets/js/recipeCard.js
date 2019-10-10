/* Renders recipes in theRecipes.js file.
   Use recipes.css to add Style
*/

window.onload = function() {
 
    for ( i=0; i < listOf.length; i++) {

        var id = listOf[i].id;
        var name = listOf[i].name;
        var description = listOf[i].description;
        var summary = listOf[i].summary;
        var img = listOf[i].img;
        var link = listOf[i].link;

        if (i == 0) {
                // Creates First Nav Link Element 
                var getListTab = document.getElementById("list-tab");
                var getContentTab = document.getElementById("nav-tabContent");
                //Create Card Nav Link Item.
                getListTab.insertAdjacentHTML("afterbegin", '<a id="'+id+'" class="list-group-item list-group-item-action active" data-toggle="list" href="#'+id+'-a" role="tab" aria-controls="profile">'+name+'</a>');
                
                // Create tabe pane. SET to active.
                tabPane = TabPaneActive(true, id + "-a")
                getContentTab.appendChild(tabPane);
            }
        else{
                //Create Card Nav Link Item.
                var getAncor = document.getElementById(listOf[i-1].id);
                getAncor.insertAdjacentHTML("afterend", '<a id="'+id+'" class="list-group-item list-group-item-action" data-toggle="list" href="#'+id+'-a" role="tab" aria-controls="profile">'+name+'</a>');

                var getContentTab = document.getElementById("nav-tabContent");
                // Create tabe pane. SET to fade.
                var tabPane = TabPaneActive(false, id + "-a");
                getContentTab.appendChild(tabPane);
        } 

        // Create Card 
        var card = CreateCard();
        tabPane.appendChild(card);
        // Create Row 
        var row = CreateRow();
        card.appendChild(row);
        // Create Left Section
        var leftSection = createLeftSection();
        row.appendChild(leftSection);
        // Create Image
        leftSection.appendChild(getImg(img));
        //  Create Summary Points
        var summaryList = summary[0];
        leftSection.appendChild(CreateSummary(summaryList));
        // Create Right Section
        var rightSection = CreateRightSection();
        row.appendChild(rightSection);
        // Create Card Body
        var cardBody = CreateCardBody();
        rightSection.appendChild(cardBody);
        // Create Title
        var cardTitle = CreateCardTitle(name);
        cardBody.appendChild(cardTitle);
        // Create Text
        var mainCardText = CreateMainText(description);
        cardBody.appendChild(mainCardText);
        // Create Footer
        var footer = CreateCardFooter(link);
        cardBody.appendChild(footer);

        $('a[data-toggle="list"]').on('shown.bs.tab', function (e) {
          //e.target // newly activated tab
          //e.relatedTarget // previous active tab
          //$(window).scrollTop(0);
          $("html, body").animate({ scrollTop: 0 },10);
        })
}

function CreateSummary(summary) {
            // takes array {id: id, name: name, age: age}
            if (summary.length != 0) {
                
                var cardSummary = document.createElement("ul");
                for (item in summary) {
                        //console.log(item)
                        var cardPoint = document.createElement("li");
                        cardPoint.appendChild(document.createTextNode(item + ": " +summary[item]));
                        cardSummary.appendChild(cardPoint);
                    }
                //console.log(cardSummary);
                return cardSummary;
            }
            else {

                var cardPoint = document.createElement("li");
                cardPoint.innerHTML = "no summary available";

                return cardPoint;
            }
        }

function TabPaneActive(isActive, id) {

            var tabPane = document.createElement("div");
            tabPane.id = id;

            if (isActive) {
                tabPane.setAttribute("class", "tab-pane active");
            }
            else {
                tabPane.setAttribute("class", "tab-pane fade");
            }

            tabPane.setAttribute("role", "tabpanel");

            return tabPane;
        }

function CreateCard() {

            var card = document.createElement("div");
            card.setAttribute("class", "card-mb-3");

            return card
        }

function CreateRow() {

            var row = document.createElement("div");
            row.setAttribute("class", "row no-gutters");

            return row;
        }

function createLeftSection() {
            var leftSection = document.createElement("div");
            leftSection.setAttribute("class", "col-md-4");

            return leftSection;
        }

function getImg(img) {
            var image = document.createElement("img");
            image.setAttribute("class", "card-img");
            image.setAttribute("src", img);

            return image;
        }

function CreateRightSection() {
            var rightSection = document.createElement("div");
            rightSection.setAttribute("class", "col-md-8");

            return rightSection;
        }

function CreateCardBody() {
                var cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card-body");

                return cardBody;
        }

function CreateCardTitle(name) {
                var cardTitle = document.createElement("h5");
                cardTitle.setAttribute("class", "card-title");
                cardTitle.innerHTML = name;

                return cardTitle;
        }

function CreateMainText(string) {
                var cardText = document.createElement("p");
                cardText.setAttribute("class", "card-text");
                cardText.innerHTML = string;

                //console.log(cardText);
                return cardText;
            }

function CreateCardFooter(link) {

                var smallTextCard = document.createElement("a");
                smallTextCard.setAttribute("class", "btn button-color");
                smallTextCard.setAttribute("role", "button");
                smallTextCard.setAttribute("href", link);
                smallTextCard.innerHTML = "Know More";

                return smallTextCard;
            }

}