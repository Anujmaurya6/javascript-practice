//this keyword js me sabse jyada use hota he
// keyword ka matlab ki aisa word ki programming langauge mein meaning ho uska
//this ki value bar bar bdal skti he alag alag condition me ,sari condition me sikh jao to this ko smjh jaoge 

//ab niche mera jitne bhi chiz he sabme alag alag value ayegi use :

//global-window
console.log(this)
//function -window
function abc(){
    console.log(this);

}
//method-object
var obj={
    name:function(){
        console.log(this);//method ke andar this ki vvalue object hoti he 
    }
}
obj.name();
//funtion inside method(es5)-window
var obj2={
    sayname:function(){
        function childfnc(){
            console.log(this);
        }
    }
}
obj2.sayname();
//fnc inside method(es6)-objeect


var obj3={
    sayname:function(){
        const child=()=>{
            console.log(this);
        }
        child();
    }
}
obj3.sayname(); 

//consructor function me-new blank object
function add(){
    console.log(this);
}
const ans=new add();

// event listener-that elemnt jis par event list laga ho 
document.getquerySelector("button").addEventListener("click",function(){
    console.log(this);
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//call apply bind--------------yeh padhenge idhar 
//ye teenn tarika he function ko call karne ka kisi object ko this mann kar 
const obj ={name:"harsh"}
function abcd(){
    console.log(this);
}
abcd.call(obj)


const obj ={name:"harsh"}
function abcd(){
    console.log(this,1,2);
}
abcd.apply(obj,[1,2])

const obj ={name:"harsh"}
function abcd(){
    console.log(this);
}
abcd.bind(obj)

//***********call apply bind yeh teen tarike he function ko call karne ke kis object ko this mankar ab yeh smjha */


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//prototypal inheritance=ek object doosre object se cheezein automatically udhaar le sakta hai


function makehuman(){
    this.name=name;
    this.age=age;
}
const human1=new makehuman("harsh",23);


function name(ly){
    this.name="harsh",
console.log(namely)
}

//protypal inheritance

//--------------------------------------------------------
///closures= aisa koi bhi function jo ek or function ko return karde 
function counter(){
    var count=0;
    return function(){
        count++;
        console.log(count);
    }
}
 var fnc=counter();
 fnc();
//event delegation=jab ek eventlistener se kai saare differnt elents ke events ko handle kar skae .





