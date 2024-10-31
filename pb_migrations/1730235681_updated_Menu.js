/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnk7uihg3tsng37")

  collection.name = "menu"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnk7uihg3tsng37")

  collection.name = "Menu"

  return dao.saveCollection(collection)
})
