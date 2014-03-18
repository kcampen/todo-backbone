var Todo = Backbone.Model.extend({

});

var TodoList = Backbone.Collection.extend({
	model: Todo
});

var Todos = new TodoList;