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

  templates: {
    text: " " +
    "<li class='Block-item LastPosts-item pure-u-1 pure-u-md-1-2 pure-u-lg-1-2'>"+
      "<div class='l-box'>"+
        "<h3 class='LastPosts-itemTitle DefaultTitle'><%= title %></h3>"+
        "<div class='LastPosts-itemBody DefaultParagraph'><%= body.substring(0, 300) %>... <a href='<%= post_url %>'>ver más</a></div>"+
      "</div>"+
    "</li>",
    photo: "<li class='Block-item LastPosts-item pure-u-1 pure-u-md-1-2 pure-u-lg-1-2'>"+
      "<div class='l-box'>"+
        "<!--img class='pure-img' src='<%= photos[0].alt_sizes[0].url %>' alt='<%= slug %>' title='<%= slug %>'/-->"+
        "<% if (caption) { %><div class='LastPosts-itemBody'><%= caption.substring(0, 300) %>... <a href='<%= post_url %>'>ver más</a></div><% } %>"+
      "</div>"+
    "</li>"
  },

  initialize: function(obj) {
    this.collection = new Backbone.Collection();
    this._initBinds();
    this._getPosts();
  },

  render: function() {
    this.collection.each(function(mdl) {
      var html = this.templates[mdl.get('type')] || this.templates['post'];
      this.$el.append(
        _.template(html)(mdl.toJSON())
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
      if (r.response.posts.length > 0) {
        self.collection.reset(r.response.posts);  
      } else {
        self.hide();
      }
    });
  }

});



