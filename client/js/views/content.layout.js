var Marionette = require('backbone.marionette');
var template = require('../../templates/content.layout.hbs');
var StudentList = require('./student.list');
var NewStudent = require('./new.student');

var ContentLayout = Marionette.LayoutView.extend({
  template: template,
  id: 'content-layout',

  regions: {
    form: '#new-student-form',
    list: '#student-list'
  },

  onRender: function() {
    this.form.show(new NewStudent());
    this.list.show(new StudentList());
  }
});

module.exports = ContentLayout;
