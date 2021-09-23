const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index)=>{
    arrow.addEventListener("click",()=>{
        movieLists[index].style.transform = `translateX(${
            movieLists[index].computedStyleMap().get("transform")[0].x.value
        -270}px)`;
    });
});