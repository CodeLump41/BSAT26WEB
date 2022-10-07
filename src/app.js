import { createApp } from "vue";
import page_bar from "./comp/page_bar";

//Todays Date: 10/7/22


const app = createApp({
    Data(){
        return {page: "home"}
    },
    template: `
    
    <div class="gront"> 

    <div id="menu">
    <page_bar onClick="page = 'home'">Home</page_bar>
    <page_bar onClick"page = 'img'">images</page_bar> 
    </div>


    </div>  
    `
});

app.mount("#app");