var AddTodoItemView = Backbone.View.extend({
	initialize: function(options) {
		this.bus = options.bus;
	},

	events: {
		'click #add': 'onClickAdd',
		'keypress #addTodoInput': 'onKeyPress'
	},

	onKeyPress: function(e) {
		if (e.keyCode == 13) {
			this.onClickAdd();
		}
	},

	onClickAdd: function() {
		var input = this.$el.find('#addTodoInput');

		var todoItem = input.val();

		if (todoItem) {
			this.bus.trigger('addTodo', todoItem);

			input.val('');
		}
	},

	render: function() {
		this.$el.html(
			'<input id="addTodoInput"type="text" autofocus></input><button id="add">Add</button>'
		);

		return this;
	}
});
