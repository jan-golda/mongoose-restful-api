module.exports = function(model, options){

	return function(req, res){

		// removing item by id
		model.findOneAndRemove()
			.where('_id').eq(req.params.id)
			.exec(function(err, item){
				// throwing database errors
				if(err)
					throw err;

				// sending 'not found' id element not exists
				if(!item)
					return res.status(404).end();

				// sending success code
				res.status(200).end();
			});
	};
};
