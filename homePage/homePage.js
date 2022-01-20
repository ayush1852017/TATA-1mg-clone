var medicineList=[
    {
        "text"  : "All Medicines",
        "value" : "1"
      },
      {
        "text"     : "Medicines by Therapeutic Class",
        "value"    : "2",
        "selected" : true
      },
     
];
var selectBox = document.getElementById('rec_mode');

for(var i = 0; i< medicineList.length; i++){
  let option = medicineList[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}

var covid =[
    {
        "text":"Covid Essential",
        "value":"1"
    },
    {
        "text":"Covid-19 Self test kits",
        "value" :"2",
        "selected" : true
    },
]
var selectBox2 = document.getElementById('rec_mode2')
for(var i =0;i < covid.length;i++){
    let option = covid[i];
    selectBox2.options.add( new Option(option.text, option.value, option.selected)                   );
}

var covid1 =[
    {
        "text":"Featured",
        "value":"1"
    },
    {
        "text":"Winter Care",
        "value" :"2",
        "selected" : true
    }
]
var selectBox3 = document.getElementById('rec_mode3')
for(var i =0;i < covid1.length;i++){
    let option = covid1[i];
    selectBox3.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid2 =[
    {
        "text":"Vitamins & Nutrition",
        "value":"1"
    },
    {
        "text":"Vitamins & Supplements",
        "value" :"2",
        "selected" : true
    }
]
var selectBox4 = document.getElementById('option1')
for(var i =0;i < covid2.length;i++){
    let option = covid2[i];
    selectBox4.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid3 =[
    {
        "text":"Diabetes",
        "value":"1"
    },
    {
        "text":"Devices",
        "value" :"2",
        "selected" : true
    }
]
var selectBox5 = document.getElementById('option2')
for(var i =0;i < covid3.length;i++){
    let option = covid3[i];
    selectBox5.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid4 =[
    {
        "text":"Healthcare Devices",
        "value":"1"
    },
    {
        "text":"Masks (N95, Surgical and more)",
        "value" :"2",
        "selected" : true
    }
]
var selectBox7 = document.getElementById('option3')
for(var i =0;i < covid4.length;i++){
    let option = covid4[i];
    selectBox7.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid5 =[
    {
        "text":"Personal Care",
        "value":"1"
    },
    {
        "text":"Sexual Wellness",
        "value" :"2",
        "selected" : true
    }
]
var selectBox8 = document.getElementById('option4')
for(var i =0;i < covid5.length;i++){
    let option = covid5[i];
    selectBox8.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid6 =[
    {
        "text":"Health conditions",
        "value":"1"
    },
    {
        "text":"Stomach Care",
        "value" :"2",
        "selected" : true
    }
]
var selectBox9 = document.getElementById('option5')
for(var i =0;i < covid6.length;i++){
    let option = covid6[i];
    selectBox9.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid7 =[
    {
        "text":"Ayurveda Products",
        "value":"1"
    },
    {
        "text":"Ayurveda Top Brands",
        "value" :"2",
        "selected" : true
    }
]
var selectBox10 = document.getElementById('option6')
for(var i =0;i < covid7.length;i++){
    let option = covid7[i];
    selectBox10.options.add( new Option(option.text, option.value, option.selected)                   );
}
var covid7 =[
    {
        "text":"Homeopathy",
        "value":"1"
    },
    {
        "text":"Homeopathy Top Brands",
        "value" :"2",
        "selected" : true
    }
]
var selectBox10 = document.getElementById('option7')
for(var i =0;i < covid7.length;i++){
    let option = covid7[i];
    selectBox10.options.add( new Option(option.text, option.value, option.selected)                   );
}