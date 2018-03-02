$(document).ready(function() {
	var todoItems = new TodoItems([
		new TodoItem({ description: 'walk the cat' }),
		new TodoItem({ description: 'buy a cat' }),
		new TodoItem({ description: 'learn to walk' })
	]);

	var bus = _.extend({}, Backbone.Events);

	var todoItemsView = new TodoItemsView({ model: todoItems, bus: bus });

	$('body')
		.append(todoItemsView.render().$el)
		.prepend(new AddTodoItemView({ bus: bus }).render().$el);
});
