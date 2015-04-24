module.exports = function(model, options){

	return function(req, res){

		// getting element
		model.findOne()
			.where('_id').eq(req.params.id)
			.exec(function(err, item){
				// throwing database errors
				if(err)
					throw err;

				// sending 'not found' if item not exists
				if(!item)
					return res.status(404).end();

				// sending item
				res.status(200).json(item).end();
			})
	};
};
