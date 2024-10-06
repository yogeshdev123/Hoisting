console.log("Check given string is palindrome or not");
var pal="MADAM";
console.log(pal)
var lef=0;var rig=pal.length-1;
function isPal(pa){
    var lef=0;var rig=pal.length-1;
    while(lef>=rig){
    if(pa[lef]!=pa[rig])return false;
    
    lef++;rig--;
}
return true;
}
(isPal(pal))?console.log("Given String is Palindrome"):console.log("Given String is Not a Palindrome");
// Turn uppercase to lowercase and vice-versa
console.log("Turn uppercase to lowercase and vice-versa")
var stri="helLO SoMeThIng";
console.log(stri)
console.log("Actual string is ",stri)
var res="";

for(let i in stri){
    if(stri[i]==" ")res+=stri[i];
    else if(stri[i]==stri[i].toUpperCase())res+=stri[i].toLowerCase();
    else res+=stri[i].toUpperCase();
}
console.log("The Modified string is ",res)

