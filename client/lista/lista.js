Template.lista.helpers({

    tarefas : function(){
        return Tarefas.find({}, { sort: { data: -1 } });
    },

    formataData : function(data){
        return moment(data).format("DD/MM/YYYY HH:mm");
    }

});

Template.lista.events({
    "click .delete_button": function(event, Template){
        var tarefa = this;

        Meteor.call("remove", tarefa._id);
    }
});

