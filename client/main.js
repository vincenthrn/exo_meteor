import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.student.helpers({
    toutlemonde() {
        return eleves.find();
    },
});

Template.student.events({
    "click #add_eleve, submit .add_form": function (event, template) {

        event.preventDefault();
        eleve_name = template.find("#nom_eleve").value;

        eleves.insert({
          name: eleve_name
        });
    }
});


