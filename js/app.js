
document.addEventListener("DOMContentLoaded",function(){
/* 콜백함수 */ 
    const progressBar = document.querySelectorAll(".progress-bar");
    progressBar.forEach(bar => {
        const target = bar.getAttribute("data-bs-target");
        setTimeout(() => {
            bar.style.width = target + "%";
        },500)/*0.5초동안(setTimeout) 이 일을 해줘 = 인터벌이랑 비슷한데 얘는 안꺼줘도 돼 */
    })
})
/* Document Object Modeling : 사이트에 접속하면이라는 의미*/
