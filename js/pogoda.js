
var lat = 50.297435;
var lng = 19.134927;
var date = "2017-04-01";
var address;

$("#target").click(function() {
    address = "http://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng + "&date=" + date;

    $.getJSON(address,
        function(data) {
            var items = [];
            $.each(data.results,
                function(key, val) {
                    items.push("<li>" + key + ": " + val + "</li>");
                });

            $("<ul/>",
                {
                    "class": "my-new-list",
                    html: items.join("")
                }).appendTo(".show-data");
        });
});