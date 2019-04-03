let statmentOne = "Uwielbiam JavaScript";
let StatmentTwo = "Jestem świetnym programistą";

function selectLongerString(x,y){
    let longest;
    if(x.length > y.length){
        return x
    } else {
        return y
    }
}

console.log(selectLongerString(statmentOne,StatmentTwo));