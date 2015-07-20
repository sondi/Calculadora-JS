
$( document ).ready(function() {
	console.log( "ready!" );
	var cards = []
	for (i = 0; i < 10; i++){
		var new_card = new Card(i);
		cards.push(new_card);
		$('#cardPile').append(new_card.element);
	};
	$('.draggable').draggable({
		helper: "clone", 
		drag: function(event, ui){
			val = $(this).text();
  			// console.log(val);
  		}
  	});

  	var list = new List('#cardSlots');

  	$('#cardSlots').droppable({
  		drop: function(event, ui){
  			if (list.array.length < 10){
  				var ui = ui.draggable.clone();
  				$('#cardSlots').append(ui);
  				var number = Number(ui.text())
  				var dragged_card = new Card(number)
  				list.array.push(dragged_card);
  				console.log(dragged_card.number);
  				$('#total_sum').text(list.total());
  			}

  		}
  	});
  });


	var Card = function(number){
		var self = this;
		function initialize(){
			self.number = number;
			self.element = "<div class='draggable'>" + number + "</div>";
		};
		initialize();
	};

	var List = function(selector){
		var self = this;
		function initialize(){
			self.element = $(selector);
			self.array = new Array();
		};
		initialize();
	}


	List.prototype.total = function(){
		var total = 0;
			$.each(this.array,function() {
	    		total += this.number;
	    		console.log(total);
			});
		return total
	}

// Card.prototype.draggable = function(){
// 	$('new_card').draggable({
//   		helper: "clone"
//   	});
// };

	// $( "#draggable" ).draggable({
 //  		containment: "#cardSlots"
	// 	});
