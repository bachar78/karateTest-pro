var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "1",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "268",
        "ok": "485",
        "ko": "268"
    },
    "maxResponseTime": {
        "total": "485",
        "ok": "485",
        "ko": "425"
    },
    "meanResponseTime": {
        "total": "338",
        "ok": "485",
        "ko": "308"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "0",
        "ko": "59"
    },
    "percentiles1": {
        "total": "286",
        "ok": "485",
        "ko": "284"
    },
    "percentiles2": {
        "total": "391",
        "ok": "485",
        "ko": "287"
    },
    "percentiles3": {
        "total": "470",
        "ok": "485",
        "ko": "397"
    },
    "percentiles4": {
        "total": "482",
        "ok": "485",
        "ko": "419"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 17
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
    "count": 5,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "0.125",
        "ko": "0.625"
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
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles2": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles3": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles4": {
        "total": "485",
        "ok": "485",
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
        "total": "0.125",
        "ok": "0.125",
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
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "268",
        "ok": "-",
        "ko": "268"
    },
    "maxResponseTime": {
        "total": "425",
        "ok": "-",
        "ko": "425"
    },
    "meanResponseTime": {
        "total": "308",
        "ok": "-",
        "ko": "308"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "-",
        "ko": "59"
    },
    "percentiles1": {
        "total": "284",
        "ok": "-",
        "ko": "284"
    },
    "percentiles2": {
        "total": "287",
        "ok": "-",
        "ko": "287"
    },
    "percentiles3": {
        "total": "397",
        "ok": "-",
        "ko": "397"
    },
    "percentiles4": {
        "total": "419",
        "ok": "-",
        "ko": "419"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "-",
        "ko": "0.625"
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
