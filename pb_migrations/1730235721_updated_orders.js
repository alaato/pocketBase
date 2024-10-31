/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yusgfuam",
    "name": "Items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rhwktehbrcv1e14",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  // remove
  collection.schema.removeField("yusgfuam")

  return dao.saveCollection(collection)
})
