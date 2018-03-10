;(function(){

$(init);

function init(){
    $('#data-get').on('click', function(){
        $.ajax({
            url: '/list',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                showData(data);
            }
        });
    });    
}

function showData(data){
    $('#data-show').JSONView(data, {collapsed: false});
}

})();

