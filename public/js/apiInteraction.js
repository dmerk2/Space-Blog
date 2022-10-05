function myFunction(){
    console.log("my function is running")
    const node = document.createElement("li");
    const thoughtText = document.getElementById("blogSubmission").value;
    const textNode = document.createTextNode(thoughtText);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
    fetch
}

