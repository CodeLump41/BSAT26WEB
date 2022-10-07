import { createApp } from "vue";

const app = createApp({
    Data(){
        return {page: "home"}
    },
    template: `
        <div>WHAT IS HAPPENING</div> 
    `
});

app.mount("#app");