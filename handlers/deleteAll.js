module.exports = function(model, options){

	return function(req, res){

		// deleting all items
		model.remove()
			.exec(function(err, count){
				// throwing database errors
				if(err)
					throw err;

				// sending number of deleted items
				res.status(200).send(count).end();
			});
	};
};
