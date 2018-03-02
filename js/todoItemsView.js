var TodoItemsView = Backbone.View.extend({
	tagName: 'ul',

	id: 'todoitems',

	initialize: function(options) {
		if (!(options && options.model)) throw new Error('No model was provided.');
		this.bus = options.bus;
		this.bus.on('addTodo', this.onAddTodo, this);
	},

	onAddTodo: function(todoItem) {
		var todoItem = new TodoItem({ description: todoItem });
		var todoItemView = new TodoItemView({ model: todoItem });
		this.$el.append(todoItemView.render().$el);
	},

	render: function() {
		var self = this;

		this.model.each(function(todoItem) {
			var itemView = new TodoItemView({ model: todoItem });
			self.$el.append(itemView.render().$el);
		});

		return this;
	}
});
