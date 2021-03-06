"use strict";
var QueryController = require('../controllers/query-controller');
var QueryRouter = require('express').Router();

QueryRouter.get(`/`, QueryController.find.bind(QueryController));
QueryRouter.get(`/:id`, QueryController.findById.bind(QueryController));
QueryRouter.get(`/:category/:subCategory`, QueryController.findByCategory.bind(QueryController));
QueryRouter.post(`/`, QueryController.add.bind(QueryController));
QueryRouter.put(`/:id`, QueryController.edit.bind(QueryController));
QueryRouter.delete(`/`, QueryController.remove.bind(QueryController));

module.exports = QueryRouter;