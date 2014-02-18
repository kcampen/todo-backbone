var Todo = Backbone.Model.extend();
var TodoView = Backbone.View.extend({


	initialize: function(){
		console.log('hello there');

	},


	render: function(){

	}
});

var firstModel = {
	description: 'go to sleep',
	completed: false,
	id: _.uniqueId('todo')
};