Meteor.startup(function(){

    Meteor.publish("tarefas", function(){
        return Tarefas.find({usuario: this.userId, data: { $gt: new Date(2017,10,1,11,30)} });
    });


});