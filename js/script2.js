var map;
var infowindow;


var mapOptions = {
    center: new google.maps.LatLng(37.7770072, -121.9813433),
    zoom: 12
};

map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var locationsModel = {
    self : this,
    locationsArray: [],

    initialize: function () {
        var locationTypes = ['bank', 'cafe', 'grocery_or_supermarket', 'restaurant', 'school', 'shopping_mall'];
        for (var index = 0; index < locationTypes.length; index++) {
            var request = {
                location: new google.maps.LatLng(37.773896, -121.924922),
                radius: 3000,
                types: [locationTypes[index]]
            };

            setTimeout((function (currentRequest) {
                return function () {
                    var service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(currentRequest, locationsModel.callback);
                }
            })(request), 500 * index);
        }
    },

    addItem: function (object) {
        this.locationsArray.push(object)
    },

    getLocations: function () {
        return this.locationsArray;
    },
    callback: function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            //filteredResults = self.filterSchools(results);
            for (var i = 0; i < results.length; i++) {

                var marker = locationsModel.createMarker(results[i]);

                results[i].marker = marker;
                locationsModel.addItem(results[i]);

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
    },
    createMarker: function (result) {
        var placeLoc = result.geometry.location;

        var image = "images/school.png";
        if (result.types.indexOf('bank') >= 0) {
            image = "images/bank.png"
        }
        else if (result.types.indexOf('cafe') >= 0) {
            image = "images/coffee.png"
        } else if (result.types.indexOf('grocery_or_supermarket') >= 0) {
            image = "images/grocery.png"
        }
        else if (result.types.indexOf('restaurant') >= 0) {
            image = "images/restaurant.png"
        } else if (result.types.indexOf('shopping_mall') >= 0) {
            image = "images/shoppingmall.png"
        }

        var marker = new google.maps.Marker({
            map: map,
            position: result.geometry.location,
            icon: image
        });

        return marker;
    }
};


var resultMarkers = function (locations) {
    var self = this;

    self.searchReq = ko.observable("");     //user input to Search box

    self.filteredMarkers = ko.computed(function () {
        var arrayResults = [];
        arrayResults = $.grep(locations, function (input) {
            var titleSearch = input.name.toLowerCase().indexOf(self.searchReq().toLowerCase());
            return (titleSearch > -1)
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
        
    };

}
locationsModel.initialize();
var myMarkers = new resultMarkers(locationsModel);
ko.applyBindings(myMarkers);
google.maps.event.addDomListener(window, 'load', myMarkers.initialize);

