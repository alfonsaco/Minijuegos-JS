const cursorFollow=document.querySelectorAll(".cursor-follow");

window.addEventListener("mousemove", function(e) {
    cursorFollow.forEach(bola => {
        bola.style.transform=`translateY(${e.clientY-10}px) translateX(${e.clientX-10}px)`;
    });
});