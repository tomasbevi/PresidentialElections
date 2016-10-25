angular.module('starter')
.controller('renderizar_provincia', function($scope, $http,$routeParams, $sce, $ionicSideMenuDelegate, $timeout , LxProgressService, $ionicScrollDelegate , $ionicLoading) {
	$ionicLoading.show({
			  templateUrl : 'loading.html'
	});
	$ionicScrollDelegate.scrollTop();
 	 if (document.location.hostname == "localhost"){ //EN LOCAL UNA RUTA ONLINE OTRA
			var url = "files/gob_"+$routeParams.id+".json";
		 }else{
			var url = "http://www.turnosfarmacia.com/temporal/gob_"+$routeParams.id+".json";
		 }
	  $http.get(url)
		   .success(function(data){
		   if(data['resultados'] == null){
							$scope.resultados_visibilidad=true;
							$scope.provincia_abajo="provincia.";
							$ionicLoading.hide();
						}else{
							$scope.resultados_visibilidad=false;
						  var linea="", color_fondo = 1,cantidad,lineaagregada,lineaagregada2,i=1,linea_display
						  $scope.escrutinio = (data['data']['p_mesas_escrutadas']/100);
						  $scope.fecha = ("Dia "+data['data']['Dia']+" "+data['data']['Hora']+":"+data['data']['Minuto']+"hs");
						  $scope.provincia=$routeParams.nombre;
								$.each(data['resultados'], function(index, value) { //EACH PARTIDO
									i=1;if(color_fondo==1){color_fondo = 2}else{color_fondo = 1}
									var color = data['resultados'][index]['alianza_color'];
									var nombre_politica = data['resultados'][index]['alianza_nombre'];
									var porcentaje = (data['resultados'][index]['alianza_p_votos']/100);
											// var Nombre_formula = data['resultados'][index]['nombre_candidato'];
											var Nombre_formula = "";
											linea += '<li class="row color_'+color_fondo+'"><div class="col color col-15"><div class="circulo" style="background:#'+color+';"></div></div><div class="col col-75 columna_info"><div class="nombre">'+nombre_politica+'</div><div class="formula">'+Nombre_formula+'</div><div class="linea_fondo"><div class="linea linea_temporal" style="background:#'+color+';width:'+porcentaje+'%"></div></div><div class=" porcentaje">'+porcentaje+'%</div></div></li>';
											i++;
							});
								$scope.customHtml  = $sce.trustAsHtml(linea);
								$ionicLoading.hide();
								$timeout(function() {
										$(".linea_fondo .linea").removeClass("linea_temporal");
								}, 500);
							}
						  })
					.error(function(){
						$ionicLoading.hide();
						$scope.error=true;						
					})
					if($ionicSideMenuDelegate.isOpen()){
					$ionicSideMenuDelegate.toggleLeft();
				}
    })

.controller('renderizar_presidente', function($scope, $http, $sce , $ionicSideMenuDelegate, $timeout , $ionicScrollDelegate, $ionicLoading) {
	$ionicLoading.show({
			  templateUrl : 'loading.html'
		});
		$ionicScrollDelegate.scrollTop();
		 if (document.location.hostname == "localhost"){ //EN LOCAL UNA RUTA ONLINE OTRA
			var url = "files/presidente.json";
		 }else{
			var url = "http://www.turnosfarmacia.com/temporal/presidente.json";
		 }
	  $http.get(url)
		   .success(function(data){
						  var linea="", color_fondo = 1,cantidad,lineaagregada,lineaagregada2,i=1,linea_display
							$scope.escrutinio = (data['data']['p_mesas_escrutadas']/100);
							$scope.fecha = ("Dia "+data['data']['Dia']+" "+data['data']['Hora']+":"+data['data']['Minuto']+"hs");
							$scope.provincia=data['data']['provincia'];
								$.each(data['resultados'], function(index, value) { //EACH PARTIDO
									i=1;if(color_fondo==1){color_fondo = 2}else{color_fondo = 1}
									var color = data['resultados'][index]['alianza_color'];
									var nombre_politica = data['resultados'][index]['alianza_nombre'];
									var porcentaje = (data['resultados'][index]['alianza_p_votos']/100);
											var Nombre_lista = data['resultados'][index]['lista_nombre'];
											var Nombre_formula = data['resultados'][index]['nombre_candidato'];
											linea += '<li class="row color_'+color_fondo+'"><div class="col color col-15"><div class="circulo" style="background:#'+color+';"></div></div><div class="col col-75 columna_info"><div class="nombre">'+nombre_politica+'</div><div class="formula">'+Nombre_formula+'</div><div class="linea_fondo"><div class="linea linea_temporal" style="background:#'+color+';width:'+porcentaje+'%"></div></div><div class=" porcentaje">'+porcentaje+'%</div></div></li>';											
											i++;									
							});
				
							$scope.customHtml  = $sce.trustAsHtml(linea);
							$ionicLoading.hide();
							$timeout(function() {
								$(".linea_fondo .linea").removeClass("linea_temporal");
							}, 500);
						  })
				.error(function(){
						$ionicLoading.hide();
						$scope.error=true;
				})
				if($ionicSideMenuDelegate.isOpen()){
					$ionicSideMenuDelegate.toggleLeft();
				}

    })
	

.controller('renderizar_ciudad', function ($scope, $http,$routeParams, $sce, $ionicSideMenuDelegate, $timeout , $ionicScrollDelegate , $ionicLoading) {

		$ionicLoading.show({
			  templateUrl : 'loading.html' 
		});

	$ionicScrollDelegate.scrollTop();
 	 if (document.location.hostname == "localhost"){ //EN LOCAL UNA RUTA ONLINE OTRA
			var url = "http://localhost/elecciones2015_app/resultados.php?provincia="+$routeParams.provincia+"&ciudad="+$routeParams.id;
		 }else{
			var url = "http://www.turnosfarmacia.com/temporal/resultados.php?provincia="+$routeParams.provincia+"&ciudad="+$routeParams.id;
		 }
	  $http.get(url)
		   .success(function(data){
						if(data['resultados'] == null){
							$scope.resultados_visibilidad=true;
							$scope.ciudad_abajo="ciudad.";
							$ionicLoading.hide();
						}else{
								$scope.resultados_visibilidad=false;
								 var linea="", color_fondo = 1,cantidad,lineaagregada,lineaagregada2,i=1,linea_display
								// $scope.escrutinio = (data['data']['p_mesas_escrutadas']/100);
								// $scope.fecha = ("Dia "+data['data']['Dia']+" "+data['data']['Hora']+":"+data['data']['Minuto']+"hs");
								$scope.ciudad=$routeParams.nombre;
								$.each(data['resultados'], function(index, value) { //EACH PARTIDO
									i=1;if(color_fondo==1){color_fondo = 2}else{color_fondo = 1}
									var color = data['resultados'][index]['alianza_color'];
									var nombre_politica = data['resultados'][index]['alianza_nombre'];
									var porcentaje = (data['resultados'][index]['alianza_p_votos']/100);
											var Nombre_formula = data['resultados'][index]['nombre_candidato'];
											if(Nombre_formula == undefined){
												Nombre_formula = "";
											}
											linea += '<li class="row color_'+color_fondo+'"><div class="col color col-15"><div class="circulo" style="background:#'+color+';"></div></div><div class="col col-75 columna_info"><div class="nombre">'+nombre_politica+'</div><div class="formula">'+Nombre_formula+'</div><div class="linea_fondo"><div class="linea linea_temporal" style="background:#'+color+';width:'+porcentaje+'%"></div></div><div class=" porcentaje">'+porcentaje+'%</div></div></li>';
											i++;
							});
								$scope.customHtml  = $sce.trustAsHtml(linea);
								
								$timeout(function() {
										$(".linea_fondo .linea").removeClass("linea_temporal");
										$ionicLoading.hide();
								}, 500);
							}
						  })
					.error(function(){
						$ionicLoading.hide();
						$scope.error=true;
					})
					if($ionicSideMenuDelegate.isOpen()){
					$ionicSideMenuDelegate.toggleLeft();
					}
    })