Mock.mock('/list', {
    "status|0-5": 0,
    "message": "hello world",
    "string|1-10": "★",
    "number|1-100": 100,
    "boolean|1-2": true,
    "object|2-4": {
        "110000": "北京市",
        "120000": "天津市",
        "130000": "黑龙江省",
        "140000": "四川省"
    },
    "array|1-10": [
        {
            "name|+1": [
                "Hello",
                "Mock.js",
                "!"
            ]
        }
    ],
    "regexp|1-5": /\d{5,10}\-/,
    "time": '@datetime',
    "color": '@rgba',
    "word": '@word',
    "text": '@csentence(5)',
    "name": '@cname',
    "url": '@url'
});