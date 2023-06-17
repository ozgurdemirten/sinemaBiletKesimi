const koltuklar = document.querySelector(".koltuk-component");
let clickKoltuk = document.querySelectorAll(".th-click");
const uElementiAdet = document.querySelector(".bottom-display-adet");
const uElementiUcret=document.querySelector(".bottom-display-coin-u")
let id = 0;
let idArray = [];
let idArrayKirmizi = [];

class koltukSecimi {

    displayKoltuk() {

        for (let index = 0; index < 5; index++) {
            koltuklar.innerHTML += `
        
            <div class="window-component">
                <div class="div-left-window">
                    <table class="table-left-window">
                        <tr class="tr-left-window">
                            <th class="th-click th-left-window" data-id="${id++}">${id}</th>
                            <th class="th-click th-left-window" data-id="${id++}">${id}</th>
                        </tr>
                    </table>
                </div>
    
                <div class="div-center-window">
                    <table class="table-center-window">
                        <tr class="tr-center-window">
                            <th class="th-click th-center-window " data-id="${id++}">${id}</th>
                            <th class="th-click th-center-window" data-id="${id++}">${id}</th>
                            <th class="th-click th-center-window" data-id="${id++}">${id}</th>
                            <th class="th-click th-center-window" data-id="${id++}">${id}</th>
                        </tr>
                    </table>
                </div>
    
                <div class="div-right-window">
                    <table class="table-right-window">
                        <tr class="tr-right-window">
                            <th class="th-click th-right-window" data-id="${id++}">${id}</th>
                            <th class="th-click th-right-window" data-id="${id++}">${id}</th>
                        </tr>
                    </table>
                </div>
                
        `;

        }


    }
    biletSayisi() {
        let degisken = Storage.getKoltuk().length;
        return degisken;
    }
    keyDown(){
        
        
        
        clickKoltuk = koltuklar.querySelectorAll(".th-click");
        //console.log(idArray);
        document.addEventListener("keydown", event=> {
            idArrayKirmizi = Storage.getKoltuk();

            console.log("idarraykirimizi",idArrayKirmizi);
            if(event.key==="Enter" && idArrayKirmizi.length!=null){
                console.log(event.key);
                //console.log(idArray);
                idArrayKirmizi.forEach(element => {
                    //console.log(clickKoltuk[element]);
                   // console.log(clickKoltuk[element].dataset.id);
                    idArrayKirmizi.push(clickKoltuk[element].dataset.id);
                    clickKoltuk[element].setAttribute("style", "background-color:red;");
                    
                    this.colorChangeKeyDown(idArray,idArrayKirmizi,clickKoltuk[element],clickKoltuk[element].dataset.id,"red");
                });
               
                
            }
           
            
            
          })
          
          
    }
    colorChangeKeyDown(idArray,idArrayKirmizi,eventTarget,id,renk){
       {
            idArrayKirmizi = Storage.getKoltuk();
           // console.log("array kirmizi",idArrayKirmizi);
            eventTarget = eventTarget.style.backgroundColor = "red";
            console.log("id array üst",idArray);
            
            console.log("id array",idArray);
            this.constLocalStorage(idArrayKirmizi);
            
            
            this.colorChangeLocalStorage(idArray);
        }
    }
    displayClick() {
        clickKoltuk = koltuklar.querySelectorAll(".th-click");
        let renk="lightyellow"
        //console.log(clickKoltuk);
        koltuklar.addEventListener("click", event => {
            // console.log(event.target.dataset.id);
            event.target.dataset.id;
           // console.log(event.target);
            this.colorChange(event.target, event.target.dataset.id,renk);
            //console.log(event.target.style.backgroundColor);
            this.biletUcret();

        });


    }

    colorChange(eventTarget, id,renk) {
        idArray = Storage.getKoltuk();
       // console.log(eventTarget.style.backgroundColor != renk);
        
        if ( eventTarget.dataset.id != null && eventTarget.style.backgroundColor != "lightyellow"&& eventTarget.style.backgroundColor != "red") {
            eventTarget = eventTarget.style.backgroundColor = renk;
            idArray.push(id);
            this.colorChangeLocalStorage(idArray);
            
        }
        // else if(eventTarget.dataset.id != null && eventTarget.style.backgroundColor==="lightyellow"){

        //     eventTarget = eventTarget.style.backgroundColor = "red";
            
        //     this.colorChangeLocalStorage(idArray);
        // }
        else if (eventTarget.dataset.id != null && eventTarget.style.backgroundColor != "red" ) {
            eventTarget = eventTarget.style.backgroundColor = "green";
            idArray.pop(id);
            this.colorChangeLocalStorage(idArray);
        }
        


    }
    colorChangeLocalStorage(idArray) {
        Storage.saveKoltuklar(idArray);
    }
    constLocalStorage(idArray) {
        Storage.saveKoltuklarKalici(idArray);
    }
    colorStatementGetStorage(idArrayKirmizi) {
        let degisken = Storage.getKoltuk();
       let  kaliciKoltuk=Storage.getKoltukKalici();
       //console.log(kaliciKoltuk);
       // console.log("burasi kirmizi array",idArrayKirmizi);
        clickKoltuk.forEach(element => {
            //console.log(element);
            let id1 = degisken.find((d) => d === element.dataset.id);
            let id2 = kaliciKoltuk.find((d) => d === element.dataset.id);
            if(id1 !== element.dataset.id){
                element.setAttribute("style", "background-color:green;");
            }
            
            if (id1 === element.dataset.id ) {
                element.setAttribute("style", "background-color:LightYellow;");
                //console.log("buraya girdi yellow");
            }
            if(id2===element.dataset.id ){
                
                element.setAttribute("style", "background-color:red;");
            }
            

        });
        //console.log(clickKoltuk[11].dataset.id);


    }
   
  biletUcret(){
        let adet=this.biletSayisi();
        let sayisi=35*this.biletSayisi();
        console.log(sayisi);
        uElementiAdet.innerHTML=adet;
        uElementiUcret.innerHTML=sayisi;     
          
        }

}


class Storage {
    static saveKoltuklar(koltuklar) {
        localStorage.setItem("koltuklar", JSON.stringify(koltuklar));
    }
    static saveKoltuklarKalici(koltuklar) {
        localStorage.setItem("koltuklarKalici", JSON.stringify(koltuklar));
    }
    static getKoltukId(id) {
        let koltuklar = JSON.parse(localStorage.getItem("koltuklar"));
        return koltuklar.find(koltuk => koltuk.id === id);

    }
    // static saveCart(cart) {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }
    static getKoltuk() {
        return localStorage.getItem("koltuklar") ? JSON.parse(localStorage.getItem("koltuklar")) : [];
    }
    static getKoltukKalici() {
        return localStorage.getItem("koltuklarKalici") ? JSON.parse(localStorage.getItem("koltuklarKalici")) : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const koltukSecimi1 = new koltukSecimi();
    
    
    koltukSecimi1.displayKoltuk();
    koltukSecimi1.displayClick();
     
    koltukSecimi1.colorStatementGetStorage(idArrayKirmizi);
       
    koltukSecimi1.keyDown();
});
