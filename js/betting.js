function opentable(evt, tabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " active";
}

//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) { 
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX ;
    pos4 = e.clientY ;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function copy_button_text(source, target)
{
    var s = document.getElementById(source).innerHTML;
    document.getElementById(target).value = document.getElementById(source).innerHTML;
    var d;
    if (document.getElementById("BT_1").innerHTML == s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos1").innerHTML;
      d = 1.5;
    }
    else if (document.getElementById("BT_2").innerHTML== s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos2").innerHTML;
      d = 2.5;
    }
    else if (document.getElementById("BT_3").innerHTML== s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos3").innerHTML;
      d = 2.1;
    }
    else if (document.getElementById("BT_4").innerHTML==s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos4").innerHTML;
      d =2.9;
    }
    else if (document.getElementById("BT_5").innerHTML==s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos5").innerHTML;
      d = 1.9;
    }
    else if (document.getElementById("BT_6").innerHTML==s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos6").innerHTML;
      d= 1.7;
    }
    else if (document.getElementById("BT_7").innerHTML==s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos7").innerHTML;
      d= 0.5;
    }
    else if (document.getElementById("BT_8").innerHTML==s )
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos8").innerHTML;
      d=1.1;
    }
    else if (document.getElementById("BT_9").innerHTML== s)
    {
      document.getElementById("demos").innerHTML = "Team: " + document.getElementById("demos9").innerHTML;
      d= 3.9;
    }
    else if (document.getElementById("BT_10").innerHTML==s)
    {
      document.getElementById("demos").innerHTML =  "Team: " + document.getElementById("demos10").innerHTML;
      d=3.5;
    }
/* --------------------------Total Win by select price in options-------------*/
    
    var a = document.getElementById("po").selectedIndex; // the price selected

    if(a == 0)
    {
      document.getElementById("total").innerHTML="TOTAL WIN: " + 0*d + " EUR";
    }
    if(a == 1)
    {
      document.getElementById("total").innerHTML="TOTAL WIN: " + 100*d + " EUR";
    }
    else if(a == 2)
    {
  
      document.getElementById("total").innerHTML="TOTAL WIN: " + 200*d+ " EUR";
    }
    else if(a == 3)
    {
      document.getElementById("total").innerHTML="TOTAL WIN: " + 300*d + " EUR";
    }
}

function price1()
{

  var x = document.getElementById("po").options[po.selectedIndex].innerHTML;
  
  document.getElementById("dprice").innerHTML="SINGLE STAKE: " + x;

}



