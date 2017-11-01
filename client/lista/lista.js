Template.lista.helpers({

    tarefas : function(){
        return Tarefas.find({});
    },

    formataData : function(data){
        return moment(data).format("DD/MM/YYYY HH:mm");
    }

});