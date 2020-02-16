var express = require('express');
var router = express.Router();

router.get('/items/:q', function(req, res, next) {
    console.log('entra');
    res.send(["Italy","Spain","Portugal","Macedonia","Colombia","Brazil","Greece",
    "Egypt","Japan","Russia"]);
});

router.get('/users', function(req, res, next) {
        switch (req.query.page) {
            case '0':{
                res.send({
	                        "count": 41,
	                        "results":[{"id":1, "firstName":"David","lastName":"Wallace"},
                                {"id":2, "firstName":"Sonia","lastName":"Ross"},
                                {"id":3, "firstName":"Anthony","lastName":"Thomson"},
                                {"id":4, "firstName":"Theodore","lastName":"Mccain"},
                                {"id":5, "firstName":"Steven","lastName":"Pember"},
                                {"id":6, "firstName":"Sarah","lastName":"Simpson"},
                                {"id":7, "firstName":"Jessica","lastName":"Armstrong"},
                                {"id":8, "firstName":"Allison","lastName":"Way"},
                                {"id":9, "firstName":"Andrew","lastName":"Washington"},
                                {"id":10, "firstName":"Emily","lastName":"Shay"}
                                ]
                }
            )
            }
            case '1':{
                res.send({
                        "count": 41,
                        "results":[{"id":11, "firstName":"Nicolas","lastName":"Sullivan"},
                            {"id":12, "firstName":"Robert","lastName":"Lee"},
                            {"id":13, "firstName":"Thomas","lastName":"Spielberg"},
                            {"id":14, "firstName":"Chris","lastName":"Sanders"},
                            {"id":15, "firstName":"Mark","lastName":"Anderson"},
                            {"id":16, "firstName":"Margot","lastName":"Phoenix"},
                            {"id":17, "firstName":"Jessie","lastName":"Marsh"},
                            {"id":18, "firstName":"Janet","lastName":"Alba"},
                            {"id":19, "firstName":"Walter","lastName":"Jones"},
                            {"id":20, "firstName":"Francis","lastName":"White"}
                        ]
                    }
                )
            }
            case '2':{
                res.send({
                        "count": 41,
                        "results":[{"id":21, "firstName":"Mary","lastName":"Connors"},
                            {"id":22, "firstName":"Sophie","lastName":"Turner"},
                            {"id":23, "firstName":"Nicole","lastName":"Martins"},
                            {"id":24, "firstName":"Lily","lastName":"Diesel"},
                            {"id":25, "firstName":"Martha","lastName":"Ledger"},
                            {"id":26, "firstName":"Daisy","lastName":"Johnson"},
                            {"id":27, "firstName":"Angie","lastName":"Walker"},
                            {"id":28, "firstName":"Catherine","lastName":"Parker"},
                            {"id":29, "firstName":"Chloe","lastName":"McEnroe"},
                            {"id":30, "firstName":"Laura","lastName":"Potts"}
                        ]
                    }
                )
            }
            case '3':{
                res.send({
                        "count": 41,
                        "results":[{"id":31, "firstName":"Kevin","lastName":"Sutherland"},
                            {"id":32, "firstName":"Jonathan","lastName":"Bauer"},
                            {"id":33, "firstName":"Jared","lastName":"Summers"},
                            {"id":34, "firstName":"Heath","lastName":"Taylor"},
                            {"id":35, "firstName":"Logan","lastName":"Dempsey"},
                            {"id":36, "firstName":"Scott","lastName":"Donovan"},
                            {"id":37, "firstName":"Xavier","lastName":"Kidman"},
                            {"id":38, "firstName":"Peter","lastName":"Nomoa"},
                            {"id":39, "firstName":"Bruce","lastName":"Evans"},
                            {"id":40, "firstName":"Eric","lastName":"Ruffalo"}
                        ]
                    }
                )
            }
            case '4':{
                res.send({
                        "count": 41,
                        "results":[{"id":41, "firstName":"Daniel","lastName":"Collins"}
                        ]
                    }
                )
            }
        }
});

module.exports = router;
