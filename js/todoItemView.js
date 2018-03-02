var TodoItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'todoItem',
	// for trouble shooting purposes
	// clearer error if we forgot to send the model
	initialize: function(options) {
		if (!(options && options.model)) {
			throw new Error('model is not provided');
		}
		// when changes are made to this model rerender the page
		this.model.on('change', this.render, this);
	},

	events: {
		'click #toggle': 'onClickToggle',
		'click #delete': 'onClickDelete'
	},

	onClickDelete: function() {
		// will send an http delete request tp the server
		// url isn't set here. thus, it just deletes it from the collection
		this.model.destroy();
	},

	onClickToggle: function() {
		this.model.toggle();
	},

	render: function() {
		// this brings the 'id' out of the object data and places it on the element as the 'id' attribute
		this.$el.attr('id', this.model.id);
		// add the css class 'completed' based on the 'isCompleted' state
		this.$el.toggleClass('completed', this.model.get('isCompleted'));
		// var 'checked' equals string 'checked' if 'isCompleted' equals true
		// because the page rerenders on changes we need to reset the checkbox 'checked' attribute
		var checked = this.model.get('isCompleted') ? 'checked' : '';
		// excape html end codes the value
		// works the same as 'get' but prevents html injection
		this.$el.html(
			// 'checked' attribute results in a checked box
			'<input id="toggle" type="checkbox"' +
				checked +
				'></input> ' +
				this.model.escape('description') +
				' <button id="delete">Delete</button>'
		);

		return this;
	}
});
