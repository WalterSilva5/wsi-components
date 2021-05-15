import comps from "../components/components.js";
const app = Vue.createApp({})
// button
app.component('wsi_button', comps.WsiButton)

// modal
app.component('wsi_modal', comps.WsiModal)

// login
app.component('wsi_login', comps.WsiLogin)

//inputs
app.component('wsi_input', comps.WsiInputComps.WsiInput)
app.component('wsi_input_group_left', comps.WsiInputComps.WsiInputGroupLeft)

//cards
app.component('wsi_card_playlist', comps.WsiCardComps.WsiCardPlaylist)





app.mount("#app");
$( document ).ready(
    $("#year").text(new Date().getFullYear())
)
