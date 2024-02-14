// functions for changing quantity and prices of vegetable section

function box1(val)
        {
            var t=val*300;
            document.getElementById("total1").innerHTML=t;
        }
function box2(val)
        {
            var t=val*150;
            document.getElementById("total2").innerHTML=t;
        }
function box3(val)
        {
            var t=val*60;
            document.getElementById("total3").innerHTML=t;
        }
function box4(val)
        {
            var t=val*50;
            document.getElementById("total4").innerHTML=t;
        }
// functions for changing quantity and prices of fruit section
function box5(val)
        {
            var t=val*120;
            document.getElementById("total5").innerHTML=t;
        }
function box6(val)
        {
            var t=val*250;
            document.getElementById("total6").innerHTML=t;
        }
function box7(val)
        {
            var t=val*30;
            document.getElementById("total7").innerHTML=t;
        }
function box8(val)
        {
            var t=val*70;
            document.getElementById("total8").innerHTML=t;
        }


// dropdown for cart

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // adding items to the cart
  let total=0;
  var b=document.createElement("button");
    b.setAttribute("onclick","totalitems(total)");
    b.setAttribute("class","totalbtn");
    var t=document.createTextNode(" Total Price of Items");
    b.appendChild(t);
    var x=document.getElementById("myDropdown");
    x.appendChild(b);
  // vegetable section
  function additem1()
  {
  
    var e=document.createElement("p")
    itemname=document.getElementById("veg-1").innerHTML;
    p=document.getElementById("total1").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);

  }

  function additem2()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("veg-2").innerHTML;
    p=document.getElementById("total2").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }

  function additem3()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("veg-3").innerHTML;
    p=document.getElementById("total3").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }

  function additem4()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("veg-4").innerHTML;
    p=document.getElementById("total4").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }

  // Fruits section

  function additem5()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("fruit-1").innerHTML;
    p=document.getElementById("total2").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }
  function additem6()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("fruit-2").innerHTML;
    p=document.getElementById("total2").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }
  function additem7()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("fruit-3").innerHTML;
    p=document.getElementById("total2").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }
  function additem8()
  {
    var e=document.createElement("p")
    itemname=document.getElementById("fruit-4").innerHTML;
    p=document.getElementById("total2").innerHTML;
    total=total+parseInt(p);
    e.innerHTML=itemname+" "+"RS."+p;
    var e1=document.getElementById("myDropdown");
    // var b=document.createElement("button");
    // b.setAttribute("onclick","remove()");
    // b.setAttribute("class","removebtn");
    // var t=document.createTextNode("Remove");
    // b.appendChild(t);
    e1.appendChild(e);
  }
 
 // total price calculation 

  function totalitems(t)
  {
    
    var e=document.createElement("p");
    e.setAttribute("id","totalitems");
    var h=document.createElement("hr");
    var h1=document.createElement("hr");
    var c=document.createTextNode("Total price for items are : RS."+t);
    e.appendChild(c);
    var e1=document.getElementById("myDropdown");
    e1.appendChild(h);
    e1.appendChild(e);
    e1.appendChild(h1);
    
    
  }
