import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import axios from 'axios';
class SignUpContainer extends Component {

render () {
    
    return (
        <div id="wrapper">
        <div id="page-wrapper" class="gray-bg sidebar-content">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style={{margiBottom: '0'}}>
        <div class="navbar-header">
            <a href="#" class="navbar-brand" style={{fontSize: '1.5em',lineHeight: '1.5em'}}>Adthon</a>
            <form role="search" class="navbar-form-custom" action="search_results.html">
                <div class="form-group">
                    <input type="text" placeholder="검색..." class="form-control" name="top-search" id="top-search"/>
                </div>
            </form>
        </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <a href="#">
                        <span>ADMIN</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>USER NAME</span>
                    </a>
                </li>
                <li>
                    <a href="login.html">
                        <i class="fa fa-sign-out"></i> 로그아웃
                    </a>
                </li>
            </ul>

        </nav>
        </div>
            <div class="wrapper wrapper-content">
                                <div class="row">

                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-content">
                                <h1 class="m-b-xs">광고 리스트</h1>
                                <div class="row">
                                    <div class="col-sm-9 m-b-xs">
                                        <div data-toggle="buttons" class="btn-group">
                                            <label class="btn btn-sm btn-white"> <input type="radio" id="option1" name="options"/> 일별 </label>
                                            <label class="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options"/> 주별 </label>
                                            <label class="btn btn-sm btn-white"> <input type="radio" id="option3" name="options"/> 월별 </label>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="input-group"><input type="text" placeholder="광고명" class="input-sm form-control"/> <span class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-primary"> 검색 </button> </span></div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped">
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
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                           <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>코코인 메인배너</td>
                                            <td>모빌리스트</td>
                                            <td>1213</td>
                                            <td>40</td>
                                            <td><span class="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                       
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-content">
                                    <div>
                                        <span class="pull-right text-right">
                                        <small>사용자 클릭 및 노출 이벤트 <strong></strong></small>
                                        </span>
                                        <h1 class="m-b-xs">코코인 메인 배너</h1>
                                        <small class="font-bold no-margins">
                                             <i class="fa fa-clock-o"> </i>
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
        <div class="footer">
            <div class="pull-right">
                
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


