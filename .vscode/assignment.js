function feetToMile(feets)
{
var miles=feets*0.000189394;

return miles;
}

var feets=5000;
var miles=feetToMile(feets);
console.log(miles);

1
function woodCalculator(chair,table,bed){
    var chairfeet= chair*1;
    var tablefeet=table*3;
    var bedfeet=bed*5;
    var totalfeet=chairfeet+tablefeet+bedfeet;
    return totalfeet;
}


var chair=12;
var table=11;
var bed=6;
var totalfeet=woodCalculator(chair,table,bed);
console.log(totalfeet);


function brickCalculator(floor){
    var totalfeet=0;
    for (var i=1;i<=floor;i++)
    {
        if(i<=10 && i>0)
        {
            totalfeet=totalfeet+15;
            console.log(totalfeet);
        }
        if(i<=20 && i>10)
        {
            totalfeet=totalfeet+12;
        }
        if(i>20)
        {
            totalfeet=totalfeet+10;
        }


    }
    var totalbricks=totalfeet*1000;
return totalbricks;
}
var floor=22;
var totalbricks=brickCalculator(floor);
console.log(totalbricks);


function tinyFriend(name)
{   var namelength=0;
    var nameArray=name[0].length;
    for(var i=1;i<name.length;i++){
        if(name[i].length<nameArray)
        {nameArray=name[i];
        }
    }

    return nameArray;
}

var name=["Nabid","Snigdha","sumu","Riddhe"];
tinyName=tinyFriend(name);
console.log(tinyName);