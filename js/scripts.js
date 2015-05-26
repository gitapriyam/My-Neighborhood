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
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    }
    ,
    {
        title: "Strategic Restaurants",
        address: "3000 Executive Pkwy # 515, San Ramon, CA 94583",
        website: "strategicrestaurants.com",
        phone: "(925) 328-3300",
        status: ko.observable("OK"),
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
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/restaurant.png",
				    map: map
				}
		)
    },
    {
        title: "Straw Hat Restaurants Inc",
        address: "18 Crow Canyon Ct, San Ramon, CA 94583",
        website: "http://strawhatpizza.com",
        phone: "(925) 837-3400",
        status: ko.observable("OK"),
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
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "The Marketplace Shopping Center",
        address: "433 Market Pl, San Ramon, CA 94583",
        website: "http://terramarcenters.com",
        phone: "(925) 277-3000",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Safeway Pharmacy (inside Safeway)",
        address: "11060 Bollinger Canyon Rd,San Ramon, CA 94582",
        website: "local.safeway.com",
        phone: "(925) 359-2005",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/shoppingmall.png",
				    map: map
				}
		)
    },
    {
        title: "Central Park",
        address: "12501 Alcosta Blvd, San Ramon, CA 94583",
        website: "",
        phone: "",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/park.png",
				    map: map
				}
		)
    },
    {
        title: "Diablo Vista Park",
        address: "Danville, CA 94506",
        website: "",
        phone: "",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.7913816, -121.9218398),
				    icon: "images/park.png",
				    map: map
				}
		)
    },
    {
        title: "Valley View Park",
        address: "N Monarch Rd, San Ramon, CA 94582",
        website: "",
        phone: "",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(0, 0),
				    icon: "images/park.png",
				    map: map
				}
		)
    },
    {
        title: "San Ramon Athan Downs",
        address: "2991 Montevideo Dr, San Ramon, CA 94583",
        website: "http://ci.san-ramon.ca.us",
        phone: "(925) 973-3200",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.7483496, -121.9604823),
				    icon: "images/park.png",
				    map: map
				}
		)
    },
    {
        title: "Bart",
        address: "Dublin/Pleasanton BART Station",
        website: "http://countyconnection.com",
        phone: "",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.70172, -121.89906),
				    icon: "images/train.png",
				    map: map
				}
		)
    },
    {
        title: "Citibank",
        address: "3101 Crow Canyon Pl, San Ramon, CA 94583",
        website: "http://citibank.com",
        phone: "(800) 627-3999",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.7783408, -121.9710014),
				    icon: "images/bank.png",
				    map: map
				}
		)
    },
    {
        title: "Bank of America",
        address: "3100 Crow Canyon Pl, San Ramon, CA 94583",
        website: "http://locators.bankofamerica.com",
        phone: "(925) 277-3511",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.777918, -121.971852),
				    icon: "images/bank.png",
				    map: map
				}
		)
    },
    {
        title: "Wells Fargo Bank",
        address: "3111 Crow Canyon Pl, San Ramon, CA 94583",
        website: "http://wellsfargo.com",
        phone: "(925) 866-8182",
        status: ko.observable("OK"),
        marker: new google.maps.Marker(
				{
				    position: new google.maps.LatLng(37.7786764, -121.9702746),
				    icon: "images/bank.png",
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
                if (status === "OK") {
                    var location = results[0].geometry.location;
                    member.marker.position = location;
                    member.marker.map = map;
                    member.status = "OK";
                    self.animateMarkers(member);
                } else if (status === "OVER_QUERY_LIMIT") {
                    // If status is OVER_QUERY_LIMIT, then wait and re-request
                    setTimeout(function () {
                        geocoder.geocode({ 'address': member.address }, function (results, status) {
                            if (results && results.length > 0) {
                                var location = results[0].geometry.location;
                                member.marker.position = location;
                                self.animateMarkers(member);
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
