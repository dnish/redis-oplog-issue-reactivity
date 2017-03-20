import { Meteor } from 'meteor/meteor';
import { RedisOplog } from 'meteor/cultofcoders:redis-oplog';

//RedisOplog.init();


Meteor.startup(() => {
  // code to run on server at startup



    Meteor.setInterval(() => {
        Ping.update({_id:"1"},{$set:{updatedAt: new Date()}});
    },5000);
});
