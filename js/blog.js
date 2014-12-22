	$(function() {
 
    Parse.$ = jQuery;
 
  // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ZO3HabLok7Yx5A77CLVwNSouStQm9n1hvmMGR8x0", "Z8UJh96y9axkvE337queHssq2JzfEBpzmym508hO");
 	 
});

	$(function(blogs) {
	
	var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({ model: Blog });
	var blogs = new Blogs();

		blogs.fetch({
		    success: function(blogs) {
    var blogsView = new BlogsView({ collection: blogs });
    blogsView.render();
    $('.main-container').html(blogsView.el);
		    },
		    error: function(blogs, error) {
		        console.log(error);
		    }
		});
		
		var BlogsView =  Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});


});

