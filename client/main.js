import {Template} from 'meteor/templating';
import './main.html';

/*
 * Liste les tasks
 * */
Template.list.helpers({
    allTasks() {
        return tasks.find();
    }
});

/*
 * Ajoute une task
 * */
Template.list.events({
    "submit .add_form": function (event, template) {

        event.preventDefault();
        task_name = template.find("#task_name").value;

        if (task_name.trim().length !== 0) {
            let task_id = tasks.insert({
                name: task_name,
                editing: false
            });
        }

        template.find("#task_name").value = '';
    }
});

/*
 * Supprime une task
 * */
Template.list.events({
    "click .delete_task": function (event, template) {

        tasks.remove(this._id);

    }
});


/*
 * Accès à l'edit
 * */
Template.list.events({
    "dblclick .name_item": function (event, template) {

        tasks.update(this._id, {
            $set: {editing: true}
        });
    }
});

/*
 * Focus de l'input d'edit
 * */
Template.editItem.rendered = function () {
    this.$('input').focus()
};

/*
 * Modifie une task
 * */
Template.editItem.events({
    "keypress input[class='todo-edit-field']": function (event, template) {

        console.log(event.keyCode);
        if (event.keyCode == 13) {
            let value = event.currentTarget.value;
            if (value.trim().length !== 0) {
                tasks.update(this._id, {
                    $set: {name: event.currentTarget.value, editing: false}
                });
            }
        }
    }
});


