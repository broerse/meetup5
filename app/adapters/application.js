var db = new PouchDB('meetup5');
var remote = new PouchDB('http://martinic.iriscouch.com:5984/bloggr', {ajax: {timeout: 20000}});
db.sync(remote, {live: true});

export default EmberPouch.Adapter.extend({
  db: db
});