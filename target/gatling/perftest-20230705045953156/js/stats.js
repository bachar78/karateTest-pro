var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "252",
        "ok": "263",
        "ko": "252"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "252"
    },
    "meanResponseTime": {
        "total": "372",
        "ok": "402",
        "ko": "252"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "105",
        "ko": "0"
    },
    "percentiles1": {
        "total": "383",
        "ok": "393",
        "ko": "252"
    },
    "percentiles2": {
        "total": "403",
        "ok": "442",
        "ko": "252"
    },
    "percentiles3": {
        "total": "528",
        "ok": "536",
        "ko": "252"
    },
    "percentiles4": {
        "total": "553",
        "ok": "554",
        "ko": "252"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.571",
        "ko": "0.143"
    }
},
contents: {
"req_post--api-users-7a661": {
        type: "REQUEST",
        name: "POST /api/users/login",
path: "POST /api/users/login",
pathFormatted: "req_post--api-users-7a661",
stats: {
    "name": "POST /api/users/login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "percentiles2": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "percentiles3": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "percentiles4": {
        "total": "559",
        "ok": "559",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "0.143",
        "ko": "-"
    }
}
    },"req_post--api-artic-043e6": {
        type: "REQUEST",
        name: "POST /api/articles",
path: "POST /api/articles",
pathFormatted: "req_post--api-artic-043e6",
stats: {
    "name": "POST /api/articles",
    "numberOfRequests": {
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "252",
        "ok": "263",
        "ko": "252"
    },
    "maxResponseTime": {
        "total": "403",
        "ok": "403",
        "ko": "252"
    },
    "meanResponseTime": {
        "total": "325",
        "ok": "350",
        "ko": "252"
    },
    "standardDeviation": {
        "total": "68",
        "ok": "62",
        "ko": "0"
    },
    "percentiles1": {
        "total": "323",
        "ok": "383",
        "ko": "252"
    },
    "percentiles2": {
        "total": "388",
        "ok": "393",
        "ko": "252"
    },
    "percentiles3": {
        "total": "400",
        "ok": "401",
        "ko": "252"
    },
    "percentiles4": {
        "total": "402",
        "ok": "403",
        "ko": "252"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.571",
        "ok": "0.429",
        "ko": "0.143"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
