const cursorFollow=document.getElementById("cursor-follow");

window.addEventListener("mousemove", function(e) {
    cursorFollow.style.transform=`translateY(${e.clientY-10}px) translateX(${e.clientX-10}px)`;
});