/**
 *  Cookie model
 *
 */

var CookieModel = Backbone.Model.extend({
  initialize: function () {
    this.fetch();
  },

  fetch: function () {
    this.set($.parseJSON($.cookie(this.id)));
  },

  save: function (attributes) {
    this.set(attributes);
    $.cookie(this.id, JSON.stringify(this.toJSON()));
  },

  destroy: function (options) {
    $.removeCookie(this.id);
  },

  isEmpty: function () {
    return (_.size(this.attributes) <= 1); // just 'id'
  }
});
