$(document).ready(function() {
	var todoItems = new TodoItems([
		new TodoItem({ id: 1, description: 'walk the cat' }),
		new TodoItem({ id: 2, description: 'buy a cat' }),
		new TodoItem({ id: 3, description: 'learn to walk' })
	]);

	var bus = _.extend({}, Backbone.Events);

	var todoItemsView = new TodoItemsView({ model: todoItems, bus: bus });

	$('body')
		.append(todoItemsView.render().$el)
		.prepend(new AddTodoItemView({ bus: bus }).render().$el);
});
