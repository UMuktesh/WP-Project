function b(){
    ///////////////////////////////
    ///////////////////////////////
    //    variables declarations
    ///////////////////////////////
    //////////////////////////////
    var na=frm.nam.value;
    var add=frm.adress.value;
    var em=frm.email.value;
    var payo=frm.pay_o.value;
    var e=frm.txt.value
    var cc1=frm.cc_1.value;
    var cc2=frm.cc_2.value;
    var cc3=frm.cc_3.value;
    var cc4=frm.cc_4.value;
    var cv=frm.cvv.value;
    var da=parseInt(frm.dat.value);
    var m=parseInt(frm.mon.value);
    var y= "20"+parseInt(frm.ye.value);
    var con=frm.contact.value;
    var d;
    var x = new Date();
    var o_da = x.getDate();
    var o_m = x.getMonth()+1;
    var o_y = x.getFullYear();
    /////////////////////////////////
    /////////////////////////////////
    //      checking form
    /////////////////////////////////
    /////////////////////////////////

    if(na==""){
        alert("Enter name");
		
    }
    else if(isNaN(na)==0){
        alert("Enter name properly")
		
    }
    else if(add==""){
        alert("Enter address");      
		
    }
     else if(isNaN(add)==0){
        alert("Enter address properly");
		
    }
    else if(em==""){
        alert("Enter email id");
		
    }
     else if(isNaN(em)==0){
        alert("Enter email properly");
		
     }
    else if((em.indexOf("@") < 0) || (em.indexOf(".") < 0)  || ((em.lastIndexOf(".")- em.indexOf("@")) == 1) || (em.indexOf(" ") > 0) || ((em.length-1) == em.lastIndexOf(".")) || (em.lastIndexOf(".",em.lastIndexOf(".")-1) > em.indexOf("@")) || (em.lastIndexOf(".") < em.indexOf("@")) ){ 
        alert("Enter correct Email Id");                              
		
    }                                                // checking if the email Id is a valid one or not ,i.e., if it has the correct Syntax

    /////////////////////////////////////
    //    payment option conditions
    /////////////////////////////////////
    else if(payo==""){
        alert("Select payment option");
		
    }
    else if (payo != "credit card" && (cc1 != "" || cc2 != "" || cc3 !="" || cc4 !="")){
        alert("Select payment option properly");
		
    }
    //////////////////////////////////////////
    //     credit card related conditions
    /////////////////////////////////////////
    else if((cc1.length!=4 || isNaN(cc1)==1 || cc2.length!=4 || isNaN(cc2)==1 || cc3.length!=4 || isNaN(cc3)==1 || cc4.length!=4 || isNaN(cc4)==1) && payo=="credit card"){
        alert("Enter card number properly");
		
    }
    else if(cv=="" && payo == "credit card"){
        alert("Enter CVV number");
		
    }
    else if(payo =="credit card"  && (isNaN(cv)==1 || cv.length != 3)){
         alert("Enter CVV number  properly");
		 
    }
    ///////////////////////////////////////
    //            date conditions
    //////////////////////////////////////
    else if(da>31 || da<=0 || isNaN(da)==1){                    //day range condition
        alert("Enter correct date of the event");
		
    }
    else if(m<=0 || m>12||isNaN(m)==1){                          // month range condition
        alert("Enter Month properly1");
		
    }
    else if((m == 2 && (da==31 || da==30)) || ((m==4 || m== 6 || m== 9 || m==11) && da==31)){  // 30 and 31 day condition
        alert("Enter date properly");
		
    }
    else if(y % 4 != 0 && (m==2 && da==29)){                          //leap year condition for febuary
        alert("enter date properly");
		
    }
    else if(y<o_y || isNaN(y)==1){                                    // year range condition (according to current year)
        alert("enter correct year");
	
    }
    else if(y >(parseInt(o_y)+1)){                                                  // year range condition (according to current year)
        alert("We take orders  upto "+(parseInt(o_y)+1)+" only");
	
    }
    /* else if(o_y != y){
      alert("Enter year properly");
        }*/
    else if((o_da > da || o_da == da)&& o_m == m){                      // checking with current date which is set in the computer being used
        alert("Enter date properly");
		
    }
    else if(o_m > m && o_y == y){                                                     // checking with current date which is set in the computer being used
        alert("Enter month properly");
		
    }
    ////////////////////////////////////
    //    contact number condition
    ///////////////////////////////////
    else if(con==""){
        alert("Enter Contact number");
		
    }
    else if(con.length != 10||isNaN(con)==1){
        alert("Enter contact number properly");
		
}
}
	
function c(form){
    frm.txt.value=frm.eve.options[frm.eve.selectedIndex].value;
}


