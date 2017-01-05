import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.student.helpers({
    toutlemonde() {
        return eleves.find();
    },
});


