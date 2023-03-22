let array_image=['../assets/alien3.jpg','../assets/alien-pic.png','../assets/Monte-Olimpo.webp'];
let cont_esq=0;
let cont_dir=array_image.length-1;
let i=0;

function direita(){
    if(i<cont_dir){
        i++;
        document.getElementById("preview").src=array_image[i];
        document.getElementById("setadir").src="../assets/vetores/seta_dir_full.png";
        document.getElementById("setaesq").src="../assets/vetores/seta_esq_full.png";
    }
    if(i==cont_dir) document.getElementById("setadir").src="../assets/vetores/seta_dir_dis.png";
}

function esquerda(){
    if(i>0){
        i--;
        document.getElementById("preview").src=array_image[i];
        document.getElementById("setaesq").src="../assets/vetores/seta_esq_full.png";
        document.getElementById("setadir").src="../assets/vetores/seta_dir_full.png";
    }
    if(i==cont_esq) document.getElementById("setaesq").src="../assets/vetores/seta_esq_dis.png";
}

