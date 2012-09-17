  var Book = Backbone.Model.extend({
    // *IMPORTANT* the slash at the end of path "...Demo*/*" 
    url: '/gh/get/response.json/stegrams/jsFiddleGithubDemo/tree/master/Demo/'
});

var midnight = new Book({
    title: 'Midnight in the garden of good and evil',
    author: 'John Berendt'
});

alert("[Before save]\n"+
      "Is model saved on server? " + !midnight.isNew() + "\n" +
      "What is the model's id on server? " + midnight.id);

midnight.save({},{
    success: function(){
      alert("[After save]\n"+
            "Is model saved on server? " + !midnight.isNew() + "\n" +
            "What is the model's id on server? " + midnight.id);
    },
    error: function() {alert('error');}});
  