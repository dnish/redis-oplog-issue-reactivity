
Meteor.subscribe('ping');

Tracker.autorun(() => {
    if(Ping.findOne({_id:"1"})) {

      console.log("RECEIVED NEW PING");
    }
});


