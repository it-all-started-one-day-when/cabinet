
function changeIframeSrc(a) {
    document.getElementById('myFrame').src = a;
    console.log("i ran");
}
//$("body").on("click", "a", function(e) { e.preventDefault() });

jQuery(".iframelink").click(function(e){
    var self = jQuery(this);
    var href = self.attr('href');
    e.preventDefault();
    // needed operations

    document.getElementById('myFrame').src=href;
    document.getElementById('sourceLink').href=href;
});