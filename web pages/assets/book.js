function b(){
    ///////////////////////////////
    ///////////////////////////////
    //    variables declarations
    ///////////////////////////////
    //////////////////////////////
    var dateControl = document.querySelector('input[type="date"]');
    var str = dateControl.value;
    var patt1 = /[0-9]*-/g;
    var patt2 = /-[0-9]*-/g;
    var patt3 = /-[0-9]*/g;
    var r1 = str.match(patt1);
    var r2 = str.match(patt2);
    var r3 = str.match(patt3);
    var na=frm.nam.value;
    var add=frm.adress.value;
    var em=frm.email.value;
    var payo=frm.pay_o.value;
    var package = frm.pack.value;
    var e=frm.txt.value;
    var cc1=frm.cc_1.value;
    var cc2=frm.cc_2.value;
    var cc3=frm.cc_3.value;
    var cc4=frm.cc_4.value;
    var cv=frm.cvv.value;
    var con=frm.contact.value;
    var d;
    var x = new Date();
    var o_da = x.getDate();
    var o_m = x.getMonth()+1;
    var o_y = x.getFullYear();
    var flag = 0;
    /////////////////////////////////
    /////////////////////////////////
    //      checking form
    /////////////////////////////////
    /////////////////////////////////

    if(na==""){
        //alert("Enter name");
        setFunction("name1","id1");
    }
    else if(isNaN(na)==0){
        // alert("Enter name properly")
        setFunction("name2","id1");
    }
    else if(add==""){
        // alert("Enter address");
        setFunction("add1","id2");

    }
     else if(isNaN(add)==0){
        // alert("Enter address properly");
        setFunction("add2","id2");
    }
    else if(em==""){
        // alert("Enter email id");
        setFunction("em1","id3")
    }
     else if(isNaN(em)==0){
        // alert("Enter email properly");
        setFunction("em2","id3");

     }
    else if((em.indexOf("@") < 0) || (em.indexOf(".") < 0)  || ((em.lastIndexOf(".")- em.indexOf("@")) == 1) || (em.indexOf(" ") > 0) || ((em.length-1) == em.lastIndexOf(".")) || (em.lastIndexOf(".",em.lastIndexOf(".")-1) > em.indexOf("@")) || (em.lastIndexOf(".") < em.indexOf("@")) ){
        // alert("Enter correct Email Id");
        setFunction("em3","id3");
    }                                                // checking if the email Id is a valid one or not ,i.e., if it has the correct Syntax

    /////////////////////////////////////
    //    payment option conditions
    /////////////////////////////////////
    else if(payo==""){
        // alert("Select payment option");
        setFunction("pay1","id4");

    }
    else if (payo != "credit card" && (cc1 != "" || cc2 != "" || cc3 !="" || cc4 !="")){
        // alert("Select payment option properly");
        setFunction("pay2","id4")
    }
    //////////////////////////////////////////
    //     credit card related conditions
    /////////////////////////////////////////
    else if((cc1.length!=4 || isNaN(cc1)==1 || cc2.length!=4 || isNaN(cc2)==1 || cc3.length!=4 || isNaN(cc3)==1 || cc4.length!=4 || isNaN(cc4)==1) && payo=="credit card"){
        // alert("Enter card number properly");
        setFunction("cardno","id5");

    }
    else if(cv=="" && payo == "credit card"){
        // alert("Enter CVV number");
        setFunction("cvv1","id6");

    }
    else if(payo =="credit card"  && (isNaN(cv)==1 || cv.length != 3)){
         // alert("Enter CVV number  properly");
         setFunction("cvv2","id6");

    }
    ///////////////////////////////////////
    //            Package conditions
    ///////////////////////////////////////
    else if(package==""){
      setFunction("packages","id7");
    }
    ///////////////////////////////////////
    //            date conditions
    //////////////////////////////////////
    // else if(da>31 || da<=0 || isNaN(da)==1){                    //day range condition
    //     alert("Enter correct date of the event");
    //
    // }
    // else if(m<=0 || m>12||isNaN(m)==1){                          // month range condition
    //     alert("Enter Month properly1");
    //
    // }
    // else if((m == 2 && (da==31 || da==30)) || ((m==4 || m== 6 || m== 9 || m==11) && da==31)){  // 30 and 31 day condition
    //     alert("Enter date properly");
    //
    // }
    // else if(y % 4 != 0 && (m==2 && da==29)){                          //leap year condition for febuary
    //     alert("enter date properly");
    //
    // }
    else{
      flag = 1;
    }
    if(flag == 1){
      if(str == ""){
        setFunction("date0","id8");
        flag = 0;
      }
      else{
        var da = r3[1][1]+r3[1][2];
        var m = r2[0][1]+r2[0][2];
        var y = r1[0][0]+r1[0][1]+r1[0][2]+r1[0][3];
        if(y<o_y || isNaN(y)==1){                                    // year range condition (according to current year)
          // alert("enter correct year");
          setFunction("date2","id8");
      }
    else if(y >(parseInt(o_y)+1)){                                                  // year range condition (according to current year)
        // alert("We take orders  upto "+(parseInt(o_y)+1)+" only");
        setFunction("date1","id8");
    }
    /* else if(o_y != y){
      alert("Enter year properly");
        }*/
    else if((o_da > da || o_da == da)&& o_m == m){                      // checking with current date which is set in the computer being used
        // alert("Enter date properly");
        setFunction("date2","id8");

    }
    else if(o_m > m && o_y == y){                                                     // checking with current date which is set in the computer being used
        // alert("Enter month properly");
        setFunction("date2","id8");

    }
    ////////////////////////////////////
    //    contact number condition
    ///////////////////////////////////
    else if(con==""){
        // alert("Enter Contact number");
        setFunction("con1","id9");
    }
    else if(con.length != 10||isNaN(con)==1){
        // alert("Enter contact number properly");
        setFunction("con2","id9");
      }
    }
  }
}

function c(form){
    frm.txt.value=frm.eve.options[frm.eve.selectedIndex].value;
}

// New function
function myFunction(idName) {
  var popup = document.getElementById(idName);
  popup.classList.toggle("show");
}
function setFunction(tag,element){
  myFunction(tag);
  setTimeout(myFunction,2500,tag);
  if(element <= "id3"){
  var textbox = document.getElementById("myText");
  }
  else if (element <= "id6") {
    var textbox = document.getElementById("id2");
  }
  else {
    var textbox = document.getElementById("id4");
  }
  document.getElementById(element).focus();
  textbox.scrollIntoView(true);
}
