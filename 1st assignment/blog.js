var count =0;
function addBlog(){
    //printing title
    var title=document.getElementById('title').value;
    
    var articles=document.getElementById('articles').value;
    if(title=="" || title==null)
    {
        alert ("Pleasee fill title of Blog");
    }
    else if(articles==null || articles== "")
    {
        alert ("Pleasee fill article section ");
    }
    else{
        var heading=document.createElement('H3');
    var header=document.createTextNode(title);
    heading.appendChild(header);
    //printing content
    
    var paraTag=document.createElement('p');
    var textarea=document.createTextNode(articles);
    paraTag.appendChild(textarea);
    //printing image
    var image2=document.getElementById('image').value;
    var image1=document.createElement('img');
    image1.src=image2;
    image1.alt="invalid image link";
    //creating div tag to act as container
    var createDiv=document.createElement("div");
    createDiv.appendChild(heading);
    createDiv.appendChild(paraTag);
    createDiv.appendChild(image1);
    //appending div to main div
    var divtag=document.getElementById('selector');
    var breakline=document.createElement('br');
    divtag.appendChild(breakline);
    count++;
    divtag.appendChild(createDiv).style.border = "thick solid #0000FF";
    }
}