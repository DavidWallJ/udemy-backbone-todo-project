var TodoItem = Backbone.Model.extend({
	// like state in react
	defaults: {
		isCompleted: false
	},
	// fake URL for demonstration purposes
	url: 'fakeURL',

	validate: function(attrs) {
		if (!attrs.description) return 'A description is required.';
	},

	toggle: function() {
		// set the the state 'isCompleted' to the opposite value it currently has
		// no value will evaluate as false, resulting in 'isCompleted=true'
		this.set('isCompleted', !this.get('isCompleted'));
	}
});
