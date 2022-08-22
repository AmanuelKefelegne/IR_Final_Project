import Stemmer from './Operations/Stemmer';
function File(){
    for(let filenum=1;filenum<=3;filenum++){
fs.readFile('text'+filenum+'.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.error(data);
     word=data.split(" " || "። " );
    for(let i=0;i<word.length;i++){
        stat=0;
        Stemmer(word[i]);
    }
    console.log(stemm);
   /* console.log(stemm.split(" " || "። " ).length);
   word.forEach(element => {
        count[element] = (count[element] || 0) + 1;
      });*/
    //console.log(count);
});}
}
export default File