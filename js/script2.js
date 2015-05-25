var map;
var infowindow;


var mapOptions = {
    center: new google.maps.LatLng(37.7770072, -121.9813433),
    zoom: 12
};

map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var locationsModel = function () {
    var self = this;
    self.locationsArray = [];

    self.addItem = function (object) {
        self.locationsArray.push(object)
    };

    self.locations = function () {
        return locationsArray;
    }

};


var resultMarkers = function (locations) {
    var self = this;

    self.searchReq = ko.observable("");     //user input to Search box

    self.filteredMarkers = ko.computed(function () {
        var arrayResults = [];
        arrayResults = $.grep(locations, function (input) {
            var titleSearch = input.name.toLowerCase().indexOf(self.searchReq().toLowerCase());
            return (titleSearch > -1 && a.status() === "OK")
        });
        return arrayResults;
    });

    self.filterSchools = function (results) {
        var arrayResults = [];
        arrayResults = $.grep(results, function (input) {
            return (input.name.toLowerCase().indexOf("school") > 0) & ((!input.rating) || input.rating > 4);
        });
        return arrayResults;
    }

    self.initialize = function () {
        infowindow = new google.maps.InfoWindow();
        var locationTypes = ['bank'];//, 'cafe', 'grocery_or_supermarket', 'restaurant', 'school', 'shopping_mall'];
        for (var index = 0; index < locationTypes.length; index++) {
            var request = {
                location: new google.maps.LatLng(37.773896, -121.924922),
                radius: 3000,
                //types: ['store', 'school', 'food', 'shopping']
                types: [locationTypes[index]]
            };

            setTimeout((function (currentRequest) {
                return function () {
                    var service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(currentRequest, self.callback);
                }
            })(request), 1500);
        }
    };


    self.callback = function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            //filteredResults = self.filterSchools(results);
            for (var i = 0; i < results.length; i++) {
                var image = "images/school.png";
                if (results[i].types.indexOf('bank') >= 0) {
                    image = "images/bank.png"
                }
                var marker = self.createMarker(results[i], image);
                results[i].marker = marker;


                google.maps.event.addListener(marker, 'click', (function (currentResult) {
                    return function () {
                        infowindow.setContent(currentResult.name);
                        infowindow.open(map, this);
                    }
                })(results[i]));

                console.log(results[i]);
                if (i >= 4) {
                    break;
                }
            }
        }
    };

    self.createMarker = function (place, image) {
        var placeLoc = place.geometry.location;

        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: image
        });

        return marker;
    };
}

var myMarkers = new resultMarkers(locationsModel);
ko.applyBindings(myMarkers.locations);
google.maps.event.addDomListener(window, 'load', myMarkers.initialize);

