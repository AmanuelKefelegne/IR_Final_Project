import Stemmer from './Operations/Stemmer';
import termW from "./File";
let word=[];
let stemm=[];
let stem2=[];
let termF=[];
let termFq=[];
let j=0;
function File(){
    for(let filenum=1;filenum<=3;filenum++){
    fs.readFile('text'+filenum+'.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
     word=data.split(" " || "። " );
    for(let i=0;i<word.length;i++){
        stat=0;
        stem2[i]=Stemmer(word[i])+" ";
        stemm[j]+=stem2[i];
        j++;
    }
    fs.writeFile('text1'+filenum+'.txt',stem2,err=>{
        if(err){
            console.err;
            return;
        }
      });

});}
for(let k=0;k<=3;i++){
fs.readFile('text1'+filenum+'.txt','utf8',(err,data)=>{
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
export default File