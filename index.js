// public modules import
var utils   	= require('utils')._;

// local imports
var handlers	= require('./handlers');

// default options
var defOptions = {
	getAll:     true,
	updateAll:  false,
	create:     true,
	deleteAll:  false,
	getOne:     true,
	updateOne:  true,
	deleteOne:  true
};

// exports
module.exports = function(router, model, options){

	// default options
	options = utils.defaults({}, defOptions, options);

	// required options
	if(!utils.isString(options.name))
		throw new Error("Missing name property");

	// collection route
	var colRoute = router.route('/'+options.name);
	// specific element route
	var eleRoute = router.route('/'+options.name+"/:id");

	// getting all objects
	if(options.getAll)
		colRoute.get(handlers.getAll(model, options));

	// updating all objects
	if(options.updateAll)
		colRoute.put(handlers.updateAll(model, options));

	// create
	if(options.create)
		colRoute.post(handlers.create(model, options));

	// delete all objects
	if(options.deleteAll)
		colRoute.delete(handlers.deleteAll(model, options));

	// getting one object
	if(options.getOne)
		eleRoute.get(handlers.getOne(model, options));

	// updating one object
	if(options.updateOne)
		eleRoute.get(handlers.updateOne(model, options));

	// deleting one object
	if(options.deleteOne)
		eleRoute.get(handlers.deleteOne(model, options));

};
