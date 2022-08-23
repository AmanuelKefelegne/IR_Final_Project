import Stemmer from "./Stemmer"
import DomF from "./DomF";
import CosinSimi from "./CosinSimi"

export let files=[];
const fs = require('fs');
const stop_word_list = ["ስለሚሆን","አና","ስለዚህ","በመሆኑም","ሁሉ","ሆነ","ሌላ","ልክ","ስለ","በቀር","ብቻ","አንዳች","አንድ","እንደ","እንጂ","ያህል","ይልቅ","ወደ","እኔ","የእኔ",
                        "ራሴ","እኛ","የእኛ","እራሳችን","አንቺ","የእርስዎ","ራስህ","ራሳችሁ","እሱ","እሱን","የእሱ","ራሱ","እርሷ","የእሷ","ራሷ","እነሱ","እነሱን","የእነሱ","እራሳቸው","ምንድን",
                        "የትኛው","ማንን","ይህ","እነዚህ","እነዚያ","ነኝ","ነው","ናቸው","ነበር","ነበሩ","ሁን","ነበር","መሆን","አለኝ","አለው","ነበረ","መኖር","ያደርጋል","አደረገው","መሥራት",
                        "እና","ግን","ከሆነ","ወይም","ምክንያቱም","እንደ","እስከ","ቢሆንም","ጋር","ላይ","መካከል","በኩል","ወቅት","በኋላ","ከላይ","በርቷል","ጠፍቷል","በላይ","ስር","እንደገና",
                        "ተጨማሪ","ከዚያ","አንዴ","እዚህ","እዚያ","መቼ","የት","እንዴት","ሁሉም","ማናቸውም","ሁለቱም","እያንዳንዱ","ጥቂቶች","ተጨማሪ","በጣም","ሌላ","አንዳንድ","አይ",
                        "ወይም","አይደለም","ብቻ","የራስ","ተመሳሳይ","ስለዚህ","እኔም","በጣም","ይችላል","ይሆናል","በቃ","አሁን"];
let word=[];
let stemmq=[];
let wordF;
let stat=0;
let stemm=[];
let stem2=[];
let termF=[];
let termFq=[];
let j=0;
let filenum;
function Quary(query){
    word=query.split(" ");
    for(let i=0;i<word.length;i++){
        stemmq[i]=Stemmer(word[i])+" ";
    }
    wordF=DomF(stemmq);
    File();
    termW(wordF);
    CosinSimi(termF,termFq,filenum);
    //display;
}
function File(){
    const fs = require('fs');
    for(filenum=1;filenum<=157;filenum++){
    fs.readFile('./CORPUS/doc'+filenum+'.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    files[filenum]=data;
    word=removeStopwords(data.split(" " || "። " ).tostring());
    for(let i=0;i<word.length;i++){
        stat=0;
        stem2[i]=Stemmer(word[i])+" ";
        for(let k;k<j;k++){
            if(stemm[k]!=stem2[i]){
                stemm[j]+=stem2[i];
                break;
            }
        }
        j++;
    }
    fs.writeFile('./STEMME/doc1'+filenum+'.txt',stem2,err=>{
        if(err){
            console.log(err);
            return;
        }
      });

});}
for(let k=0;k<=3;k++){
fs.readFile('./STEMME/doc1'+filenum+'.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    stem2=data.split(" ");
for(let i=0;i<stemm.length;i++){
    for(let j=0;j<filenum;j++){
        if(stemm[i]==stem2[j]){
            termF[i,j]++;
        }
    }
}
});}
}
function termW(wordF){
    let text=wordF.split(" ");
    for(let i=0;i<text.length;i++){
        if(stem2[i]==text[i]){
            termFq[i]++;
        }
    }
  
}
function removeStopwords(corpus) {
    stop_word_list.forEach((word) => {
      let regex = new RegExp(`${word}`);
      corpus = corpus.replace(regex, "");
    });
  
    return corpus;
  }
export default Quary