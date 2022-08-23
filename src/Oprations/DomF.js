let index=[];
let count;
function DomF(stemm){
stemm.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  index+=count;
}
export default DomF