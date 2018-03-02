var AddTodoItemView = Backbone.View.extend({
	events: {
		'click #add': 'onClickAdd'
	},

	initialize: function(options) {
		this.bus = options.bus;
	},

	onClickAdd: function() {
		var input = this.$el.find('#addTodoInput');
		var todoItem = input.val();
		this.bus.trigger('addTodo', todoItem);
	},

	render: function() {
		this.$el.html(
			'<input id="addTodoInput"type="text"></input><button id="add">Add</button>'
		);

		return this;
	}
});
