function myFunction() {
    var commentBoxValue = document.getElementById("comment-box").value;

    var div = document.createElement("div");
    div.style.backgroundColor = "#669C8B";
    div.style.color = "#EDC6BF";
    div.style.marginTop = "10px";
    div.style.borderRadius = "10px";
    div.style.width = "90vw";
    div.style.padding = "10px";
    var text = document.createTextNode(commentBoxValue);
    div.appendChild(text);
    document.querySelector(".overallComments").append(div);
};