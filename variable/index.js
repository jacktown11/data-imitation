;(function(){

var isDev = true;
var data = {
    "status": 3,
    "message": "hello world",
    "string": "★★★",
    "number": 69,
    "boolean": true,
    "object": {
        "110000": "北京市",
        "120000": "天津市",
        "130000": "黑龙江省"
    },
    "array": [
        {
            "name": "Hello"
        },
        {
            "name": "Mock.js"
        },
        {
            "name": "!"
        },
        {
            "name": "Hello"
        },
        {
            "name": "Mock.js"
        },
        {
            "name": "!"
        }
    ],
    "regexp": "6288712123-",
    "time": "2014-01-16 21:21:22",
    "color": "rgba(121, 242, 135, 0.94)",
    "word": "jztuqwmur",
    "text": "而风气究及。",
    "name": "崔杰",
    "url": "news://imkpjsnq.ev/dhthtrgqy"
};

$(init);

function init(){
    $('#data-get').on('click', function(){
        if(isDev){
            showData(data);
        }else{
            $.ajax({
                url: '/list',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    showData(data);
                }
            });
        }
    })    
}
function showData(data){
    $('#data-show').JSONView(data, {collapsed: false});
}

})();