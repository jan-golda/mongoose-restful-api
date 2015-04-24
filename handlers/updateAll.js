module.exports = function(model, options){

	return function(req, res){

		// updating all items
		model.update(req.body)
			.exec(function(err, count){
				// throwing database errors
				if(err)
					throw err;

				// sending number of updated items
				res.status(200).send(count).end();
			});
	};
};
