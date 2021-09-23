const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index)=>{
    arrow.addEventListener("click",()=>{
        movielists[index].style.transform = "translateX(-100px)"
    })
})