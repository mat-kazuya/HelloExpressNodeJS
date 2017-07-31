
/*
 * GET home page.
 */

exports.index = function(req, res){

	// header moduleを用意
	var header = require('../model/header');

	// スマホ判定
	if (header.isSmartPhone(req)) {
		res.render('index_sp', { title: 'Express for SmartPhone' });
	}

    // その他の場合はPC表示
    res.render('index_pc', { title: 'Express for PC' });
};