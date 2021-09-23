const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
        const itemNumber = movieLists[index].querySelectorAll("img").length;
        let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) > 0){
           movieLists[index].style.transform = `translateX(${
            movieLists[index].computedStyleMap().get("transform")[0].x.value
        -300}px)`; 
        } else{
            movieLists[index].style.transform = "transflateX(0)"
        }
    });

    console.log(movieLists[index].querySelectorAll("img").length)
});