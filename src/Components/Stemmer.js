function Stemmer() {
  
    Suffix();
    Prefix();
    Infix();
    
}
export default Stemmer;

function Prefix(){
    //let text = "የሰው";
    //let text = "ስለቤት";
    let text = "እንደመጣ";
    if (text.substring(0, 1) == "የ" || text.substring(0, 1) == "ከ" || text.substring(0, 1) == "በ") {
        console.log(text.substring(1, text.length));
    }
    if (text.substring(0, 1) == "ስ" && text.substring(1, 2) == "ለ") {
        console.log(text.substring(2, text.length));
    }
    if (text.substring(0, 1) == "እ" && text.substring(1, 2) == "ን" && text.substring(2, 3) =="ደ") {
        console.log(text.substring(3, text.length));
    }
}

function Suffix(){
    //let text = "ሰውነት";
    let text = "ጫማዎች";
    if (text.substring(text.length - 1, text.length) == "ት" && text.substring(text.length - 2, text.length - 1) == "ነ") {
        console.log(text.substring(0, text.length - 2));
    }

}

function Infix() {

}