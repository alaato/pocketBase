/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  collection.listRule = "@request.auth.role = 'admin' || @request.auth.id = customer.id || @request.auth.id = driver.id"
  collection.viewRule = "@request.auth.role = 'admin' || @request.auth.id = customer.id"
  collection.createRule = "@request.auth.role = 'admin' || @request.auth.role = 'customer'"
  collection.updateRule = "@request.auth.role = 'admin' || @request.auth.role = 'customer'"
  collection.deleteRule = "@request.auth.role = 'admin'"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssbg9gt2",
    "name": "customer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssbg9gt2",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
