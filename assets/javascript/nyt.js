// set up the ajax call to get articles 

// set up button functions 

// append articles to a div 


function displayArticles() {

    var search = $(this).attr("data-search");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=xyz" + search + "&api-key=e4853a93e7db43548369210468ccc6de"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);





    })





};

displayArticles();