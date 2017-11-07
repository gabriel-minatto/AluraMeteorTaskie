Meteor.methods({
    adiciona: function(obj){
        Tarefas.insert({nome: obj.nome, data: new Date(),
            usuario: this.userId});
    },
    remove: function(_id){
        Tarefas.remove({_id:_id, usuario: this.userId});
    }
});