$("div").text("something else");
$("div.divclass").text("class");
$("div#divid").text("id");

console.log($("#divid") == document.getElementById("divid")); //false
//b/c jquery return array jiska another element hoga .

console.log($("#divid")[0] == document.getElementById("divid")); //true

console.log($("#div1id"));
console.log($("#div1id")[0]);

let o = $("#divid");
//it behave both as setter and getter function.
console.log(o.text()); //ye print kara gha data
o.text("aman"); //ye update kara gha
console.log(o.html());
o.html("Bablu <b>sehrawat</b>");

console.log(o.attr("height")); // it prints undefined. --- way to print attribute value.
o.attr("height", 32); //way to set attribute.
o.attr("style", "color:red"); //css
o.css("color", "blue"); //another way of doing things //css
o.css("font-size", "20pt");
o.css("font-size", "20pt").attr("width", "200");
//o.css().attr().attr()..... goes on
