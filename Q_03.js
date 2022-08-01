const st_light = document.querySelectorAll(".streetlight__color");
// let cpt = 0;
// let color = st_light[cpt].getAttribute("color");        
// st_light[cpt].classList.add(color);        
// function switch_color() {
//     st_light.forEach(elt => {
//         cpt++;
        

        
//         color = elt.getAttribute("color");        
//         st_light[cpt].classList.add(color);        
//         if(cpt > 2) {
//             cpt = 0;
//         }
//         // console.log(elt.getAttribute("color"))

//     });
// }

let colors = ["red", "yellow", "green"];
cpt = 0;
function switch_color() {
    if (cpt > 2) {
        st_light[cpt-1].classList.remove(colors[cpt-1]);
        cpt = 0;
        
    }
    if(cpt > 0) {
        st_light[cpt-1].classList.remove(colors[cpt-1]);
    }
    
    st_light[cpt].classList.add(colors[cpt]);

    cpt++;



}