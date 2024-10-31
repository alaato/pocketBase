/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcgde6uj",
    "name": "total",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8o9qr0hr",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "accepted",
        "dispatched",
        "completed",
        "cancelled"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmdzg40fkuq4wlt")

  // remove
  collection.schema.removeField("jcgde6uj")

  // remove
  collection.schema.removeField("8o9qr0hr")

  return dao.saveCollection(collection)
})
