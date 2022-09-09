db.createUser({
  user: 'csabak',
  pwd: 'cs4b4k',
  roles: [
    {
      role: 'readWrite',
      db: 'recipe-app',
    },
  ],
});
