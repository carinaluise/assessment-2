var title = document.getElementById("title");

title.addEventListener("mouseover" , (e) =>{
    title.innerHTML = "White"
})

title.addEventListener("mouseout" , (e) =>{
    title.innerHTML = "Black"
})