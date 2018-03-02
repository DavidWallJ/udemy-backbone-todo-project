var TodoItem = Backbone.Model.extend({
	validate: function(attrs) {
		if (!attrs.description) return 'A description is required.';
	}
});
