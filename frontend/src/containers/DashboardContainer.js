import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import axios from 'axios';
class SignUpContainer extends Component {

render () {
    
    return (
        <div className="">
        <div className="gray-bg">
        <div className="row border-bottom">
   
        </div>
            <div className="wrapper wrapper-content">
                                <div className="row">

                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">
                                <h1 className="m-b-xs">광고 리스트</h1>
                                <div className="row">
                                    <div className="col-sm-9 m-b-xs">
                                        <div data-toggle="buttons" className="btn-group">
                                            <label className="btn btn-sm btn-white"> <input type="radio" id="option1" name="options"/> 일별 </label>
                                            <label className="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options"/> 주별 </label>
                                            <label className="btn btn-sm btn-white"> <input type="radio" id="option3" name="options"/> 월별 </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="input-group"><input type="text" placeholder="광고명" className="input-sm form-control"/> <span className="input-group-btn">
                                        <button type="button" className="btn btn-sm btn-primary"> 검색 </button> </span></div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>광고명 </th>
                                            <th>광고주 </th>
                                            <th>노출수</th>
                                            <th>노출시간</th>
                                            <th>클릭수</th>
                                            <th>수익률</th>
                                             <th>게시날짜 </th>
                                            <th>상태</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                           <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                       
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">
                                    <div>
                                        <span className="pull-right text-right">
                                        <small>사용자 클릭 및 노출 이벤트 <strong></strong></small>
                                        </span>
                                        <h1 className="m-b-xs">코코인 메인 배너</h1>
                                        <small className="font-bold no-margins">
                                             <i className="fa fa-clock-o"> </i>
                                        Update on 16.07.2018
                                        </small>
                                    </div>

                                <div>
                                    <canvas id="lineChart" height="70"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        <div className="footer">
            <div className="pull-right">
                
            </div>
            <div>
                <strong>Copyright</strong> AWS Amathon Team1 &copy; 2018
            </div>
        </div>

        </div>

                    </div>
     

)
}


}

export default SignUpContainer;


