/**
 * Created by dennis on 20.03.17.
 */

Ping = new Meteor.Collection('ping');


if(Meteor.isServer) {

    if(!Ping.findOne({_id:"1"})) {

        Ping.insert({_id:"1", updatedAt: new Date()});
    }
}