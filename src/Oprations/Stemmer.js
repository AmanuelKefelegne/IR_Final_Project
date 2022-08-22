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
    let text=wordconvert(word);
    if (text.substring(text.length - 1, text.length) == "ት" && text.substring(text.length - 2, text.length - 1) == "ነ") {
        stemm+=" "+text.substring(0, text.length - 2);
        stat=1;
    }
    if(text.substring(text.length-3)=="ኦችእ"){
        stemm+=" "+word.substring(0,word.length-2)+text.substring(2,text.length-3);
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