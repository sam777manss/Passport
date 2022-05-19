function printAlphabetsfirstChar(zc){
	//set the default value of i & j to print A to Z
	var i = 65;
	var j = 91;
  flag = 0;
	console.log(zc+ "values here")
	//loop through the values from i to j
	for(k = i; k < j; k++){
		//convert the char code to string (Alphabets)
		var str =String.fromCharCode(k);
		//print the result in console
    if (str==zc){
      console.log(str+"=="+zc);
      flag = flag + 1;
      }
    }
    return flag;
	}
//
function lengthOfField(v, mdata, js, datalength, dataisNotnum, datasp, datalengthex) {
  if (v=="null"|| v=="") {
    window.data = mdata +'<br>' ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length<12) {
    window.data = "";
    document.getElementById(js).innerHTML = window.data;
    window.data = datalength;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length==12) {
    var zeroChar = v[0].toUpperCase();
     var returnValue = printAlphabetsfirstChar(zeroChar);
     if (returnValue == 1)
     {
			 var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
			 //            ^                                       ^
			 var spcheck = format.test(v);
			 console.log(format.test(v));
			 console.log(v);
			 if (spcheck)
			 {
				 window.data = "";
				 document.getElementById(js).innerHTML = window.data;
				 window.data = datasp;
				 document.getElementById(js).innerHTML = window.data;
				 return 0;
			 }
			 else{
				 window.data = "";
				 document.getElementById(js).innerHTML = window.data;
				 return 1;
			 }
     }
     else {
       window.data = "";
       document.getElementById(js).innerHTML = window.data;
       window.data = dataisNotnum;
       document.getElementById(js).innerHTML = window.data;
			 return 0;
     }
  }
  else if(v.length>12){
    window.data = "";
		window.data = datalengthex;
    document.getElementById(js).innerHTML = window.data;
    return 0;

  }
}


function applyingfor1_1(fpassport, rissue, freissue, js) {
  if (fpassport.checked==true||rissue.checked==true) {
    document.getElementById(js).innerHTML = " ";
    return 1;
  }
  else{
    document.getElementById(js).innerHTML = freissue;
    return 0;
  }
}

// checkfor_reissue_reason 1.2
function checkfor_1_2_reissue(vaein3, risofp, vemore3, lp, chinep, dpass) {
  if(vaein3.checked==true || risofp.checked==true|| vemore3.checked==true ||lp.checked==true ||chinep.checked==true|| dpass.checked==true){
    document.getElementById('js_input3').innerHTML = "";
    return 1;
  }
  else{
   document.getElementById('js_input3').innerHTML = "<a href='#validityein3'><strong>1.2 re-issue select at least one</strong></a>"+'<br>';
   return 0;}
}
function checkfor_1_3_changeinep(appearance1_3, signature1_3, given_name1_3, surname1_3, dob1_3, spouse_name1_3,
                                          address1_3, delete_ecr1_3, other_specify1_3, dataToWriteAt1_3if, js)
  {
   if(appearance1_3.checked==true|| signature1_3.checked==true|| given_name1_3.checked==true|| surname1_3.checked==true||
                    dob1_3.checked==true|| spouse_name1_3.checked==true||  address1_3.checked==true||
                    delete_ecr1_3.checked==true ||other_specify1_3.checked==true)
                    {
                    window.data =" ";
                    document.getElementById(js).innerHTML = window.data;
                    return 1;
                   }
  else {
        window.data = dataToWriteAt1_3if +'<br>' ;
        document.getElementById(js).innerHTML = window.data;
        return 0;
  }
 }
function take_two_var(normal1_4, tatkal1_4, dataToWriteAt1_4, js)
{
  if(normal1_4.checked==true|| tatkal1_4.checked==true)
  { window.data="";
    document.getElementById(js).innerHTML= window.data;
    return 1;
  }
  else {
    window.data = dataToWriteAt1_4 + "<br>";
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
}
function printAlphabets(nameChar){

	//set the default value of i & j to print A to Z
	var i = 65;
	var j = 91;
  window.arrfornames;
	//loop through the values from i to j
	for(k = i; k < j; k++){
		//convert the char code to string (Alphabets)
		var str =String.fromCharCode(k);
		//print the result in console
    if (str==nameChar){
      window.arrfornames = window.arrfornames + nameChar;
    }
	}
}

function nameCheckMethod(v, dataToWriteAt2_1, dataToWriteAt2_1When_num_entered, js){
  if (v=="null"||v==""){
    window.data = dataToWriteAt2_1  ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if(v.length>=3)
  {
    var name = v;
    name = name.toUpperCase();
    // console.log(name);
    window.arrfornames="";
    for (var i = 0; i < name.length; i++) {
      printAlphabets(name[i]);
    }
    if (window.arrfornames==name){
      // console.log(window.arrfornames+"=="+name);
      document.getElementById(js).innerHTML = "";
      return 1;
    }
    else {
      window.data ="";
      console.log(window.arrfornames+"!="+name);
      window.data = dataToWriteAt2_1When_num_entered;
      document.getElementById(js).innerHTML = window.data;
      return 0;
    }
  }
  else {
    window.data ="";
    window.data = dataToWriteAt2_1  ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
}
function checkState(v6, dataAt2_5state, dataAt2_5state_is_invalid, js) {
	if (v6=="null"|| v6=="") {
		window.data = dataAt2_5state + '<br>';
		document.getElementById(js).innerHTML = window.data;
		return 0;
	}
	else {
		var v = v6.toLowerCase();
		console.log(v);
		var flag=0;
		var totalStates = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
		'Haryana','Himachal Pradesh','Jharkhand', 'Karnataka','Kerala','Madhya Pradesh','Maharashtra',
		'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu',
		'Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
		window.current_state;
		for (var i = 0; i < totalStates.length; i++)
		{
			window.current_state = totalStates[i].toLowerCase();
			if (v==window.current_state){
				 // current_state_mached = 1;
				 console.log(v+'=='+window.current_state);
				 flag = 1;
			}
		}
		if (flag){
			window.data = "";
			document.getElementById(js).innerHTML = window.data;
			return 1;
		}
		else
		{
		 		window.data = "";
				window.data = dataAt2_5state_is_invalid + '<br>';
				document.getElementById(js).innerHTML = window.data;
				return 0;
		}
	}
}
function checkCountry(v7, dataAt2_5country, dataAt2_5country_is_invalid, js) {
	v7 = v7.toLowerCase();
	if (v7=="null"|| v7=="") {
		window.data = dataToWriteAt2_5country +'<br>' ;
		document.getElementById(js).innerHTML = window.data;
		return 0;
	}
	else if(v7=='india' || v7 == 'undivided india'){
		window.data = "";
		document.getElementById(js).innerHTML = window.data;
	}
	else {
		window.data = "";
		document.getElementById(js).innerHTML = dataAt2_5country_is_invalid;
	}
}

function compare_city_district_state(city, district, state, dataAt2_5compare_state, js) {
	city = city.toLowerCase();
	district = district.toLowerCase();
	state = state.toLowerCase();
	if (city==state|| district==state) {
		window.data ="";
		window.data = dataAt2_5compare_state;
		document.getElementById(js).innerHTML = window.data;
		return 0;
	}
	else {
		window.data = "";
		document.getElementById(js).innerHTML = window.data;
		return 1;
	}
}

function checkgender(male, female, trans, dataToWriteAt2_6Gender, js) {
	if (male.checked==true|| female.checked==true|| trans.checked==true){
		window.data = "";
		document.getElementById(js).innerHTML=window.data;
		return 1;
	}
	else{
		window.data = dataToWriteAt2_6Gender;
		document.getElementById(js).innerHTML= window.data;
		return 0;
	}
}

function martialStatus(s2_7, m2_7, di2_7, wi2_7, sep2_7, dataToWriteAt2_7martialstatus, js) {
	if (s2_7.checked==true|| m2_7.checked==true|| di2_7.checked==true|| wi2_7.checked==true|| sep2_7.checked==true) {
		window.data = "";
		document.getElementById(js).innerHTML = window.data;
	}
	else{
		window.data = dataToWriteAt2_7martialstatus;
		document.getElementById(js).innerHTML = window.data;
	}
}

function checkVoterId(v, mdata, js, datalength, dataisNotnum, datasp, datalengthex, dataislower) {
  if (v=="null"|| v=="") {
    window.data = mdata +'<br>' ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length<10) {
    window.data = "";
    document.getElementById(js).innerHTML = window.data;
    window.data = datalength;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length>=10 && v.length<=12) {
		var original = v;
		var duplicate = v.toUpperCase();
		if (original==duplicate){
			var zeroChar = v[0].toUpperCase();
			 var returnValue = printAlphabetsfirstChar(zeroChar);
			 if (returnValue == 1)
			 {
				 var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
				 //            ^                                       ^
				 var spcheck = format.test(v);
				 console.log(format.test(v));
				 console.log(v);
				 if (spcheck)
				 {
					 window.data = "";
					 document.getElementById(js).innerHTML = window.data;
					 window.data = datasp;
					 document.getElementById(js).innerHTML = window.data;
					 return 0;
				 }
				 else{
					 var format = /[0123456789]/;
					 len = v.length;
					 last = v[len-1];
					 flag = format.test(last);
					 if (flag) {
						 window.data = "";
						 document.getElementById(js).innerHTML = window.data;
						 return 1;
					 }
					 else {
					 	document.getElementById(js).innerHTML =  "<a href='#voterid2_10'><strong>2.10 Invalid voter id</strong></a>"+ '<br>';
					 }
				 }
			 }
			 else {
				 window.data = "";
				 document.getElementById(js).innerHTML = window.data;
				 window.data = dataisNotnum;
				 document.getElementById(js).innerHTML = window.data;
				 return 0;
			 }
		}
		else {
			window.data ="";
			window.data = dataislower;
			document.getElementById(js).innerHTML = window.data
		}
  }
  else if(v.length>12){
    window.data = "";
		window.data = datalengthex;
    document.getElementById(js).innerHTML = window.data;
    return 0;

  }
}

function organizationName(v, dataToWriteAt2_1, dataToWriteAt2_1When_num_entered, js){
  if (v=="null"||v==""){
    window.data = dataToWriteAt2_1  ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if(v.length>=3 && v.length<=60)
  {
    var name = v;
    name = name.toUpperCase();
    // console.log(name);
    window.arrfornames="";
    for (var i = 0; i < name.length; i++) {
      printAlphabets(name[i]);
    }
    if (window.arrfornames==name){
      // console.log(window.arrfornames+"=="+name);
      document.getElementById(js).innerHTML = "";
      return 1;
    }
    else {
      window.data ="";
      console.log(window.arrfornames+"!="+name);
      window.data = dataToWriteAt2_1When_num_entered;
      document.getElementById(js).innerHTML = window.data;
      return 0;
    }
  }
  else {
    window.data ="";
    window.data = dataToWriteAt2_1;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
}

function check(v, data, js) {
  if (v=="null"|| v=="") {
    window.data = data +'<br>' ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else{
    window.data = "";
    document.getElementById(js).innerHTML = window.data;
    return 1;

  }
}
function visibleMark(visible_mark, dataToWriteAt2_16, js)
 {
	 body_parts = ['head', 'ear', 'hair', 'eye', 'mouth', 'nose', 'neck',
 	              'tooth', 'chest', 'shoulder', 'elbow', 'arm', 'finger',
 							 'hand', 'hip', 'leg', 'knee', 'ankle', 'foot', 'toe'];
 	var v = visible_mark.toLowerCase();
 	var found=false;
 	for (var i = 0; i < body_parts.length; i++) {
 		if (body_parts[i] ==v)
 		{
 		found = true;
 		}
 	}
	if (found){
		document.getElementById(js).innerHTML = "";
		return 1;
	}
	else{
		document.getElementById(js).innerHTML= dataToWriteAt2_16;
		return 0;
	}
}

function check_aadhar_character(num){
	for (var i = 0; i < 9; i++) {
		if(num==i){
			window.arrfor_aadhar =window.arrfor_aadhar + num;
			// console.log(window.arr);
		}
	}
}
function checkAadhaar(aadhar_number, dataToWriteAt2_17, dataToWriteAt2_17when_invalid, dataToWriteAt2_17length, js) {
	window.aadhar_entered = aadhar_number;
	window.arrfor_aadhar="";
	if (window.aadhar_entered=="null"||window.aadhar_entered==""){
		document.getElementById(js).innerHTML = dataToWriteAt2_17;
	}
	else if(window.aadhar_entered.length==12){
		for (var i = 0; i < window.aadhar_entered.length; i++) {
		 	check_aadhar_character(window.aadhar_entered[i]);
			// console.log("inside " +window.arr);
		 }
		 if (window.arrfor_aadhar==window.aadhar_entered){
		  	console.log(window.arrfor_aadhar+'=='+window.aadhar_entered);
			  document.getElementById(js).innerHTML = "";
			  return 1;
		 }
		 else {
		  	console.log(window.arrfor_aadhar+'!='+window.aadhar_entered);
		 	  document.getElementById(js).innerHTML = dataToWriteAt2_17when_invalid;
				return 0;
		}
	}
	else {
		document.getElementById(js).innerHTML = dataToWriteAt2_17length;
		return 0;
	}
}
function house_and_streetfun(house_and_street, dataToWrite4_1HouseStreet, dataToWrite4_1HouseStreetspe, dataToWrite4_1HouseStreetless ,js){
   if (house_and_street=="null"||house_and_street=="") {
   	document.getElementById(js).innerHTML = dataToWrite4_1HouseStreet;
   }
	 else if(house_and_street.length>=10 && house_and_street.length<=500){
		 var text_value = house_and_street;
		 var format = /[ `!@#$%^&*_+\=\[\]{};':"\\|.<>\/?~]/;
		 //            ^                                       ^
		 var flag = format.test(text_value);
		 if(flag){
			 document.getElementById(js).innerHTML = dataToWrite4_1HouseStreetspe;
		 }
		 else {
			 document.getElementById(js).innerHTML = "";
		 }
	 }
	 else {
		 document.getElementById(js).innerHTML = dataToWrite4_1HouseStreetless;
	 }
}

function mobile_numfun(digit) {
	window.arrfor_mobile_number;
	for (var i = 0; i < 9; i++) {
	 if (i==digit) {
		 window.arrfor_mobile_number = window.arrfor_mobile_number + digit;
	 }
	}
}

function mobile_numChecker(mobile_num, dataToWrite4_1mobile, dataToWrite4_1mobilespex, dataToWrite4_1mobilelength, js){
	if (mobile_num=="null"||mobile_num=="") {
		document.getElementById(js).innerHTML = dataToWrite4_1mobile;
	}
	else if(mobile_num.length==10){
		window.arrfor_mobile_number="";
		var text_value = mobile_num;
		for (var i = 0; i < text_value.length; i++) {
			mobile_numfun(text_value[i]);
		 }
		   if (text_value==window.arrfor_mobile_number){
				 document.getElementById(js).innerHTML = "";
			  console.log(text_value+'=='+window.arrfor_mobile_number);
		   }
		  else {
		 	  document.getElementById(js).innerHTML = dataToWrite4_1mobilespex;
		  	console.log(text_value+'!='+window.arrfor_mobile_number);
		  }
	}
	else{
		document.getElementById(js).innerHTML = dataToWrite4_1mobilelength;
	}
}

function email_check(email_id, dataAt4_1emailid, dataAt4_1emailid_invalid, js) {
	if(email_id=="null"||email_id==""){
		document.getElementById(js).innerHTML = dataAt4_1emailid;
	}
	else{
		var x= email_id;
		var atposition=x.indexOf("@");
		var dotposition=x.lastIndexOf(".");
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
		  document.getElementById(js).innerHTML = dataAt4_1emailid_invalid;
		  }
		 else {
		 	document.getElementById(js).innerHTML= "";
		 }
	}
}

function File_number_0_1(v, mdata, js, datalength, dataisNotnum, datasp, datalengthex, data_year_is_not) {
  if (v=="null"|| v=="") {
    window.data = mdata +'<br>' ;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length<12) {
    window.data = "";
    document.getElementById(js).innerHTML = window.data;
    window.data = datalength;
    document.getElementById(js).innerHTML = window.data;
    return 0;
  }
  else if (v.length==12) {
    var zeroChar = v[0].toUpperCase();
     var returnValue = printAlphabetsfirstChar(zeroChar);
     if (returnValue == 1)
     {
			 var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
			 //            ^                                       ^
			 var spcheck = format.test(v);
			 console.log(format.test(v));
			 console.log(v);
			 if (spcheck)
			 {
				 window.data = "";
				 document.getElementById(js).innerHTML = window.data;
				 window.data = datasp;
				 document.getElementById(js).innerHTML = window.data;
				 return 0;
			 }
			 else{
				 var length_of_v = v.length;
				 if (v[length_of_v-1]==2&&v[length_of_v-2]==2) {
					 window.data = "";
					 document.getElementById(js).innerHTML = window.data;
					 return 1;
				 }
				 else {
					 document.getElementById(js).innerHTML = data_year_is_not;
					 return 0;
				 }
			 }
     }
     else {
       window.data = "";
       document.getElementById(js).innerHTML = window.data;
       window.data = dataisNotnum;
       document.getElementById(js).innerHTML = window.data;
			 return 0;
     }
  }
  else if(v.length>12){
    window.data = "";
		window.data = datalengthex;
    document.getElementById(js).innerHTML = window.data;
    return 0;

  }
}
function check_dates_issue_and_expiry(date_of_issue, date_of_ex, dataToWriteAt6_1dates, dataToWriteAt6_1expire_isless, js){
	// console.log(date_of_issue+"inside fun");
	if (date_of_issue=""||date_of_ex=="") {
		document.getElementById(js).innerHTML = dataToWriteAt6_1dates;
	}
	else {
		var dateI1 = document.getElementById("dateInput1").value;
		var dateI2 = document.getElementById("dateInput2").value;

	 //define two date object variables to store the date values
		var date1 = new Date(dateI1);
		var date2 = new Date(dateI2);

	 //calculate time difference
		var time_difference = date2.getTime() - date1.getTime();

		//calculate days difference by dividing total milliseconds in a day
		var result = time_difference / (1000 * 60 * 60 * 24);
		console.log(result + " days between both dates. ");
		if (result>1){
			document.getElementById(js).innerHTML ="";
		}
		else{
			document.getElementById(js).innerHTML =dataToWriteAt6_1expire_isless;
		}
		}
	}

	function check_date_of_birth(dataAt2_4_birth, dataAt2_4_birthisless, js) {
		var date_of_birth = document.getElementById('date_of_birth2_4').value;
		// console.log(date_of_birth+" inside check_birth");
		if (date_of_birth=="null"||date_of_birth=="") {
			document.getElementById(js).innerHTML = dataAt2_4_birth;
		}
		else{
			// console.log(date_of_birth2_4+"date_of_birth2_4");
			var date1;
			var date2 = document.getElementById("date_of_birth2_4").value;
			 //define two date object variables with dates inside it
			 date1 = new Date();
			 date2 = new Date (date2);
			 var time_difference = date1.getTime() - date2.getTime();
			 //calculate total number of seconds between two dates
			 var result = time_difference / (1000 * 60 * 60 * 24);
			 result = Math.floor(result);
			 // console.log(result+" result");
			 if (result>=30) {
				document.getElementById(js).innerHTML = "";
			 }
			 else {
				document.getElementById(js).innerHTML = dataAt2_4_birthisless;
			 }
		}
	}

	function passport_num_6_1fun(v, mdata, js, datalength, dataisNotnum, datasp, datalengthex) {
	  if (v=="null"|| v=="") {
	    window.data = mdata +'<br>' ;
	    document.getElementById(js).innerHTML = window.data;
	    return 0;
	  }
	  else if (v.length<8) {
	    window.data = "";
	    document.getElementById(js).innerHTML = window.data;
	    window.data = datalength;
	    document.getElementById(js).innerHTML = window.data;
	    return 0;
	  }
	  else if (v.length==8) {
	    var zeroChar = v[0].toUpperCase();
	     var returnValue = printAlphabetsfirstChar(zeroChar);
	     if (returnValue == 1)
	     {
				 var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
				 //            ^                                       ^
				 var spcheck = format.test(v);
				 console.log(format.test(v));
				 console.log(v);
				 if (spcheck)
				 {
					 window.data = "";
					 document.getElementById(js).innerHTML = window.data;
					 window.data = datasp;
					 document.getElementById(js).innerHTML = window.data;
					 return 0;
				 }
				 else{
					 window.data = "";
					 document.getElementById(js).innerHTML = window.data;
					 return 1;
				 }
	     }
	     else {
	       window.data = "";
	       document.getElementById(js).innerHTML = window.data;
	       window.data = dataisNotnum;
	       document.getElementById(js).innerHTML = window.data;
				 return 0;
	     }
	  }
	  else if(v.length>12){
	    window.data = "";
			window.data = datalengthex;
	    document.getElementById(js).innerHTML = window.data;
	    return 0;

	  }
	}
	function matching_numbers(real_num) {
		var array_for_real = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
		window.arrforreal_num;
		for (var i = 0; i < array_for_real.length; i++) {
			if(array_for_real[i]==real_num){
				console.log(array_for_real[i]+'=='+real_num)
				window.arrforreal_num = window.arrforreal_num+ real_num;
			}
		}
	}
function decimal_numbersAt8(fee_amount_8_1, dataAt8_1fee_amount, dataAt8_1fee_amountisnot_num, js) {
	if (fee_amount_8_1=="null"||fee_amount_8_1=="") {
		document.getElementById(js).innerHTML = dataAt8_1fee_amount;
	}
	else {
		window.arrforreal_num='';
		text_num_value = fee_amount_8_1;
		for (var i = 0; i < text_num_value.length; i++) {
			matching_numbers(text_num_value[i]);
		}
		if(window.arrforreal_num==fee_amount_8_1){
		  document.getElementById(js).innerHTML = "";
		}
		else{
			document.getElementById(js).innerHTML = dataAt8_1fee_amountisnot_num;
		}
	}
}

function check_dates_issue_and_expiryfor8_1(date_of_issue, date_of_ex, dataToWriteAt6_1dates, dataToWriteAt6_1expire_isless, js){
	// console.log(date_of_issue+"inside fun");
	if (date_of_issue=""||date_of_ex=="") {
		document.getElementById(js).innerHTML = dataToWriteAt6_1dates;
	}
	else {
		var dateI1 = document.getElementById("date_of_issue_8_1").value;
		var dateI2 = document.getElementById("date_of_expiry_8_1").value;

	 //define two date object variables to store the date values
		var date1 = new Date(dateI1);
		var date2 = new Date(dateI2);

	 //calculate time difference
		var time_difference = date2.getTime() - date1.getTime();

		//calculate days difference by dividing total milliseconds in a day
		var result = time_difference / (1000 * 60 * 60 * 24);
		console.log(result + " days between both dates. ");
		if (result>1){
			document.getElementById(js).innerHTML ="";
		}
		else{
			document.getElementById(js).innerHTML =dataToWriteAt6_1expire_isless;
		}
		}
	}


function formvalidate() {
  window.data;
  var values=0;
  window.filenum =   "<a href='#fn'><strong>0.1 Plese provide values file number</strong></a>";
  window.dataToWriteAt0_1isNotNum = "<a href='#fn'><strong>0.1  values in file number must starts with character</strong></a>" + '<br>';
  window.dataToWriteAt0_1islength = "<a href='#fn'><strong>0.1Plese provide values in file number and length must be 12</strong></a>" + '<br>';
	window.dataToWriteAt0_1isSpecial = "<a href='#fn'><strong>0.1 file number must starts with character and do not include special character</strong></a>" + '<br>';
	window.dataToWriteAt0_1islengthex = "<a href='#fn'><strong>0.1 file number must be less then 12 characters</strong></a>" + '<br>';
  window.dataToWriteAt0_1isnot22 = "<a href='#fn'><strong>0.1 file number must be ends with 22</strong></a>" + '<br>';
  //1.1
  window.dataToWriteAt1_1 =   "<a href='#Fresh'><strong>1.1 applying for </strong></a>"+'<br>';
  // if any change in particulars 1.3
  window.dataToWriteAt1_3if =  "<a href='#appearance1_3'><strong>1.3 select at least one from change in particulars </strong></a>";
  //1.4 type of APPLICATION
  window.dataToWriteAt1_4 = "<a href='#normal1_4'><strong>1.4 Select at least one </strong></a>";
  //1.5 type of passport
  window.dataToWriteAt1_5 = "<a href='#pages36'><strong>1.5 Select at least one </strong></a>";
  // 1.6 validity required
  window.dataToWriteAt1_6 = "<a href='#validity10years'><strong>1.6 Select at least one </strong></a>";
  // 2.1 applicant name
  window.dataToWriteAt2_1 ="<a href='#appliName2_1'><strong>Plese provide values in 2.1 applicant name</strong></a>"+'<br>';
  window.dataToWriteAt2_1When_num_entered ="<a href='#appliName2_1'><strong>2.1 applicant name must be character</strong></a>"+'<br>';
	// 2.1 surname
	window.dataToWriteAt2_1surname ="<a href='#appliSn2_1'><strong>Plese provide values in 2.1 applicant surname name</strong></a>";
	window.dataToWriteAt2_1When_num_enteredsurname ="<a href='#appliSn2_1'><strong>2.1 applicant surname name must be character</strong></a>";
	// 2.2 Supplementary
	window.dataToWriteAt2_2 ='<br>'+ "<a href='#supple2_2yes'><strong>2.2 Select at least one from Yes/No</strong></a>";
	// 2.3 Supplementary
	window.dataToWriteAt2_3 ="<a href='#supple2_3yes'><strong>2.3 Select at least one from Yes/No</strong></a>";
	// 2.5 place of Birth
	window.dataToWriteAt2_5placeofbirth ="<a href='#pob2_5'><strong>Plese provide values in 2.5 applicant place of birth</strong></a>";
	window.dataToWriteAt2_5When_num_enteredplaceofbirth ="<a href='#pob2_5'><strong>2.5 applicant place of birth must be character</strong></a>";
	//2.5 district of india
	window.dataToWriteAt2_5district ='<br>'+"<a href='#district2_5'><strong>Plese provide values in 2.5 applicant district</strong></a>";
	window.dataToWriteAt2_5When_num_entered_district ='<br>'+"<a href='#district2_5'><strong>2.5 applicant district must be character</strong></a>";
	// 2.5 state of INDIA
	window.dataToWriteAt2_5state ='<br>'+"<a href='#state2_5'><strong>Plese provide values in 2.5 applicant residing state</strong></a>";
	window.dataToWriteAt2_5state_is_invalid = '<br>'+"<a href='#state2_5'><strong>2.5 applicant residing state is a invalid state</strong></a>";
	// 2.5 region/country
	window.dataToWriteAt2_5country = "<a href='#country2_5'><strong>Plese provide values in 2.5 applicant country</strong></a>";
	window.dataToWriteAt2_5country_is_invalid = '<br>'+"<a href='#country2_5'><strong>2.5 applicant must give value between india or undivided india</strong></a>";
	// 2.5 place of birth and district must not eqaul to state
	window.dataAt2_5compare_state = "<a href='#state2_5'><strong>In 2.5 applicant birth and district must not eqaul to state</strong></a>";
	// 2.5 place of birth and district must not eqaul to country
	window.dataAt2_5compare_country = "<a href='#country2_5'><strong>In 2.5 applicant birth and district must not eqaul to country</strong></a>";
	// 2.6 Select Gender
	window.dataToWriteAt2_6Gender = "<a href='#male2_6'><strong>From 2.6 Select your gender</strong></a>"+ '<br>';
	// 2.7 martial status
	window.dataToWriteAt2_7martialstatus = "<a href='#single2_7'><strong>From 2.7 Select Martial status</strong></a>"+'<br>';
	// 2.8 Citizenship of India by
	window.dataToWriteAt2_8citizen = "<a href='#bybirth'><strong>2.8 Select Citizenship of India by</strong></a>"+ '<br>';
  // 2.10 checkVoterId
	window.dataToWriteAt2_10mdata =  "<a href='#voterid2_10'><strong>2.10 Enter voter id</strong></a>";
	window.dataToWriteAt2_10datalength =  "<a href='#voterid2_10'><strong>2.10 voter id length should be between less then 12 and greater then 10</strong></a>"+ '<br>';
	window.dataToWriteAt2_10dataisNotnum =  "<a href='#voterid2_10'><strong>2.10 Enter voter id start with characters</strong></a>"+ '<br>';
	window.dataToWriteAt2_10datasp =  "<a href='#voterid2_10'><strong>2.10 Enter voter id must not contain special characters</strong></a>"+ '<br>';
	window.dataToWriteAt2_10datalengthex =  "<a href='#voterid2_10'><strong>2.10 Enter voter id must be less then 13</strong></a>"+ '<br>';
	window.dataToWriteAt2_10dataislower =  "<a href='#voterid2_10'><strong>2.10 Enter voter id and character must be in capital</strong></a>"+ '<br>';
	var vid = document.firstform.txt8.value;
	values = values + checkVoterId(vid, window.dataToWriteAt2_10mdata, 'js_input21', window.dataToWriteAt2_10datalength, window.dataToWriteAt2_10dataisNotnum,
	             window.dataToWriteAt2_10datasp, window.dataToWriteAt2_10datalengthex, window.dataToWriteAt2_10dataislower);
  // 2.12 Employment Type
	var govt = document.getElementById('govt2_11');                 var statu2_11 = document.getElementById('statutory2_11');
	var psu2_11 = document.getElementById('psu2_11');               var retired_govt2_11 = document.getElementById('retired_govt2_11');
	var self2_11 = document.getElementById('self2_11');             var private2_11 = document.getElementById('private2_11');
	var homemaker2_11 = document.getElementById('homemaker2_11');   var notemp2_11 = document.getElementById('notemp2_11');
	var retired_pri2_11 = document.getElementById('retired_pri2_11'); var student2_11 = document.getElementById('student2_11');
	var other2_11 = document.getElementById('other2_11');           var owner2_11 = document.getElementById('owner2_11');
	//
	window.dataToWriteAt2_11emptype = "<a href='#govt2_11'><strong>2.11 Select Employment type </strong></a>"+ '<br>';

	if (govt.checked==true||statu2_11.checked==true||psu2_11.checked==true||retired_govt2_11.checked==true||
	   self2_11.checked==true||private2_11.checked==true||homemaker2_11.checked==true||notemp2_11.checked==true||
	   retired_pri2_11.checked==true||student2_11.checked==true||other2_11.checked==true||owner2_11.checked==true)
		 {
			document.getElementById('js_input23').innerHTML = "";
			values = values + 1;
		 }
	else {
		document.getElementById('js_input23').innerHTML = window.dataToWriteAt2_11emptype;
	}
	// 2.11 specify organization name
	window.dataToWriteAt2_11 = "<a href='#employed2_11'><strong>2.12 Enter organization full name</strong></a>"+ '<br>';
	window.dataToWriteAt2_11When_num = "<a href='#employed2_11'><strong>In 2.12 Only characters are allowed</strong></a>"+ '<br>';
	var orgName = document.firstform.txt9.value;

	if (psu2_11.checked==true|| govt.checked==true|| statu2_11.checked==true) {
	 values = values + organizationName(orgName, window.dataToWriteAt2_11, window.dataToWriteAt2_11When_num, 'js_input22')
	}
	else {
		document.getElementById('js_input22').innerHTML = "";
	}
  // 2.13
	window.dataToWriteAt2_13 ="<a href='#govt2_13Y'><strong>2.13 Select at least one from Yes/No</strong></a>";
	var yes = document.getElementById('govt2_13Y'); var no = document.getElementById('govt2_13N');
	values = values + take_two_var(yes, no, window.dataToWriteAt2_13, 'js_input24');
	// 2.14 Educational Qualification
	window.dataToWriteAt2_14 = "<a href='#7thpass'><strong>2.14 Provide Educational Qualification</strong></a>";
	var seventh = document.getElementById('7thpass'); var eigth = document.getElementById('8thpass');
	var tenth = document.getElementById('10thpass'); 	var graduate = document.getElementById('graduate');
	if (seventh.checked==true||eigth.checked==true||tenth.checked==true||graduate.checked==true){
		document.getElementById('js_input25').innerHTML ="";
		values = values + 1;
	}
	else {
		document.getElementById('js_input25').innerHTML= 	window.dataToWriteAt2_14;
	}
	// 2.15 Are you eligible for Non-ECR category?
	window.dataToWriteAt2_15 ='<br>'+"<a href='#ecr_yes'><strong>2.15 Are you eligible for Non-ECR category? choose Yes/No</strong></a>";
	var ecr_yes = document.getElementById('ecr_yes'); var ecr_no = document.getElementById('ecr_no');
	values = values + take_two_var(ecr_yes, ecr_no, window.dataToWriteAt2_15, 'js_input26');
	// 2.16 Visible Distinguishing Mark
	window.dataToWriteAt2_16 ="<a href='#visible_mark'><strong>2.16 if you have any Visible Distinguishing Mark please give it properly</strong></a>"+ '<br>';
	var visible_mark = document.firstform.txt10.value;
	if (visible_mark.length == 0)
	{
		document.getElementById('visible_mark').innerHTML = "";
	}
	else
	{
		values = values + visibleMark(visible_mark, window.dataToWriteAt2_16, 'js_input27');
	}
  // 2.17 Aadhaar Number
	window.dataToWriteAt2_17 = "<a href='#aadhaar2_17'><strong>2.17 Enter aadhaar number</strong></a>";
	window.dataToWriteAt2_17when_invalid = "<a href='#aadhaar2_17'><strong>2.17 Enter valid aadhaar number</strong></a>";
	window.dataToWriteAt2_17length = "<a href='#aadhaar2_17'><strong>2.17 aadhar number should be 12digits</strong></a>";
	var aadhar_number2_17 = document.firstform.txt11.value;
	values = values + checkAadhaar(aadhar_number2_17, window.dataToWriteAt2_17, window.dataToWriteAt2_17when_invalid,
		                window.dataToWriteAt2_17length, 'js_input28');
	// 3.1 father's given name
	window.dataToWriteAt3_1 ='<br>'+"<a href='#fname3_1'><strong>Plese provide values in 3.1 applicant father name</strong></a>"+'<br>';
	window.dataToWriteAt3_1When_num_entered ='<br>'+"<a href='#fname3_1'><strong>3.1 applicant father name must be character</strong></a>"+'<br>';
	window.dataToWriteAt3_1lengthex ='<br>'+"<a href='#fname3_1'><strong>In 3.1 applicant father name must be less then 500 words</strong></a>"+'<br>';
	var father_name_3_1 = document.firstform.txt12.value;
	if (father_name_3_1.length<=500){
			values = values + nameCheckMethod(father_name_3_1, window.dataToWriteAt3_1, window.dataToWriteAt3_1When_num_entered, 'js_input29');
	}
	else {
		document.getElementById('js_input29').innerHTML = window.dataToWriteAt3_1lengthex;
	}

	// 3.1 father's Surname
	window.dataToWriteAt3_1surname ="<a href='#fsname3_1'><strong>Plese provide values in 3.1 applicant father surname name</strong></a>"+'<br>';
	window.dataToWriteAt3_1When_num_enteredsurname ="<a href='#fsname3_1'><strong>3.1 applicant father surname name must be character</strong></a>"+'<br>';
	window.dataToWriteAt3_1surnamelengthex ="<a href='#fsname3_1'><strong>In 3.1 applicant father surname name must be less then 500 words</strong></a>"+'<br>';
	var father_name_3_1_surname = document.firstform.txt13.value;
	if (father_name_3_1_surname.length<=500){
	 values = values + nameCheckMethod(father_name_3_1, window.dataToWriteAt3_1surname, window.dataToWriteAt3_1When_num_enteredsurname, 'js_input30');
	}
	else {
		document.getElementById('js_input30').innerHTML = window.dataToWriteAt3_1surnamelengthex;
	}
	// 3.2 mother's given name
	window.dataToWriteAt3_2 ="<a href='#mname3_2'><strong>Plese provide values in 3.2 applicant mother name</strong></a>"+'<br>';
	window.dataToWriteAt3_2When_num_entered ="<a href='#mname3_2'><strong>3.2 applicant mother name must be character</strong></a>"+'<br>';
	window.dataToWriteAt3_2lengthex ="<a href='#mname3_2'><strong>In 3.2 applicant mother name must be less then 500 words</strong></a>"+'<br>';
	var mother_name_3_1 = document.firstform.txt14.value;
	if (mother_name_3_1.length<=500){
		values = values + nameCheckMethod(mother_name_3_1, window.dataToWriteAt3_2, window.dataToWriteAt3_2When_num_entered, 'js_input31');
	}
	else{
		document.getElementById('js_input31').innerHTML = window.dataToWriteAt3_2lengthex;
	}
	// 3.2 mother's Surname
	window.dataToWriteAt3_2surname ="<a href='#msname3_2'><strong>Plese provide values in 3.2 applicant mother surname name</strong></a>"+'<br>';
	window.dataToWriteAt3_2When_num_enteredsurname ="<a href='#msname3_2'><strong>3.2 applicant mother surname name must be character</strong></a>"+'<br>';
	window.dataToWriteAt3_2surnamelengthex ="<a href='#msname3_2'><strong>In 3.2 applicant mother surname name must be less then 500 words</strong></a>"+'<br>';
	var mother_name_3_2_surname = document.firstform.txt15.value;
	if(mother_name_3_2_surname.length<=500){
	values = values + nameCheckMethod(mother_name_3_2_surname, window.dataToWriteAt3_2surname, window.dataToWriteAt3_2When_num_enteredsurname, 'js_input32');
	}
	else {
		document.getElementById('js_input32').innerHTML = window.dataToWriteAt3_2surnamelengthex;
	}
  //variables
  var v1 = document.firstform.txt1.value;    window.freshpassport = document.getElementById("Fresh");
  window.reissue = document.getElementById("Re-issue");
  // variables for 1.2 reissue
  var validityein3 = document.getElementById("validityein3");     var reissueofp = document.getElementById("reissueofp");
  var validityemore3 = document.getElementById("validityemore3"); var lostp = document.getElementById("lostp");
  var changeinep = document.getElementById("changeinep");         var damagedpass = document.getElementById("damagedpass");
  // variables for 1.3 chage in existing
  var appearance1_3 = document.getElementById("appearance1_3"); var signature1_3 = document.getElementById("signature1_3");
  var given_name1_3 = document.getElementById("given_name1_3"); var surname1_3 = document.getElementById("surname1_3");
  var dob1_3 = document.getElementById("dob1_3");               var spouse_name1_3 = document.getElementById("spouse_name1_3");
  var address1_3= document.getElementById("address1_3");    var delete_ecr1_3 = document.getElementById("delete_ecr1_3");
  var other_specify1_3 = document.getElementById("other_specify1_3");
  //
  var v2 = document.firstform.txt2.value;  var v3 = document.firstform.txt3.value;
	var v4 = document.firstform.txt4.value;  var v5 = document.firstform.txt5.value;
	var v6 = document.firstform.txt6.value;  var v7 = document.firstform.txt7.value;


  // file 0.1
  values =  values + File_number_0_1(v1, window.filenum, 'js_input1', window.dataToWriteAt0_1islength, window.dataToWriteAt0_1isNotNum,
                            window.dataToWriteAt0_1isSpecial, window.dataToWriteAt0_1islengthex, window.dataToWriteAt0_1isnot22);
  //checking 1.1 applying for
  values = values +  applyingfor1_1(window.freshpassport, window.reissue, window.dataToWriteAt1_1, 'js_input2');
  //checking for 1.2 reissue
  if (window.reissue.checked==true)
  {values = values + checkfor_1_2_reissue(validityein3, reissueofp, validityemore3, lostp, changeinep, damagedpass);}
  else if (window.freshpassport.checked==true)
  {  values = values + 2;  }
  // console.log("changeinep="+ changeinep.checked);
  if (changeinep.checked==true)
  {values = values+checkfor_1_3_changeinep(appearance1_3, signature1_3, given_name1_3, surname1_3, dob1_3, spouse_name1_3,
                                            address1_3, delete_ecr1_3, other_specify1_3, window.dataToWriteAt1_3if, 'js_input4')
                                          }
  else if (validityein3.checked==true|| reissueofp.checked==true|| validityemore3.checked==true||
           lostp.checked==true|| damagedpass.checked==true) {
             values = values + 1;
  }
  // 1.4 var n fun
  var normal1_4 = document.getElementById("normal1_4"); var tatkal1_4 = document.getElementById("tatkal1_4");
  values = values + take_two_var(normal1_4, tatkal1_4, window.dataToWriteAt1_4, 'js_input5');
  // 1.5 type of passport
  var pages36 = document.getElementById("pages36"); var pages60 = document.getElementById("pages60");
  values = values + take_two_var(pages36, pages60, window.dataToWriteAt1_5, 'js_input6');
  // 1.6 validity required
  var validity10years = document.getElementById("validity10years"); var validityupto18 = document.getElementById("validityupto18");
  values = values + take_two_var(validity10years, validityupto18, window.dataToWriteAt1_6, 'js_input7');
  // 2.1 applicant name
  values = values + nameCheckMethod(v2, window.dataToWriteAt2_1, window.dataToWriteAt2_1When_num_entered, 'js_input8');
  ///2.1 surname
	values = values + nameCheckMethod(v3, window.dataToWriteAt2_1surname, window.dataToWriteAt2_1When_num_enteredsurname, 'js_input9');
	//2.2 Supplementary form
	var supple2_2yes = document.getElementById('supple2_2yes'); var supple2_2no = document.getElementById('supple2_2no');
	values = values + take_two_var(supple2_2yes, supple2_2no, window.dataToWriteAt2_2, 'js_input10');
	// 2.3 Supplementary form
	var supple2_3yes = document.getElementById('supple2_3yes'); var supple2_3no = document.getElementById('supple2_3no');
	values = values + take_two_var(supple2_3yes, supple2_3no, window.dataToWriteAt2_3, 'js_input11');
	// 2.4 Date of birth
	// console.log(date_of_b2_4+" date_of_b2_4");
	window.dataAt2_4_dateofbirth ="<a href='#date_of_birth2_4'><strong>2.4 Plese provide date of birth</strong></a>"+ "<br>";
	// document.getElementById('date_of_birth').innerHTML = window.dataAt2_4_birth;
	window.dataAt2_4_dateofbirthisless ="<a href='#date_of_birth2_4'><strong>2.4 date of birth must be greater then 30 days</strong></a>"+"<br>";
	check_date_of_birth(window.dataAt2_4_dateofbirth, window.dataAt2_4_dateofbirthisless, 'date_of_birth');
	// 2.5 place of birth
	values = values + nameCheckMethod(v4, window.dataToWriteAt2_5placeofbirth, window.dataToWriteAt2_5When_num_enteredplaceofbirth, 'js_input12');
	// 2.5 district
	values = values + nameCheckMethod(v5, window.dataToWriteAt2_5district, window.dataToWriteAt2_5When_num_entered_district, 'js_input13');
	//2.5 state of india
	values = values + checkState(v6, window.dataToWriteAt2_5state, window.dataToWriteAt2_5state_is_invalid, 'js_input14');
	// 2.5 country/region
	values = values + checkCountry(v7, window.dataToWriteAt2_5country, window.dataToWriteAt2_5country_is_invalid, 'js_input15');
	// 2.5 place of birth and district must not eqaul to state
	var city = v4; var district = v5; var state = v6;
	if (city.length>1&& district.length>1&& state.length>1){
	values = values + compare_city_district_state(city, district, state, window.dataAt2_5compare_state, 'js_input16');}
	// 2.5 place of birth and district must not eqaul to country
	var country = v7
	if (city.length>1&& district.length>1&& country.length>1){
	values = values + compare_city_district_state(city, district, country, window.dataAt2_5compare_country, 'js_input17');}
	// 2.6 Gender
	var male2_6 = document.getElementById("male2_6");     var female2_6 = document.getElementById("female2_6");
	var trans2_6= document.getElementById("trans2_6");
	values = values + checkgender(male2_6, female2_6, trans2_6, window.dataToWriteAt2_6Gender, 'js_input18');
	// 2.7 martial status
	var single2_7 = document.getElementById("single2_7"); var married2_7 = document.getElementById("married2_7");
	var divorced2_7 = document.getElementById("divorced2_7"); var widow2_7 = document.getElementById("widow2_7");
	var separated2_7 = document.getElementById("separated2_7");
  values = values + martialStatus(single2_7, married2_7, divorced2_7, widow2_7, separated2_7, 	window.dataToWriteAt2_7martialstatus, 'js_input19');
	// 2.8 citizenship of india by
	var bybirth = document.getElementById("bybirth"); var bydescent = document.getElementById("bydescent");
	var byregistration = document.getElementById("byregistration");
	values = values + checkgender(bybirth, bydescent, byregistration, window.dataToWriteAt2_8citizen, 'js_input20');
	// 3.5 If applicant is minor, provide following details
	var fatherptxt = document.firstform.txt16.value; var motherptxt= document.firstform.txt17.value;
	var father_nationality = document.firstform.txt18.value; var mother_nationality = document.firstform.txt19.value;
	var father_file_num = document.firstform.txt20.value; var mother_file_num = document.firstform.txt21.value;
	// console.log("fatherptxt"+fatherptxt);
	var guardian_pass_port = document.getElementById('legal_pass_number').checked;
	 document.getElementById('father_passport_num');    document.getElementById('mother_passport_num');
	var guardian_file_number = document.getElementById('legal_file_number').checked;
	document.getElementById('father_file_num');      document.getElementById('mother_file_num');
	 document.getElementById('father_nationality');  document.getElementById('mother_nationality');
	 // father passport number
	 window.filenumF =   "<a href='#father_passport_num'><strong>3.5 Plese provide values father passport number</strong></a>";
	 window.dataToWriteAt3_5isFNotNum = "<a href='#father_passport_num'><strong>3.5  values in father passport number must starts with character</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isFlength = "<a href='#father_passport_num'><strong>3.5 Plese provide values in father passport number and length must be 8</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isFSpecial = "<a href='#father_passport_num'><strong>3.5 father passport number must starts with character and do not include special character</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isFlengthex = "<a href='#father_passport_num'><strong>3.5 father passport number must be 8 characters</strong></a>" + '<br>';
	 //mother passport number
	 window.filenumM =   "<a href='#mother_passport_num'><strong>3.5 Plese provide values mother passport number</strong></a>";
	 window.dataToWriteAt3_5isMNotNum = "<a href='#mother_passport_num'><strong>3.5  values in mother passport number must starts with character</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isMlength = "<a href='#mother_passport_num'><strong>3.5 Plese provide values in mother passport number and length must be 8</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isMSpecial = "<a href='#mother_passport_num'><strong>3.5 mother passport number must starts with character and do not include special character</strong></a>" + '<br>';
	 window.dataToWriteAt3_5isMlengthex = "<a href='#mother_passport_num'><strong>3.5 mother passport number must be 8 characters</strong></a>" + '<br>';
	 // mother father Nationality
	 window.dataToWriteAt3_5Fnationality ="<a href='#father_nationality'><strong>Plese provide values in 3.5 applicant father nationality</strong></a>";
	 window.dataToWriteAt3_5FWhen_num_enterednationality ="<a href='#father_nationality'><strong>3.5 applicant father nationality must be character</strong></a>";
	 window.dataToWriteAt3_5Mnationality ='<br>' +"<a href='#mother_nationality'><strong>Plese provide values in 3.5 applicant mother nationality</strong></a>";
	 window.dataToWriteAt3_5MWhen_num_enterednationality ='<br>' +"<a href='#mother_nationality'><strong>3.5 applicant mother nationality must be character</strong></a>";

	 if (guardian_pass_port){
		 // passport_num_6_1fun(v, mdata, js, datalength, dataisNotnum, datasp, datalengthex)
	 values =  values + passport_num_6_1fun(fatherptxt, window.filenumF, 'js_input33', window.dataToWriteAt3_5isFlength, window.dataToWriteAt3_5isFNotNum,
																	 window.dataToWriteAt3_5isFSpecial, window.dataToWriteAt3_5isFlengthex);
	 values =  values + passport_num_6_1fun(motherptxt, window.filenumM, 'js_input34', window.dataToWriteAt3_5isMlength, window.dataToWriteAt3_5isMNotNum,
																		 window.dataToWriteAt3_5isMSpecial, window.dataToWriteAt3_5isMlengthex);
		values = values + nameCheckMethod(father_nationality, window.dataToWriteAt3_5Fnationality,
			                                 window.dataToWriteAt3_5FWhen_num_enterednationality, 'js_input35');
		 values = values + nameCheckMethod(mother_nationality, window.dataToWriteAt3_5Mnationality,
															 				window.dataToWriteAt3_5MWhen_num_enterednationality, 'js_input36');

			}
			else {
				document.getElementById('js_input33').innerHTML = ""; document.getElementById('js_input35').innerHTML = "";
				document.getElementById('js_input34').innerHTML = ""; document.getElementById('js_input36').innerHTML = "";
			}
			// father filenum
			window.filenumFFile = '<br>' + "<a href='#father_file_num'><strong>3.5 Plese provide values father file number</strong></a>";
			window.dataToWriteAt3_5isFFileNotNum = "<a href='#father_file_num'><strong>3.5  values in father file number must starts with character</strong></a>" + '<br>';
			window.dataToWriteAt3_5isFFilelength = "<a href='#father_file_num'><strong>3.5 Plese provide values in father file number and length must be 12</strong></a>" + '<br>';
			window.dataToWriteAt3_5isFFileSpecial = "<a href='#father_file_num'><strong>3.5 father file number must starts with character and do not include special character</strong></a>" + '<br>';
			window.dataToWriteAt3_5isFFilelengthex = "<a href='#father_file_num'><strong>3.5 father file number must be less then 12 characters</strong></a>" + '<br>';
			//mother filenum
			window.filenumMFile = "<a href='#mother_file_num'><strong>3.5 Plese provide values mother file number</strong></a>";
			window.dataToWriteAt3_5isMFileNotNum = "<a href='#mother_file_num'><strong>3.5  values in mother file number must starts with character</strong></a>" + '<br>';
			window.dataToWriteAt3_5isMFilelength = "<a href='#mother_file_num'><strong>3.5 Plese provide values in mother file number and length must be 12</strong></a>" + '<br>';
			window.dataToWriteAt3_5isMFileSpecial = "<a href='#mother_file_num'><strong>3.5 mother file number must starts with character and do not include special character</strong></a>" + '<br>';
			window.dataToWriteAt3_5isMFilelengthex = "<a href='#mother_file_num'><strong>3.5 mother file number must be less then 12 characters</strong></a>" + '<br>';
			// console.log("mother_file_num "+ guardian_file_number);
			if(guardian_file_number){
				values =  values + lengthOfField(father_file_num, window.filenumFFile, 'js_input37', window.dataToWriteAt3_5isFFilelength,
				         window.dataToWriteAt3_5isFFileNotNum,	window.dataToWriteAt3_5isFFileSpecial, window.dataToWriteAt3_5isFFilelengthex);
				values =  values + lengthOfField(mother_file_num, window.filenumMFile, 'js_input38', window.dataToWriteAt3_5isMFilelength,
				          window.dataToWriteAt3_5isMFileNotNum,	window.dataToWriteAt3_5isMFileSpecial, window.dataToWriteAt3_5isMFilelengthex);
				 values = values + nameCheckMethod(father_nationality, window.dataToWriteAt3_5Fnationality,
																						window.dataToWriteAt3_5FWhen_num_enterednationality, 'js_input35');
					values = values + nameCheckMethod(mother_nationality, window.dataToWriteAt3_5Mnationality,
																					 window.dataToWriteAt3_5MWhen_num_enterednationality, 'js_input36');
			}
			else {
				document.getElementById('js_input37').innerHTML = "";  document.getElementById('js_input38').innerHTML = "";

			}
	// 4.1 House No. and Street Name
	window.dataToWrite4_1HouseStreet = "<a href='#house_and_street'><strong>4.1 Enter house and street</strong></a>" + '<br>';
	window.dataToWrite4_1HouseStreetspex = "<a href='#house_and_street'><strong>4.1 Entered address must not contain special characters</strong></a>"+ '<br>';
	window.dataToWrite4_1HouseStreetless = "<a href='#house_and_street'><strong>4.1 house and street  must be less then 500 and greater then 10 characters</strong></a>"+ '<br>';
	var house_and_street = document.firstform.txt22.value;
	house_and_streetfun(house_and_street, window.dataToWrite4_1HouseStreet, window.dataToWrite4_1HouseStreetspex,
	                    window.dataToWrite4_1HouseStreetless, 'js_input39');
  // 4.1 Village or Town or City
	window.dataToWrite4_1village = "<a href='#village_or_town'><strong>4.1 Enter Village or Town or City</strong></a>"+ '<br>';
	window.dataToWrite4_1villagespex = "<a href='#village_or_town'><strong>4.1 Village or Town or City must not contain special characters</strong></a>"+ '<br>';
	window.dataToWrite4_1villageless = "<a href='#village_or_town'><strong>4.1 Village or Town or City  must be less then 500 and greater then 10 characters</strong></a>"+ '<br>';
	var village_or_town = document.firstform.txt23.value;
	house_and_streetfun(village_or_town, window.dataToWrite4_1village, window.dataToWrite4_1villagespex,
											window.dataToWrite4_1villageless, 'js_input40');
	// 4.1 District
	window.dataToWrite4_1District = "<a href='#distict4_1'><strong>4.1 Enter district</strong></a>";
	window.dataToWrite4_1Districtspex = "<a href='#distict4_1'><strong>4.1 district must not contain special characters</strong></a>";
	window.dataToWrite4_1Districtless = "<a href='#distict4_1'><strong>4.1 district  must be less then 500 and greater then 10 characters</strong></a>";
	var district4_1 = document.firstform.txt24.value;
	house_and_streetfun(district4_1, window.dataToWrite4_1District, window.dataToWrite4_1Districtspex,
											window.dataToWrite4_1Districtless, 'js_input41');
	// 4.1 Police station
	window.dataToWrite4_1Pstation = '<br>'+"<a href='#police_station4_1'><strong>4.1 Enter Police station</strong></a>";
	window.dataToWrite4_1Pstationspex = '<br>'+"<a href='#police_station4_1'><strong>4.1 Police station must not contain special characters</strong></a>";
	window.dataToWrite4_1Pstationless = '<br>'+"<a href='#police_station4_1'><strong>4.1 Police station  must be less then 500 and greater then 10 characters</strong></a>";
	var pstation4_1 = document.firstform.txt25.value;
	house_and_streetfun(pstation4_1, window.dataToWrite4_1Pstation, window.dataToWrite4_1Pstationspex,
											window.dataToWrite4_1Pstationless, 'js_input43');
	// 4.1 state/UT
	window.dataToWriteAt4_1state ='<br>'+"<a href='#state_ut4_1'><strong>Plese provide values in 4.1 applicant residing state</strong></a>";
	window.dataToWriteAt4_1state_is_invalid = '<br>'+"<a href='#state_ut4_1'><strong>4.1 applicant residing state is a invalid state</strong></a>";
  var state4_1 = document.firstform.txt26.value;
	values = values + checkState(state4_1, window.dataToWriteAt4_1state, window.dataToWriteAt4_1state_is_invalid, 'js_input44');
  // 4.1 mobile_number
	window.dataToWrite4_1mobile = '<br>'+"<a href='#mobile_number4_1'><strong>In 4.1 applicant mobile number</strong></a>";
  window.dataToWrite4_1mobilespex = '<br>'+"<a href='#mobile_number4_1'><strong>In 4.1 only digits are allowed in mobile number</strong></a>";
	window.dataToWrite4_1mobilelength = '<br>'+"<a href='#mobile_number4_1'><strong>In 4.1 length of the digit must be 10 digits</strong></a>";
	var mobile_number4_1 = document.firstform.txt28.value;
	mobile_numChecker(mobile_number4_1, window.dataToWrite4_1mobile, window.dataToWrite4_1mobilespex, window.dataToWrite4_1mobilelength, 'js_input45');
  // 4.1 Pin
	window.dataToWrite4_1pin = "<a href='#pin4_1'><strong>In 4.1 applicant pin code</strong></a>";
	window.dataToWrite4_1pinspex = "<a href='#pin4_1'><strong>In 4.1 only digits are allowed in pincode</strong></a>";
	window.dataToWrite4_1pinlength = "<a href='#pin4_1'><strong>In 4.1 pin code must be 10 digits</strong></a>";
	var pin_code4_1 = document.firstform.txt27.value;
	mobile_numChecker(pin_code4_1, window.dataToWrite4_1pin, window.dataToWrite4_1pinspex, window.dataToWrite4_1pinlength, 'js_input46');
  // 4.1 Telephone Number
	window.dataToWrite4_1telephone = '<br>'+"<a href='#tnumber4_1'><strong>In 4.1 applicant telephone number</strong></a>";
	window.dataToWrite4_1telephonespex = '<br>'+"<a href='#tnumber4_1'><strong>In 4.1 only digits are allowed in telephone number</strong></a>";
	window.dataToWrite4_1telephonelength = '<br>'+"<a href='#tnumber4_1'><strong>In 4.1 telephone no.  must be 10 digits</strong></a>";
	var telephone_num = document.firstform.txt29.value;
	if (telephone_num.length=="null"||telephone_num.length==""){
		document.getElementById('js_input47').innerHTML="";
	}
	else {
		mobile_numChecker(telephone_num, window.dataToWrite4_1telephone, window.dataToWrite4_1telephonespex, window.dataToWrite4_1telephonelength, 'js_input47');
	}
	// 4.1 E-mail ID
	window.dataAt4_1emailid = '<br>'+"<a href='#email_id4_1'><strong>In 4.1 applicant email id</strong></a>";
	window.dataAt4_1emailid_invalid = '<br>'+"<a href='#email_id4_1'><strong>In 4.1 applicant email id is invalid</strong></a>";
	var email_id4_1 = document.firstform.txt30.value;
	email_check(email_id4_1, window.dataAt4_1emailid, window.dataAt4_1emailid_invalid, 'js_input48');
  var permanent_address_not_same = document.getElementById('permanent4_2N').checked
	if (permanent_address_not_same) {
		// 5 Name and Address
		window.dataToWriteAt5name_address = '<br>'+"<a href='#name_address_5'><strong>In 5 Enter name and address</strong></a>" + '<br>';
		window.dataToWriteAt5name_addressspex ='<br>'+ "<a href='#name_address_5'><strong>In 5 Entered name and address must not contain special characters</strong></a>"+ '<br>';
		window.dataToWriteAt5name_addressless = '<br>'+"<a href='#name_address_5'><strong>In 5 name and address  must be less then 500 and greater then 10 characters</strong></a>"+ '<br>';
		var name_address = document.firstform.txt31.value;
		house_and_streetfun(name_address, window.dataToWriteAt5name_address, window.dataToWriteAt5name_addressspex,
												window.dataToWriteAt5name_addressless, 'js_input49');
		// 5 mobile number
		window.dataToWrite5_1mobile = "<a href='#mobile_num_5'><strong>In 5 applicant mobile number</strong></a>";
		window.dataToWrite5_1mobilespex = "<a href='#mobile_num_5'><strong>In 5 only digits are allowed in mobile number</strong></a>";
		window.dataToWrite5_1mobilelength = "<a href='#mobile_num_5'><strong>In 5 length of the digit must be 10 digits</strong></a>";
		var mobile_number5_1 = document.firstform.txt32.value;
		mobile_numChecker(mobile_number5_1, window.dataToWrite5_1mobile, window.dataToWrite5_1mobilespex, window.dataToWrite5_1mobilelength, 'js_input50');
		// 5 Telephone number
		window.dataToWrite5_1telephone = '<br>'+"<a href='#telephone_num_5'><strong>In 5 applicant telephone number</strong></a>";
		window.dataToWrite5_1telephonespex = '<br>'+"<a href='#telephone_num_5'><strong>In 5 only digits are allowed in telephone number</strong></a>";
		window.dataToWrite5_1telephonelength = '<br>'+"<a href='#telephone_num_5'><strong>In 5 telephone no.  must be 10 digits</strong></a>";
		var telephone_num_5 = document.firstform.txt33.value;
		if (telephone_num_5.length=="null"||telephone_num_5.length==""){
			document.getElementById('js_input51').innerHTML="";
		}
		else {
			mobile_numChecker(telephone_num_5, window.dataToWrite5_1telephone, window.dataToWrite5_1telephonespex, window.dataToWrite5_1telephonelength, 'js_input51');
		}
		// 5 email id
		window.dataAt5_1emailid = '<br>'+"<a href='#email_5'><strong>In 5 applicant email id</strong></a>";
		window.dataAt5_1emailid_invalid = '<br>'+"<a href='#email_5'><strong>In 5 applicant email id is invalid</strong></a>";
		var email_id5_1 = document.firstform.txt34.value;
		email_check(email_id5_1, window.dataAt5_1emailid, window.dataAt5_1emailid_invalid, 'js_input52');
		//
	}
	else {
		document.getElementById('js_input49').innerHTML = '';  document.getElementById('js_input50').innerHTML = '';
		document.getElementById('js_input51').innerHTML = '';  document.getElementById('js_input52').innerHTML = '';
	}
  var flag_for_6 = document.getElementById("Re-issue").checked;
	if (flag_for_6){
		// 6.1 Details 	Date of Issue (DD-MM-YYYY)	Date of Expiry (DD-MM-YYYY)
		var date_of_issue = document.getElementById("dateInput1").value;
		var date_of_expiry = document.getElementById("dateInput2").value; console.log(date_of_expiry+"date_of_expiry");
		console.log(date_of_issue+"date_of_issue");
		window.dataToWriteAt6_1dates = '<br>'+"<a href='#dateInput1'><strong>In 6.1 enter date of expiry and issue</strong></a>";
		window.dataToWriteAt6_1dateofex_isless = '<br>'+"<a href='#dateInput1'><strong>In 6.1 date of expiry must be greater then issue</strong></a>";
		check_dates_issue_and_expiry(date_of_issue, date_of_expiry, window.dataToWriteAt6_1dates, window.dataToWriteAt6_1dateofex_isless, 'js_input53');
		// 6.1 passport/ IdentityCertificate Number
		window.passport_num_6_1 ='<br>'+"<a href='#Passport_Certificate_6_1'><strong>In 6.1 passport identity certificate number</strong></a>";
		window.dataToWriteAt6_1isNotNum = '<br>'+"<a href='#Passport_Certificate_6_1'><strong>6.1  values passport number must starts with character</strong></a>" + '<br>';
		window.dataToWriteAt6_1islength = '<br>'+"<a href='#Passport_Certificate_6_1'><strong>6.1 Plese provide values in passport number and length must be 8</strong></a>" + '<br>';
		window.dataToWriteAt6_1isSpecial = '<br>'+"<a href='#Passport_Certificate_6_1'><strong>6.1 passport number must starts with character and do not include special character</strong></a>" + '<br>';
		window.dataToWriteAt6_1islengthex ='<br>'+ "<a href='#Passport_Certificate_6_1'><strong>6.1 passport number must be not more then 8 characters</strong></a>" + '<br>';
		var passport_num_6_1 = document.firstform.txt_pass_6_1.value;
		passport_num_6_1fun(passport_num_6_1, window.passport_num_6_1, 'js_input55', window.dataToWriteAt6_1islength, window.dataToWriteAt6_1isNotNum,
																		window.dataToWriteAt6_1isSpecial, window.dataToWriteAt6_1islengthex);
		// 6.1 place of issue
		window.dataToWriteAt6_1name_address = "<a href='#placeofissue'><strong>In 6.1 place of issue</strong></a>" + '<br>';
		window.dataToWriteAt6_1name_addressspex ='<br>'+ "<a href='#placeofissue'><strong>In 6.1 place of issue must not contain special characters</strong></a>"+ '<br>';
		window.dataToWriteAt6_1name_addressless = '<br>'+"<a href='#placeofissue'><strong>In 6.1 place of issue  must be less then 500 and greater then 10 characters</strong></a>"+ '<br>';
		var place_of_issue_6_1 = document.firstform.txt_poi.value;
		house_and_streetfun(place_of_issue_6_1, window.dataToWriteAt6_1name_address, window.dataToWriteAt6_1name_addressspex,
												window.dataToWriteAt6_1name_addressless, 'js_input56');
	}
	else {
		document.getElementById('js_input53').innerHTML = ""; document.getElementById('js_input54').innerHTML = "";
		document.getElementById('js_input55').innerHTML = ""; document.getElementById('js_input56').innerHTML = "";
	}
	// 8.1 fee amount
	var fee_amount_8_1 = document.firstform.txt_fee_amount_8_1.value;
	window.dataAt8_1fee_amount = '<br>'+ "<a href='#fee_amount_8_1'><strong>In 8.1 enter fee amount</strong></a>";
	window.dataAt8_1fee_amountisnot_num ='<br>'+ "<a href='#fee_amount_8_1'><strong>In 8.1 only digits and decimal points are allowed</strong></a>";
	decimal_numbersAt8(fee_amount_8_1, window.dataAt8_1fee_amount, window.dataAt8_1fee_amountisnot_num, 'js_input57');
	// 8.1 demand draft
	var demand_draft_8_1 = document.firstform.txt_demand_draft_8_1.value;
	window.dataAt8_1demand_draft =  '<br>'+"<a href='#demand_draft_8_1'><strong>In 8.1 DD enter fee amount</strong></a>";
	window.dataAt8_1demand_draft_not_num =  '<br>'+"<a href='#demand_draft_8_1'><strong>In 8.1 DD only digits and decimal points are allowed</strong></a>";
	decimal_numbersAt8(demand_draft_8_1, window.dataAt8_1demand_draft, window.dataAt8_1demand_draft_not_num, 'js_input59');
	// 8 dd date of issue and Expiry
	var date_of_issue_8_1 = document.getElementById("date_of_issue_8_1").value;
	var date_of_expiry_8_1 = document.getElementById("date_of_expiry_8_1").value;
	// console.log(date_of_expiry+"date_of_expiry");
	// console.log(date_of_issue+"date_of_issue");
	window.dataToWriteAt8_1dates = '<br>'+"<a href='#date_of_issue_8_1'><strong>In 8.1 enter date of expiry and issue</strong></a>";
	window.dataToWriteAt8_1dateofex_isless = '<br>'+"<a href='#date_of_issue_8_1'><strong>In 8.1 date of expiry must be greater then issue</strong></a>";
	check_dates_issue_and_expiryfor8_1(date_of_issue_8_1, date_of_expiry_8_1, window.dataToWriteAt8_1dates, window.dataToWriteAt8_1dateofex_isless, 'js_input58');
  // 8.1 Branch
	window.dataToWrite8_1branch = '<br>'+"<a href='#branch_8_1'><strong>8.1 Branch Enter</strong></a>" + '<br>';
	window.dataToWrite8_1branchspex = '<br>'+"<a href='#branch_8_1'><strong>8.1 Branch must not contain special characters</strong></a>"+ '<br>';
	window.dataToWrite8_1branchless ='<br>'+ "<a href='#branch_8_1'><strong>8.1 Branch  must be less then 500 and greater then 10 characters</strong></a>"+ '<br>';
	var branch_8_1 = document.firstform.txt_branch_8_1.value;
	house_and_streetfun(branch_8_1, window.dataToWrite8_1branch, window.dataToWrite8_1branchspex,
											window.dataToWrite8_1branchless, 'js_input60');
	// 7 others  detail
	// 7.1.1
	  window.dataToWriteAt7_1_1 = "<a href='#radio7_1_1y'><strong>7.1.1 Select at least one </strong></a>";
	var radio7_1_1y = document.getElementById("radio7_1_1y"); var radio7_1_1n = document.getElementById("radio7_1_1n");
	 take_two_var(radio7_1_1y, radio7_1_1n, window.dataToWriteAt7_1_1, 'js_input61');
	// 7.1.2
	window.dataToWriteAt7_1_2 = "<a href='#radio7_1_2y'><strong>7.1.2 Select at least one </strong></a>";
 var radio7_1_2y = document.getElementById("radio7_1_2y"); var radio7_1_2n = document.getElementById("radio7_1_2n");
 take_two_var(radio7_1_2y, radio7_1_2n, window.dataToWriteAt7_1_2, 'js_input62');
 // 7.1.3
 window.dataToWriteAt7_1_3 = "<a href='#radio7_1_3y'><strong>7.1.3 Select at least one </strong></a>";
 var radio7_1_3y = document.getElementById("radio7_1_3y"); var radio7_1_3n = document.getElementById("radio7_1_3n");
 take_two_var(radio7_1_3y, radio7_1_3n, window.dataToWriteAt7_1_3, 'js_input63');
 // 7.1.4
 window.dataToWriteAt7_1_4 = "<a href='#radio7_1_4y'><strong>7.1.4 Select at least one </strong></a>";
 var radio7_1_4y = document.getElementById("radio7_1_4y"); var radio7_1_4n = document.getElementById("radio7_1_4n");
 take_two_var(radio7_1_4y, radio7_1_4n, window.dataToWriteAt7_1_4, 'js_input64');
 // 6.2 Have you ever applied for passport, but not
 // 10 self_declaration
 var today_date = new Date(); //js_date_current
 var local_date = document.getElementById('self_declaration').value;
 console.log(local_date+ " local date")
 var inserted_date = new Date(local_date);
 var difference = today_date.getTime() - inserted_date.getTime();
 var difference = Math.floor((difference/(1000*60*60*24)));
 console.log(difference);
 console.log(today_date + " dddodddd");
 console.log(inserted_date + " dddodddd");
 if (difference==0){
	 document.getElementById('js_date_current').innerHTML = "";
 }
 else {
 	document.getElementById('js_date_current').innerHTML = "<a href='#self_declaration'><strong>10 Inserted date must be today's</strong></a>";
 }
  //return true of flase
  // console.log("value="+values);
  // if (values ==34)
  // {  return true;}
  // else {return false;}
  return false;
  }


  function verifyAnswer() {
    var permanent_address_same = document.getElementById('permanent4_2Y').checked;
		if (permanent_address_same) {
			document.getElementById('name_address_5').disabled=true; document.getElementById('mobile_num_5').disabled = true;
			document.getElementById('email_5').disabled=true; document.getElementById('telephone_num_5').disabled = true;
		}
		else {
			document.getElementById('name_address_5').disabled=false; document.getElementById('mobile_num_5').disabled = false;
			document.getElementById('email_5').disabled=false; document.getElementById('telephone_num_5').disabled = false;
		}

  var fresh = document.getElementById("Fresh").checked;
  if (fresh == true){
  //disable all the radio button
  document.getElementById("validityein3").disabled = true;
  document.getElementById("reissueofp").disabled = true;
  document.getElementById("validityemore3").disabled = true;
  document.getElementById("lostp").disabled = true;
  document.getElementById("changeinep").disabled = true;
  document.getElementById("damagedpass").disabled = true;

  document.getElementById("appearance1_3").disabled=true; document.getElementById("signature1_3").disabled = true;
  document.getElementById("given_name1_3").disabled = true; document.getElementById("surname1_3").disabled = true;
  document.getElementById("dob1_3").disabled = true;      document.getElementById("spouse_name1_3").disabled = true;
  document.getElementById("address1_3").disabled=true;    document.getElementById("delete_ecr1_3").disabled=true;
  document.getElementById("other_specify1_3").disabled=true;
	document.getElementById('reason_specify1_3').disabled=true;

	document.getElementById('Passport_Certificate_6_1').disabled=true; document.getElementById('dateInput1').disabled=true;
	document.getElementById('dateInput2').disabled = true; document.getElementById('placeofissue').disabled = true;

	document.getElementById('File_num_6_2').disabled= true; document.getElementById('date_6_2').disabled = true;

  //
}
  //get the value if checkbox is checked
  var reissue = document.getElementById("Re-issue").checked;
  if (reissue == true) {
  //enable all the radio button
  document.getElementById("validityein3").disabled = false;
  document.getElementById("reissueofp").disabled = false;
  document.getElementById("validityemore3").disabled = false;
  document.getElementById("lostp").disabled = false;
  document.getElementById("changeinep").disabled = false;
  document.getElementById("damagedpass").disabled = false;
	document.getElementById('reason_specify1_3').disabled=true;
  //check 1.3 change in existing p particulars
  var change_inep = document.getElementById("changeinep").checked;
  // console.log("value of c in e p"+ changeinep);
  if(change_inep==true){
    document.getElementById("appearance1_3").disabled=false; document.getElementById("signature1_3").disabled = false;
    document.getElementById("given_name1_3").disabled =false; document.getElementById("surname1_3").disabled = false;
    document.getElementById("dob1_3").disabled = false;      document.getElementById("spouse_name1_3").disabled = false;
    document.getElementById("address1_3").disabled=false;    document.getElementById("delete_ecr1_3").disabled=false;
    document.getElementById("other_specify1_3").disabled=false;
		var other_specify = document.getElementById('other_specify1_3').checked;
		console.log(other_specify+" other specify");
		if (other_specify) {
			document.getElementById('reason_specify1_3').disabled=false;
		}

  }
	else if(change_inep==false){
		document.getElementById("appearance1_3").disabled=true; document.getElementById("signature1_3").disabled = true;
		document.getElementById("given_name1_3").disabled =true; document.getElementById("surname1_3").disabled = true;
		document.getElementById("dob1_3").disabled = true;      document.getElementById("spouse_name1_3").disabled = true;
		document.getElementById("address1_3").disabled=true;    document.getElementById("delete_ecr1_3").disabled=true;
		document.getElementById("other_specify1_3").disabled=true;

	}
  // if radio button re-issue of passport is clicked then check 1.2 if re-issue
 }
 // 2.11
 var govt = document.getElementById('govt2_11'); var statu2_11 = document.getElementById('statutory2_11');
 var psu2_11 = document.getElementById('psu2_11');
 if (psu2_11.checked==true|| govt.checked==true|| statu2_11.checked==true) {
 	document.getElementById("employed2_11").disabled = false;
 }
 else {
	 document.getElementById("employed2_11").disabled = true;
 }
 var guardian_pass_port = document.getElementById('legal_pass_number').checked;
  document.getElementById('father_passport_num').disabled = true;    document.getElementById('mother_passport_num').disabled = true;
 var guardian_file_number = document.getElementById('legal_file_number').checked;
 document.getElementById('father_file_num').disabled = true; var mother_file_num = document.getElementById('mother_file_num').disabled = true;
  document.getElementById('father_nationality').disabled = true;  document.getElementById('mother_nationality').disabled = true;
 if(guardian_pass_port){
	 document.getElementById('father_passport_num').disabled = false; document.getElementById('mother_passport_num').disabled= false;
	 document.getElementById('father_nationality').disabled = false;  document.getElementById('mother_nationality').disabled = false;
 }
 if(guardian_file_number){
	document.getElementById('father_file_num').disabled = false;   document.getElementById('mother_file_num').disabled = false;
	document.getElementById('father_nationality').disabled = false;  document.getElementById('mother_nationality').disabled = false;
 }
 var applied_but_not_issue_y = document.getElementById('6_2_radioy').checked;
 var applied_but_not_issue_n = document.getElementById('6_2_radion').checked;
 if(applied_but_not_issue_y){
	 	document.getElementById('File_num_6_2').disabled= false; document.getElementById('date_6_2').disabled = false;
 }
 else {
 	document.getElementById('File_num_6_2').disabled= true; document.getElementById('date_6_2').disabled = true;
 }

}
