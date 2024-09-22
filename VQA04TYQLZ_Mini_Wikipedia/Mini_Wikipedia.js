let searchInputel = document.getElementById("searchInput");
let searchResultsel = document.getElementById("searchResults");

function createandappendresult(result) {
    let {
        title,
        link,
        description
    } = result;
    console.log(description)
    let resultel = document.createElement("div");
    resultel.classList.add("search-results")
    searchResultsel.appendChild(resultel);

    let result_title = document.getElementById("a");
    result_title.classList.add("result-title")
    result_title.textContent = title;
    result_title.href = link;
    resultel.appendChild(result_title)

}


function displayresults(search_results) {
    let result = search_results[0]
    createandappendresult(result);

}

function getinput(Event) {
    if (Event.key === "Enter") {
        let searchInput = searchInputel.value;
        let url = "https://apis.ccbp.in/wiki-search/?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
                    .then(function(jsonData) {
                        let {
                            search_results
                        } = jsonData;
                        displayresults(search_results)
                    })
            })
    }
}
searchInputel.addEventListener("keydown", getinput)