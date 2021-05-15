const WsiCardPlaylist = {
    template: `
    <div class="card border border-dark w3-orange w3-hover-re mx-2 my-2 col-3">
        <h3><b><slot name="playlist_title"></slot></b></h3>
        <slot name="playlist_img"></slot>
        <!-- <img src="{% static 'cfit/img/playlist-2.jpg' %}"  style="width:100%; height:100%;"> -->
        <div class="card-body">
            <p class="card-text"><slot name="playlist_descricao"></p>
        </div>
    </div>
    `,
};
const WsiCardComps = {
    WsiCardPlaylist
}
export default WsiCardComps;
