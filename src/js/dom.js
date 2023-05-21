/*2-Use HTML Dom, to do the following:
a.Create image node (using document.createElement()).
b.Set it source image (using setAttribute()).
c.Append it to a div on the page (Try appendChild() and insertBefore(), what’s the difference)?	
d.After appending the image, alert the number of child nodes to the div (Use element.childNodes.length), what are the count of div child nodes? And Why?
e.Remove the added image (using removeChild()).
 */

export var img = document.createElement('img');
img.setAttribute('src', 'download.jfif');
export var div = document.createElement('div');

div.insertBefore(img, div.firstChild);//here i can insert the best place to insert the element and img can be by childNode[i]
alert(img.childNodes.length);// 0 because it is as array index begin by zero

setTimeout(function remove() 
{
    div.removeChild(img);
},2000)
document.body.appendChild(div);




