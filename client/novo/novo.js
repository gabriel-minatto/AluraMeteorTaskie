Template.novo.events({
    "submit form": function(e, template){
        e.preventDefault();

        var input = $("#tarefa");
        var nome = input.val();

        if(nome.length == 0)
            return;

        Meteor.call("adiciona", {nome: nome})
        Tarefas.insert({nome: nome, data: new Date()});
        input.val("");
    }
});