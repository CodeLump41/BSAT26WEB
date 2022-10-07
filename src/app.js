
import menu_item from "./comp/menu_item";

//Todays Date: 10/7/22


export default{
    Data() {
        return {page: "home"}
    },

    template: `
    
    <div class="gront"> 

    <div id="menu">
    <menu_item onClick="page = 'home'">Home</menu_item>
    <menu_item onClick"page = 'img'">images</page_bar> 
    </div>


    </div>  
    `
};

