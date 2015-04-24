module.exports = function(model, options){

	return function(req, res){

		// getting all items
		model.find()
			.exec(function(err, items){
				// throwing database error
				if(err)
					throw err;

				// sending response
				res.status(200).json(items).end();
			});
	};
};
