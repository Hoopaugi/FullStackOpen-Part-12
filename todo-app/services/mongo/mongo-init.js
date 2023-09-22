db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME || 'the_username',
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD ||'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: process.env.MONGO_INITDB_DATABASE || 'the_database',
    },
  ],
});

db.createCollection('todos');

db.todos.insert({ text: 'Write code', done: true });
db.todos.insert({ text: 'Learn about containers', done: false });
