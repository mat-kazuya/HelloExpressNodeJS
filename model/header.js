/**
 * http://usejsdoc.org/
 */

exports.isSmartPhone = function (req) {

	//User Agentの取得
	var ua = req.headers['user-agent'].toLowerCase();

    // iPhone
    if (ua.indexOf('iphone') > -1) {
    	return true;
    }
    // iPad
    if (ua.indexOf('ipad') > -1) {
    	return true;
    }
    // Android
    if ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1)) {
    	return true;
    }
    // Android Tablet
    if ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1)) {
    	return true;
    }

    // 該当しない場合はPC判定
    return false;
};