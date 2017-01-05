import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*
 * Liste les élèves
 * */
Template.student.helpers({
    toutlemonde() {
        return eleves.find();
    },
});

/*
* Ajoute un nouvel élève
* */
Template.student.events({
    "submit .add_form": function (event, template) {

        event.preventDefault();
        eleve_name = template.find("#nom_eleve").value;

        if(eleve_name.trim().length !== 0){
            eleves.insert({
                name: eleve_name
            });
        }

        template.find("#nom_eleve").value = '';
    }
});

/*
 * Supprime un élève
 * */
Template.student.events({
    "click .delete_eleve": function (event, template) {

        event.preventDefault();
        eleves.remove(this._id);
    }
});
