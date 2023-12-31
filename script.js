const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgGrpContainerEl = document.querySelector(".img-grp-container");
const imgEl = document.querySelectorAll("img");

let timeout;

let currentImg = 1;

nextEl.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg(){
    if(currentImg > imgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgEl.length;
    }
    imgGrpContainerEl.style.transform = `translateX(-${(currentImg -1) * 500}px)`

    timeout = setTimeout(()=>{
        currentImg++;
        updateImg()
    }, 3000)
}

