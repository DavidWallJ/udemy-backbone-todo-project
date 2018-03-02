var TodoItemView = Backbone.View.extend({
	tagName: 'li',
	id: 'todoItem',
	// for trouble shooting purposes
	// clearer error if we forgot to send the model
	initialize: function(options) {
		if (!(options && options.model)) {
			throw new Error('model is not provided');
		}
	},
	render: function() {
		this.$el.html(this.model.get('description'));

		return this;
	}
});
