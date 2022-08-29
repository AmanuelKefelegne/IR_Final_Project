import wordconvert from './wordconvert';

let stat=0;
function Stemmer(word) {
    let stemm="";
    stat=0;
    //console.log(word);
    //console.log(stat);
    if (stat!==1){
        stemm=Suffix(word,stemm);
    }
    if (stat!==1){
        stemm=Prefix(word,stemm);
    }
    if (stat!==1){
        stemm=Infix(word,stemm);
    }
    //console.log(stemm);
    return stemm;

}
export default Stemmer

function Prefix(word,stemm){
    let text=word;
    //console.log(text+"bb"+stemm+"dd")
    if (text.substring(0, 1) == "የ" || text.substring(0, 1) == "ከ" || text.substring(0, 1) == "በ") {
        stemm+=" "+text.substring(1, text.length);
        Infix(stemm,stemm);
        stat=1;
    }
    if (text.substring(0, 1) == "ስ" && text.substring(1, 2) == "ለ") {
        stemm+=" "+text.substring(2, text.length);
        Infix(stemm,stemm);
        stat=1;
    }
    //console.log(text.substring(0, 3)+"ee");
    if (text.substring(0, 3) == "እንደ") {
        stemm+=" "+text.substring(3, text.length);
       // console.log(stemm +"cc");
        Infix(stemm,stemm);
        stat=1;
    }
    return stemm;
}
function Suffix(word,stemm){
    let text=wordconvert(word).toString();
    //console.log(text);
    //let text ="ሰዉነት"=="ሰውኡነትእ"=="ሰዉ"
    if (text.substring(text.length-4)=="ኡነትእ") {
        stemm+=" "+word.substring(0,word.length - 2);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text="ቤቶች"=="ብኤትኦችእ"=="ቤት"
    if(text.substring(text.length-3)=="ኦችእ"){
        //let text="ጫማዎች"=="ጭኣምኣውኦችእ"=="ጫማ"
    if(text.substring(text.length-5)=="ኣውኦችእ"){
        stemm+=" "+word.substring(0,word.length-2);
        Prefix(stemm,stemm);
        stat=1;
    }
    else{
        stemm+=" "+word.substring(0,word.length-2)+text.substring(text.length-4,text.length-3);
        Prefix(stemm,stemm);
        stat=1;
    }
    }
    //let text = "ቤቱ"=="ብኤትኡ"=="ቤት";
    if(text.substring(text.length-3)=="ኤትኡ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text ="ቤቷ"=="ብኤትኧ"=="ቤት"
    if(text.substring(text.length-3)=="ኤትኧ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text ="ቤቴ"=="ብኤትኤ"=="ቤት"
    if(text.substring(text.length-3)=="ኤትኤ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text="መኪናዬ"=="መክኢንኣይኤ"=="መኪና"
    if(text.substring(text.length-3)=="ኣይኤ"){
        stemm+=" "+word.substring(0,word.length-1);
        stat=1;
    }
    //let text="መታቸው"=="መትኣቸውእ"=="መታ"
    if(text.substring(text.length-4)=="ኣቸውእ"){
        stemm+=" "+word.substring(0,word.length-2);
        Prefix(stemm,stemm);
        stat=1;
    }
    if(text.substring(text.length-4)=="ኣቸውእ"){
        stemm+=" "+word.substring(0,word.length-3)+text.substring(text.length-5,text.length-4);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text="ራስህ"=="ርኣስእህእ"=="ራስ"
    if(text.substring(text.length-3)=="እህእ"){
        stemm+=" "+word.substring(0,word.length-2)+ text.substring(text.length-4,text.length-3);
        Prefix(stemm,stemm);
        stat=1;
    }
    //let text="ራስሽ"=="ርኣስእሽእ"=="ራስ"
    if(text.substring(text.length-3)=="እሽእ"){
        stemm+=" "+word.substring(0,word.length-2)+ text.substring(text.length-4,text.length-3);
        Prefix(stemm,stemm);
        stat=1;
    }
    return stemm;
}
function Infix(word,stemm) {
    let text=word;
    if (text.length>=4){
        if(text.substring(1,2)=="ና" || text.substring(1,2)=="ባ" || text.substring(1,2)=="ላ" || text.substring(1,2)=="ጫ" || text.substring(1,2)=="ጃ"){
        stemm+=" "+text.substring(0,1)+text.substring(2,text.length);
        stat=1;
    }
    else{
        stemm+=" "+text;
        stat=1;     
    }
    }
    else{
        stemm+=" "+text;
        stat=1; 
    }   
    return stemm;
}