angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope) {
	$scope.data = {
		products: [
			{name: "product #1", description: "A prodjct",
			category: "Category #1", price: 100},
			{name: "product #2", description: "A prodjct",
			category: "Category #1", price: 110},
			{name: "product #3", description: "A prodjct",
			category: "Category #2", price: 210},
			{name: "product #4", description: "A prodjct",
			category: "Category #3", price: 202},
		]
	}
})