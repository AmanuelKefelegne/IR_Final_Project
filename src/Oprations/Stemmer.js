import wordconvert from './Operations/wordconvert';
let stemm=[];
let stat=0;
function Stemmer(word) {
    if (stat!=1){
        Suffix(word);
    }
    if (stat!=1){
        Prefix(word);
    }
    if (stat!=1){
        Infix(word);
    }
}
export default Stemmer

function Prefix(word){
    let text=word;
    if (text.substring(0, 1) == "የ" || text.substring(0, 1) == "ከ" || text.substring(0, 1) == "በ") {
        stemm+=" "+text.substring(1, text.length);
        stat=1;
    }
    if (text.substring(0, 1) == "ስ" && text.substring(1, 2) == "ለ") {
        stemm+=" "+text.substring(2, text.length);
        stat=1;
    }
    if (text.substring(0, 1) == "እ" && text.substring(1, 2) == "ን" && text.substring(2, 3) =="ደ") {
        stemm+=" "+text.substring(3, text.length);
        stat=1;
    }
}
function Suffix(word){
    let text=wordconvert(word).toString();
    //let text ="ሰዉነት"=="ሰውኡነትእ"=="ሰዉ"
    if (text.substring(text.length-4)=="ኡነትእ") {
        stemm+=" "+text.substring(0, text.length - 4);
        stat=1;
    }
    //let text="ቤቶች"=="ብኤትኦችእ"=="ቤት"
    if(text.substring(text.length-3)=="ኦችእ"){
        stemm+=" "+word.substring(0,word.length-2)+text.substring(text.length-4,text.length-3);
        stat=1;
    }
    //let text="ጫማዎች"=="ጭኣምኣውኦችእ"=="ጫማ"
    if(text.substring(text.length-5)=="ኣውኦችእ"){
        stemm+=" "+word.substring(0,word.length-2);
        stat=1;
    }
    //let text = "ቤቱ"=="ብኤትኡ"=="ቤት";
    if(text.substring(text.length-3)=="ኤትኡ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
        stat=1;
    }
    //let text ="ቤቷ"=="ብኤትኧ"=="ቤት"
    if(text.substring(text.length-3)=="ኤትኧ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
        stat=1;
    }
    //let text ="ቤቴ"=="ብኤትኤ"=="ቤት"
    if(text.substring(text.length-3)=="ኤትኤ"){
        stemm+=" "+word.substring(0,word.length-1)+text.substring(text.length-2,text.length-1);
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
        stat=1;
    }
}
function Infix(word) {
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
}