const koltuklar = document.querySelector(".koltuk-component");
let clickKoltuk=document.querySelectorAll(".th-click");

let id=0;
let idArray=[];
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

    displayClick(){
        clickKoltuk=koltuklar.querySelectorAll(".th-click");
        //console.log(clickKoltuk);
        koltuklar.addEventListener("click",event=>{
               // console.log(event.target.dataset.id);
                event.target.dataset.id;
                this.colorChange(event.target,event.target.dataset.id);
        //console.log(event.target.style.backgroundColor);
          

        });
        


        
    }
    colorChange(eventTarget,id){
        idArray=Storage.getKoltuk();
        console.log(eventTarget.style.backgroundColor != "lightyellow");
        if(eventTarget.dataset.id!=null && eventTarget.style.backgroundColor != "lightyellow")
        {
            eventTarget=eventTarget.style.backgroundColor = "LightYellow";
            idArray.push(id);
            this.colorChangeLocalStorage(idArray);
        }
        else if(eventTarget.dataset.id!=null ){
            eventTarget=eventTarget.style.backgroundColor = "#00FA9A";
            idArray.pop(id);
            this.colorChangeLocalStorage(idArray);
        }
        

    }
    colorChangeLocalStorage(idArray)
    {
        Storage.saveKoltuklar(idArray);
    }
    colorStatementGetStorage(){
        let degisken=Storage.getKoltuk();
        
        clickKoltuk.forEach(element => {
            let id1=degisken.find((d)=>d===element.dataset.id);
            
            if(id1===element.dataset.id)
            {
                element.setAttribute("style","background-color:LightYellow;")
            }
            
        });
        //console.log(clickKoltuk[11].dataset.id);
       
       
    }
}

class Storage {
    static saveKoltuklar(koltuklar) {
        localStorage.setItem("koltuklar", JSON.stringify(koltuklar));
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

}

document.addEventListener("DOMContentLoaded", () => {
    
    const koltukSecimi1 = new koltukSecimi();
     koltukSecimi1.displayKoltuk();
        koltukSecimi1.displayClick();
        koltukSecimi1.colorStatementGetStorage();
    
     
});