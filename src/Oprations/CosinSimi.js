export let toprev=[];
let inp=0;
let inplist=[];
let qul=0;
let l=0;
let listlen=[];
let cosin=[];
let c=0;

function CosinSimi(termF,termFq,filenum){
for(let j=0;j<filenum;j++){
    for(let i=0;i<termF.length;i++){
        inp+=termFq[i]*termF[i,j];
    }
    inplist+=inp;
    inp=0;
}
for(let i=0;i<termFq.length;i++){
    qul+=termFq[i]*termFq[i];
}
for(let i=0;i<filenum;i++){
    for(let j=0;j<termF.length;j++){
        l+=termF[j,i]*termF[j,i];
    }
    listlen+=l;
    l=0;
}
for(let i=0;i<filenum;i++){
    c=inplist[i]/Math.sqrt(qul*listlen[i]);   
}
cosin+=c;
c=0;
for(let as;as<cosin.length;as++){
    let  maxx=Math.max(...cosin);
    toprev[as]=cosin.indexOf(maxx);
    cosin[cosin.indexOf(maxx)]=0;
}
return cosin;
}
export default CosinSimi
