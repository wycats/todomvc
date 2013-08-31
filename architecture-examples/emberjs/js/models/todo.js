/*global Todos*/
/*global DS*/
/*global Ember*/
'use strict';

Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),

	todoDidChange: function () {
		Ember.run.once(this, 'save');
	}.observes('isCompleted', 'title')
});
