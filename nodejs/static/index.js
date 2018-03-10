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

function ajaxGet(url, dataType, success, fail){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if((xhr.status >= 200 && xhr.status < 300) || 
            xhr.status === 304){
                success && success(xhr.responseText);
            }
        }
    };
    xhr.onerror = function(){
        fail && fail();
    };
    xhr.open('GET', url, true);
    xhr.send(null);
}
function showData(data){
    $('#data-show').JSONView(data, {collapsed: false});
}

})();

