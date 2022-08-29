let index=[];
let unichar=[];
function DomF(stemm){
  unichar=[...new Set(stemm)];
  for(let i=0;i<unichar.length;i++){
    let count=0;
    for(let j=0;j<stemm.length;j++){
      if(unichar[i]==stemm[j]){
        count++;
      }
    }
    index.push([unichar[i],count]);
  }
  return index;
}
export default DomF