import '../style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
	function Header() {
	  return (
  
		<div className="top-header-wp">
		  <div className="row">
			<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
			  <div className="top-h-tran">
				<ul>
				  <li><img src="images/increase-rate.svg" alt="" /></li>
				  <li>Transfer in: <span>Aguero (25%)</span></li>
				  <li>Transfer out: <span>Pogba (25%)</span></li>
				  <li>Cap: <span>Lukaku(25%)</span></li>
				</ul>
			  </div>
			</div>
			<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
			  <div className="top-h-right-wp">
				<div className="top-h-right-lang">
				  <div id="options" data-input-name="country2" data-selected-country="VN" />
				</div>
				<div className="top-h-right-menu">
				  <ul>
					<li><a href="#">Hỗ Trợ</a></li>
					<li><a href="#">Fanpage</a></li>
					<li><a href="#">Cộng Đồng</a></li>
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  )
	}
export default Header
