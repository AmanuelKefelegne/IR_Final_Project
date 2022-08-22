import Stemmer from "./Stemmer"
import DomF from "./DomF";
import termW from "./File";
let word=[];
let stemmq=[];
let wordF;
function Quary(query){
    word=query.split(" ");
    for(let i=0;i<word.length;i++){
        stemmq[i]=Stemmer(word[i])+" ";
    }
    wordF=DomF(stemmq);
    termW(wordF);
}
export default Quary