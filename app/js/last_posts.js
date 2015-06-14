/**
 *  Last Posts
 */


var Post = Backbone.Model.extend({
  defaults: {
    body: '',
    name: '',
    blog_name: '',
    title: ''  
  }
})

var LastPosts = Backbone.View.extend({

    _NAME: "merceriaalonso",
    _KEY: "f6OooYtU1vJpRP3L8YPTaMBmpMNjAkBh3P90Uo5pvhoColpNmF",

    _POST_HTML: " "+
      "<li class='LastPosts-item pure-u-1 pure-u-md-1-3 pure-u-lg-1-3'>"+
        "<h3 class='LastPosts-itemTitle'><%= title %></h3>"+
        "<div class='LastPosts-itemBody'><%= body %></div>"+
      "</li>",

    initialize: function(obj) {
      this.collection = new Backbone.Collection();
      this._initBinds();
      this._getPosts();
    },

    render: function() {
      this.collection.each(function(mdl) {
        this.$el.append(
          _.template(this._POST_HTML)(mdl.toJSON())
        )
      }, this);
      return this;
    },

    _initBinds: function() {
      this.collection.bind('reset', this.render, this);
    },

    _getPosts: function() {
      var self = this;
      $.ajax({
        url: "//api.tumblr.com/v2/blog/" + this._NAME + ".tumblr.com/posts?api_key=" + this._KEY + "&limit=3",
        dataType: "jsonp",
        jsonp: "jsonp"
      }).success(function(r) {
        self.collection.reset(r.response.posts);
      });
    }

  });



