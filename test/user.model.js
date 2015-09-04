(function() {
    'use strict';

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var UserSchema = new Schema(
      {
          "_id" : String,
          "index" : Number,
          "guid" : String,
          "isActive" : Boolean,
          "balance" : String,
          "picture" : String,
          "age" : Number,
          "eyeColor" : String,
          "name" : String,
          "gender" : String,
          "company" : String,
          "email" : String,
          "phone" : String,
          "address" : String,
          "about" : String,
          "registered" : String,
          "latitude" : Number,
          "longitude" : Number,
          "tags" : [ String ],
          "friends" : [ 
              {
                  "id" : Number,
                  "name" : String
              }, 
              {
                  "id" : Number,
                  "name" : String
              }, 
              {
                  "id" : Number,
                  "name" : String
              }
          ],
          "greeting" : String,
          "favoriteFruit" : String
      } 
    );

    var collectionName = 'users';
    module.exports = mongoose.model('User', UserSchema, collectionName);
}) ();