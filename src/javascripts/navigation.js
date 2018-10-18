import $, { screen } from 'jquery';
var breakPointSize = 1200;

console.log("hello");
$(".collapsible").hover(function(){
        if(screen.width >= breakPointSize){
            let pointer = this.children[0];
            let sibling_content = this.nextElementSibling;
            removeAllPopup();
            removeAllTurnDown();
            pointer.classList.add("arrow-turn-down");
            sibling_content.style.maxHeight = sibling_content.scrollHeight+ 20 + "px";
        }}, function(){
        if(screen.width >= breakPointSize){
            removeAllPopup();
            removeAllTurnDown();
        }
    }
);

$(".dropdown-content").hover(function(){
    if(screen.width >= breakPointSize){
        // let pointer = this.children[0];
        let content = this;
        // pointer.classList.add("arrow-turn-down");
        content.style.maxHeight = content.scrollHeight+ 20 + "px";
    }
}, function(){
    if(screen.width >= breakPointSize){
        removeAllPopup();
        removeAllTurnDown();
    }
});

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // removeAllPopup();
        // removeAllTurnDown();
        var content = this.nextElementSibling;
        toggleListItems(this, content);
    });
}



function removeAllPopup(){
    let dropdown = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].style.maxHeight = null;
    }
}
function removeAllTurnDown() {
    let collaps = document.getElementsByClassName("collapsible");
    for(let i =0 ; i< collaps.length; i++){
        let turndown = collaps[i].children[0];
        turndown.classList.remove("arrow-turn-down");
    }
}

function toggleListItems(content, sibling_content){
    // console.log(sibling_content.style);
    let pointer = content.children[0];
    if (sibling_content.style.maxHeight){
        pointer.classList.remove("arrow-turn-down");
        sibling_content.style.maxHeight = null;
    } else {
        pointer.classList.add("arrow-turn-down");
        // console.log(sibling_content.scrollHeight+20);
        sibling_content.style.maxHeight = (sibling_content.scrollHeight+ 20) + "px";
    }
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    //unclick is used to bind together the action when clicked outside navigation bar

    if (!event.target.classList.contains("unclick")) {
        // alert("THI");
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            var current_content = coll[i].children[0];
            var content = coll[i].nextElementSibling;
            if (content.style.maxHeight){
                // console.log(current_content);
                if(current_content.classList.contains("arrow-turn-down"))
                    current_content.classList.remove("arrow-turn-down");

                content.style.maxHeight = null;
            }
        }


        var menu_button = document.getElementsByClassName("menu-button").item(0);
        if(menu_button.classList.contains("change"))
            menu_button.classList.remove("change");

        var topnav_content = document.getElementsByClassName("topnav-content").item(0);
        if(topnav_content.classList.contains("nav-appear"))
            topnav_content.classList.remove("nav-appear");
    }

    // Close the dropdown menu if the user clicks outside of it. It is used for hsi_model
    if (!event.target.classList.contains('current-dropbtn')) {
        let dropdowns = document.getElementsByClassName("current-dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
