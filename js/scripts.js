// --------- MODEL ---------------


var mapOptions = {
    center: new google.maps.LatLng(37.7770072, -121.9813433),
    zoom: 12
};

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var locationsModel = [
    {
        title: "The Bishop Grill",
        address: "2600 Bishop Dr, San Ramon, CA 94583",
        website: "http://marriott.com",
        phone: "(925) 244-6114",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Brass Door",
        address: "2154 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://brassdoor.com",
        phone: "(925) 837-2501",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Zachary's Chicago Pizza",
        address: "3110 Crow Canyon Place, San Ramon, CA 94583",
        website: "http://zacharys.com",
        phone: "(925) 244-1222",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Clementine's Restaurant",
        address: "18070 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://clementinesca.com",
        phone: "(925) 973-0433",
        status: ko.observable("OK"),
        type: "restaurant",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Dougherty Valley High School",
        address: "10550 Albion Rd, San Ramon, CA 94582",
        website: "http://dvhigh.net",
        phone: "(925) 479-6400",
        status: ko.observable("OK"),
        type: "School",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Coyote Creek Elementary School",
        address: "8700 N Gale Ridge Rd, San Ramon, CA 94582",
        website: "http://ckes.srvusd.k12.ca.us",
        phone: "(925) 735-1183",
        status: ko.observable("OK"),
        type: "School",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Iron Horse Middle School",
        address: "12601 Alcosta Blvd, San Ramon, CA 94583",
        website: "http://ih.schoolloop.com",
        phone: "(925) 824-2820",
        status: ko.observable("OK"),
        type: "School",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/school.png",
				    map: map
				}
		)
    },
    {
        title: "Target",
        address: "2610 Bishop Dr, San Ramon, CA 94583",
        website: "http://target.com",
        phone: "(925) 277-0202",
        status: ko.observable("OK"),
        type: "Shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "HomeGoods",
        address: "120 Sunset Dr, San Ramon, CA 94583",
        website: "homegoods.com",
        phone: "(925) 277-1308",
        status: ko.observable("OK"),
        type: "Shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Whole Foods Market",
        address: "100 Sunset Dr, San Ramon, CA 94583",
        website: "http://wholefoodsmarket.com",
        phone: "(925) 355-9000",
        status: ko.observable("OK"),
        type: "Shopping",
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Applebee's",
        address: "17900 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "http://applebees.com",
        phone: "(925) 327-1400",
        status: ko.observable("OK"),
        type: "Bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    },
    {
        title: "Ascona Pizza Company",
        address: "11020 Bollinger Canyon Rd, San Ramon, CA 94582",
        website: "http://asconapizza.com",
        phone: "(925) 736-0606",
        status: ko.observable("OK"),
        type: "Bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    },
    {
        title: "Crown Billiards",
        address: "2416 San Ramon Valley Blvd, San Ramon, CA 94583",
        website: "bayareacrownbilliards.com",
        phone: "(925) 725-3900",
        status: ko.observable("OK"),
        type: "Bar",
        marker: new google.maps.Marker(
                {
                    position: new google.maps.LatLng(0, 0),
                    icon: "images/bar.png",
                    map: map
                }
        )
    }
]

/* ====VIEWMODEL  === */

var locationMarkers = function (locations) {
    var self = this;

    self.searchReq = ko.observable("");     //user input to Search box
    self.filteredMarkers = ko.computed(function () {
        var arrayResults = [];
        arrayResults = $.grep(locations, function (a) {
            var titleSearch = a.title.toLowerCase().indexOf(self.searchReq().toLowerCase());
            return (titleSearch > -1)
        });
        return arrayResults;
    });

    //Use street address in model to find LatLng
    self.initlocations = function (member) {
        geocoder = new google.maps.Geocoder();
        if (member.marker.position.A == 0) {
            geocoder.geocode({ 'address': member.address }, function (results, status) {
                console.log(member.title);
                if (status === "OK") {
                    var location = results[0].geometry.location;
                    member.marker.position = location;
                    member.marker.map = map;
                    member.status = "OK";
                    self.animateMarkers(member);
                    console.log(member.title);
                } else if (status === "OVER_QUERY_LIMIT") {
                    // If status is OVER_QUERY_LIMIT, then wait and re-request
                    setTimeout(function () {
                        geocoder.geocode({ 'address': member.address }, function (results, status) {
                            if (results && results.length > 0) {
                                var location = results[0].geometry.location;
                                member.marker.position = location;
                                self.animateMarkers(member);
                                console.log(member.title);
                            }
                        });
                    }, 3000);

                } else {
                    //If status is any other error code, then set status to Error, which will remove it from list and map    
                    member.status = "ERROR";
                    //Log error information to console
                    console.log("Error code: ", status, "for Location:", member.title);
                }
            });
        }
    }

    self.initialize = function () {
        for (current in locations) {
            self.initlocations(locations[current]);
            self.setBubble(current);
        }

    }

    self.toggleBounce = function (currentMarker) {
        if (currentMarker.marker.getAnimation() != null) {
            currentMarker.marker.setAnimation(null);
        } else {
            currentMarker.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function () { currentMarker.marker.setAnimation(null) }, 1000);
        }
    }


    self.animateMarkers = function (member) {
        setTimeout((function (currentMember) {
            return function () {
                currentMember.marker.setAnimation(google.maps.Animation.DROP);
            }
        })(member), 500);
    }

    //Adds infowindows to each marker and populates them with Yelp API request data
    self.setBubble = function (index) {
        //Add event listener to each map marker to trigger the corresponding infowindow on click
        google.maps.event.addListener(locations[index].marker, 'click', function () {
            var infowindow = new google.maps.InfoWindow({
                content: "<div id='yelpWindow'></div>",
                maxWidth: 250
            });

            //Request Yelp info, then format it, and place it in infowindow
            yelpApiCall(locations[index].phone, function (data) {
                var contentString = "<div id='yelpWindow'>" +
                                    "<h5>" + "<a href='" + data.mobile_url + "' target='_blank'>" + data.name + "</a>" + "</h5>" +
                                    "<p>" + data.location.address + "</p>" +
                                    "<p>" + data.display_phone + "</p>" +
                                    "<img src='" + data.rating_img_url_large + "'>" +
                                    "<p>" + data.snippet_text + "</p>" +
                                    "</div>";
                infowindow.setContent(contentString);
            });
            infowindow.open(map, locations[index].marker);
        });
    }
}


var myLocations = new locationMarkers(locationsModel);
ko.applyBindings(myLocations);
google.maps.event.addDomListener(window, 'load', myLocations.initialize);
