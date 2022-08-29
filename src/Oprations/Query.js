import Stemmer from "./Stemmer";
import DomF from "./DomF";
import {toprev} from "./CosinSimi";
import CosinSimi from "./CosinSimi";
export let files=[];
//const fs = require('fs');
const stop_word_list = ["ስለሚሆን","አና","ስለዚህ","በመሆኑም","ሁሉ","ሆነ","ሌላ","ልክ","ስለ","በቀር","ብቻ","አንዳች","አንድ","እንደ","እንጂ","ያህል","ይልቅ","ወደ","እኔ","የእኔ",
                        "ራሴ","እኛ","የእኛ","እራሳችን","አንቺ","የእርስዎ","ራስህ","ራሳችሁ","እሱ","እሱን","የእሱ","ራሱ","እርሷ","የእሷ","ራሷ","እነሱ","እነሱን","የእነሱ","እራሳቸው","ምንድን",
                        "የትኛው","ማንን","ይህ","እነዚህ","እነዚያ","ነኝ","ነው","ናቸው","ነበር","ነበሩ","ሁን","ነበር","መሆን","አለኝ","አለው","ነበረ","መኖር","ያደርጋል","አደረገው","መሥራት",
                        "እና","ግን","ከሆነ","ወይም","ምክንያቱም","እንደ","እስከ","ቢሆንም","ጋር","ላይ","መካከል","በኩል","ወቅት","በኋላ","ከላይ","በርቷል","ጠፍቷል","በላይ","ስር","እንደገና",
                        "ተጨማሪ","ከዚያ","አንዴ","እዚህ","እዚያ","መቼ","የት","እንዴት","ሁሉም","ማናቸውም","ሁለቱም","እያንዳንዱ","ጥቂቶች","ተጨማሪ","በጣም","ሌላ","አንዳንድ","አይ",
                        "ወይም","አይደለም","ብቻ","የራስ","ተመሳሳይ","ስለዚህ","እኔም","በጣም","ይችላል","ይሆናል","በቃ","አሁን"];
let word=[];
let datas=[];
let stemmed=[];
let stemmq=[];
let wordF=[];
let stat=0;
let stemm=[];
let stem2=[];
let termF=[];
let termFq=0;
let j=0;
let filenum;
let unichar=[];
let tfquaryindoc=[];
function Query(query){
    word=query.split(" ");
    //console.log(word);
    for(let i=0;i<word.length;i++){
        //console.log(word[i]);
        stemmq[i]=Stemmer(word[i]);
        //console.log(stemmq[i]);
    }
    //console.log(stemmq);
    wordF=DomF(stemmq);
    //console.log(wordF);
    //console.log(wordF.length);
    File();
    termW();
    CosinSimi(termF,termFq,filenum);
   // console.log(files[toprev[0]]);
    //display;
}
function File(){
   //const fs = require('fs');
    for(let i=0;i<1;i++){
    /* fs.readFile('./CORPUS/doc'+filenum+'.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    files[filenum]=data;*/
    
    fetch("./doc.json")
        .then(function (resp){
            return resp.json(); 
        })
        .then(function(data){
             datas=data.doc1;
        });
        console.log(datas);
        setTimeout(() =>{
        let docs=datas;
        console.log("yes");
       // console.log(docs);
    //word=removeStopwords(docs.split(" " || "። " ).tostring());
    for(let i=0;i<word.length;i++){
        stat=0;
        stem2[i]=Stemmer(word[i])+" ";
        for(let k;k<j;k++){
            if(stemm[k]!=stem2[i]){
                stemm[j]+=stem2[i];
                break;}}
                j++;
            }
    stemmed[i]=stem2[i];
    console.log(stemmed[i]);
},30);}
   setTimeout(() =>{
    for(let k=0;k<=1;k++){
    stem2=stemmed[k].split(" ");
    for(let i=0;i<stemm.length;i++){
    for(let j=0;j<i;j++){
        if(stemm[i]==stem2[j]){
            termF[i,j]++;}}}}
},10);
}
function termW(){
    unichar=[...new Set(stemmq)];
    for(let i=0;i<stem2.length;i++){
        termFq=0;
        if(stem2[i]==unichar[i]){
            termFq++;
        }
        tfquaryindoc.push([stem2[i],termFq]);
    }
    console.log(tfquaryindoc);
}
function removeStopwords(corpus) {
    stop_word_list.forEach((word) => {
      let regex = new RegExp(`${word}`);
      corpus = corpus.replace(regex, " ");
    });
  
    return corpus;
  }
export default Query