module.exports = function(model, options){

	return function(req, res){

		// updating element by id
		model.findOneAndUpdate(req.body)
			.where('_id').eq(req.params.id)
			.exec(function(err, item){
				// throwing database errors
				if(err)
					throw err;

				// send 'not found' if item not exists
				if(!item)
					return res.status(404).end();

				// sending success
				res.status(200).end();
			});
	};
};
