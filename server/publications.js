Meteor.publish('lists', () => {
    return Lists.find();
});