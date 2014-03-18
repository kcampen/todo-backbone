var TodoView = Backbone.View.extend({

	className: 'todo-item',

	createTemplate: _.template($('#todo-template').text()),

	events: {
			'click .add-todo': 'toggleDone'
		},

	initialize: function(){
		this.listenTo(this.model, 'change', this.render)
		$('.todo-items').prepend(this.el);
		this.render();
	},

	render: function(){
		var renderTemplate = this.createTemplate(this.model);
		this.$el.html(renderTemplate);
		// this.$el.html(this.renderTemplate(this.model.attributes))
		console.log('here we are');
	},

	toggleDone: function(){
 		//this.model.set('completed', true) below toggles btwn true/false 
		this.model.set('completed', !this.model.get('completed')) 
	}


});

// // this starts and then this.render says after you start go ahead and render yourself
// 	initialize: function(){
// 		console.log('hi hi');
// 		$('.todo-items').prepend(this.el);		
// 		this.render();

// 		// this one line updates any changes to page automatically
// 		this.listenTo(this.model, 'change', this.render)
// 	},



// // we seperated initialize and render so we can rerender and not have to create from the start
// 	render: function(){
// 		this.$el.html(this.renderTemplate(this.model.attributes))

// 	},

//  // not manually setting anything
// 	toggleDone: function(){
// 		//this.model.set('completed', true) below toggles btwn true/false 
// 		 this.model.set('completed', !this.model.get('completed')) 
// 	}
// });

// var fakeModel = {
// 	description: 'Feed the Dog',
// 	completed: false,
// 	id: _.uniqueId('todo')
// }

// var modelInstance = new Todo(fakeModel);
//          // constructor
// var view = new TodoView ({model: modelInstance});