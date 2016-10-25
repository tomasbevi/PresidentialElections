var primeravez=1

angular.module('starter', ['ionic' , 'ngRoute' , 'ngSanitize' , 'lumx' ])

.config(function($routeProvider ) {
	
    $routeProvider
	.when('/presidente', {templateUrl: 'presidente.html' , controller: "renderizar_presidente"})
	.when('/provincia/:id/:nombre', {templateUrl: 'provincia.html' , controller: "renderizar_provincia"})
	.when('/ciudad/:provincia/:id/:nombre', {templateUrl: 'ciudad.html' , controller: "renderizar_ciudad"})
    .otherwise({redirectTo: '/presidente'});

  })

.run(function($ionicPlatform , $rootScope , $ionicPopup , $timeout) {

		
	$rootScope.search_var = true;
	$rootScope.visible_intendente=false;
	$rootScope.visible_gob=false;

  FastClick.attach(document.body);
  
  $ionicPlatform.ready(function() {

	var datea = new Date();
	var formattedDate = moment(datea).format('YYYY-MM-DD');
	// alert(formattedDate);

		$rootScope.showAlert = function() {
			   var alertPopup2 = $ionicPopup.alert({
				 title: '<span>¡Atencion!</span>',
				 template: '<p>Los datos que se muestran son <br>demostrativos, los datos reales<br> aparecerán a partir del dia 25 de octubre.</p>'
			   });

			 };
		
				
// document.addEventListener('onAdLoaded', function(e){

    // $timeout(function() {
				// if(formattedDate<="2015-12-12"){
					// $rootScope.showAlert();
				// }
		// }, 1000);
// });
		

		if(window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
		     StatusBar.hide();
		}
	

	 //  var admobid = {};
	//	if( /(android)/i.test(navigator.userAgent) ) {
			admobid = { // for Android
				banner: 'ca-app-pub-8441224397106859/3691711594',
				// interstitial: 'ca-app-pub-8441224397106859/5168444797'
			};
	//	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			// admobid = { // for iOS
				// banner: 'ca-app-pub-8441224397106859/5883455193',
				// interstitial: 'ca-app-pub-8441224397106859/2929988794'
			// };
		// }

		if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
			document.addEventListener('deviceready', initApp, false);
		} else {
			initApp();
		}
		
		function initApp() {
    if (! AdMob ) { console.log( 'admob plugin not ready' ); return; }

		AdMob.createBanner( {
			adId: admobid.banner, 
			isTesting: false,
			overlap: false, 
			offsetTopBar: false, 
			position: AdMob.AD_POSITION.BOTTOM_CENTER,
			bgColor: 'black'
		} );
		
		// AdMob.prepareInterstitial({
			// adId: admobid.interstitial,
			// autoShow: true
		// });		
};



  });

})


	

    .controller('controlgoprovincias', function($scope, $http) {
	 	 if (document.location.hostname == "localhost"){ //EN LOCAL UNA RUTA ONLINE OTRA
			var url = "files/provincias.json";
		 }else{
			var url = "http://www.turnosfarmacia.com/temporal/provincias.json";
		 }
      $scope.gobernadores = [];
	  $http.get(url)
		  .success(function(data){
			$scope.gobernadores = data;
		  })
    })
	
	    .controller('controlciudades', function($scope, $http) {
		 if (document.location.hostname == "localhost"){ //EN LOCAL UNA RUTA ONLINE OTRA
			var url = "files/ciudades.json";
		 }else{
			var url = "http://www.turnosfarmacia.com/temporal/ciudades.json";
		 }
      $scope.ciudades = [];
	  $http.get(url)
		  .success(function(data){
			$scope.ciudades = data;
		  })
    })
	



	
	.controller('PopupCtrl',function($scope, $ionicPopup) {
			 $scope.showAlert = function() {
			   var alertPopup = $ionicPopup.alert({
				 title: 'Acerca de <span>Elecciones 2015 Argentina</span>',
				 template: 'Version 4.0<br/><span style="font-size:10px;">Datos provistos por la Dirección Nacional Electoral </span><br/>Desarrollado por <b>Tomasbevi</b> <br/> www.tomasbevi.com.ar'
			   });

			 };
})


	
.controller("body_controler", function($scope , $route ){
	
	$scope.refresh =  function(){
		$route.reload();
	}
	
	$scope.onReload = function() {
			$route.reload();
			 $scope.$broadcast('scroll.refreshComplete');
	}
	
	
})
