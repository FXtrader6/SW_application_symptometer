angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);

document.body.addEventListener( 'load', startMyAwesomeApp, false );
function mainCtrl($scope, $http){
	$scope.startMyAwesomeApp = function(){
		var name = "";
		var bp = "Bipolar disorder"
		var d = "dehydration"
		var dl = "delusion"
		var md = "Depression"
		var c = "Candidiasis"
		var ld = "Lymphatic disease"
		var t = "Arthritis"
		$scope.myDisplayMessage = ("Choose from a list of Symptoms");
		$scope.Blackout = function(){
 			document.getElementById("sickness").innerHTML = "You might have a Bipolar disorder, dehydration, delusion or mental depression";
			document.getElementById("demo").innerHTML = bp.bold() + ", previously known as manic depression, is a mental disorder characterized by periods of depression and periods of abnormally elevated mood that last from days to weeks each. In physiology, "+ d.bold() + " is a deficit of total body water, with an accompanying disruption of metabolic processes. A " + dl.bold() + " is a fixed belief that is not amenable to change in light of conflicting evidence. "+ md.bold() + " is a state of low mood and aversion to activity.";
			document.getElementById("emergency").innerHTML = "It would be wise to visit the nearest hospital or make an appointment with your doctor";
		}
		$scope.Chill = function(){
			document.getElementById("sickness").innerHTML = "You might have a candidiasis or lymphatic diseases";
			document.getElementById("demo").innerHTML = c.bold() + ", often called yeast infection or thrush, is a type of infectious disease. It is a fungal infection (mycosis). The disease is caused by any of the Candida species of yeast. Candida albicans is the most common species. "+ ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system.";
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Decreased_body_weight = function(){
			document.getElementById("sickness").innerHTML = "You might have a candidiasis or lymphatic diseases";
			document.getElementById("demo").innerHTML = c.bold() + ", often called yeast infection or thrush, is a type of infectious disease. It is a fungal infection (mycosis). The disease is caused by any of the Candida species of yeast. Candida albicans is the most common species. "+ ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system.";
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Diarrhea = function(){
			document.getElementById("sickness").innerHTML = "You might have candidiasis";
			document.getElementById("demo").innerHTML = c.bold() + ", often called yeast infection or thrush, is a type of infectious disease. It is a fungal infection (mycosis). The disease is caused by any of the Candida species of yeast. Candida albicans is the most common species.";
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Distended_abdomen = function(){
			document.getElementById("sickness").innerHTML = "You might have arthritis";
			document.getElementById("demo").innerHTML = t.bold() + "is a term often used to mean any disorder that affects joints. Symptoms generally include joint pain and stiffness. Other symptoms may include redness, warmth, swelling, and decreased range of motion of the affected joints. In some types of arthritis, other organs are also affected. Onset can be gradual or sudden.";
			document.getElementById("emergency").innerHTML = "It would be wise to visit the nearest hospital or make an appointment with your doctor";
		}
		$scope.Fatigue = function(){
			document.getElementById("sickness").innerHTML = "You might have lymphatic diseases";
			document.getElementById("demo").innerHTML = ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system."
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Fever = function(){
			document.getElementById("sickness").innerHTML = "You might have lymphatic diseases";
			document.getElementById("demo").innerHTML = ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system."
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Headache = function(){
			document.getElementById("sickness").innerHTML = "You might have candidiasis";
			document.getElementById("demo").innerHTML = c.bold() + ", often called yeast infection or thrush, is a type of infectious disease. It is a fungal infection (mycosis). The disease is caused by any of the Candida species of yeast. Candida albicans is the most common species.";
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Lesion = function(){
			document.getElementById("sickness").innerHTML = "You might lymphatic diseases";
			document.getElementById("demo").innerHTML = ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system."
			document.getElementById("emergency").innerHTML = "It would be wise to visit the nearest hospital or make an appointment with your doctor";
		}
		$scope.Night_sweat = function(){
			document.getElementById("sickness").innerHTML = "You might have lymphatic diseases";
			document.getElementById("demo").innerHTML = ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system."
			document.getElementById("emergency").innerHTML = "";
		}
		$scope.Redness = function(){
			document.getElementById("sickness").innerHTML = "You might have lymphatic diseases";
			document.getElementById("demo").innerHTML = ld.bold() + " is a class of disorders which directly affect the components of the lymphatic system."
			document.getElementById("emergency").innerHTML = "";
		}
	}
}
