/**
 * Created by dennis on 20.03.17.
 */

Meteor.publish("ping",() => {

   return Ping.find({_id:"1"},{fields:{_id:1}});
});