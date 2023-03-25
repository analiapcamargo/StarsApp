let num=0;
let i=0;


function rating(num){
    for(i=1; i<=num; i++){
        document.getElementById("star"+i).src="assets/vetores/star_full.png";
    }
    for(i=num+1; i<=5; i++){
        document.getElementById("star"+i).src="assets/vetores/star_empty.png";
    }
}

function send(){
    document.getElementById("mensagem").style.display="none";
    document.getElementById("btn").style.display="none";
    document.getElementById("sent").style.display="inline-block";
    document.getElementById("stars").style.display="none";
}

