/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rhwktehbrcv1e14",
    "created": "2024-10-29 21:01:07.123Z",
    "updated": "2024-10-29 21:01:07.123Z",
    "name": "orderItems",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gmeazqrt",
        "name": "order",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "tmdzg40fkuq4wlt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "qwjx1hnf",
        "name": "item",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "gnk7uihg3tsng37",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rhwktehbrcv1e14");

  return dao.deleteCollection(collection);
})
