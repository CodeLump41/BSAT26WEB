import { createApp } from "vue";
// import menu_item from "./comp/menu_item";

//Todays Date: 10/7/22


const app = createApp({
    Data(){
        return {page: "home"}
    },
    template: `
    
   <p>DEBUGGING</p>  
    `
});

app.mount("#app");