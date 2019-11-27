import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer_area p_120">
                    <div className="container">
                        <div className="row footer_inner">
                            <div className="col-lg-5 col-sm-6">
                                <aside className="f_widget ab_widget">
                                    <div className="f_title">
                                        <h3>About Me</h3>
                                    </div>
                                </aside>
                                <div>
                                    <br/>
                                    Developer: Marcelo Portella
                                    <br/>
                                    e-mail: 1119714@imed.edu.br
                                    <br/>
                                    R.A.: 1119714
                                    <br/>
                                    Computing Science IMED 2019/2
                                </div>                                
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <aside className="f_widget news_widget">
                                    <div className="f_title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <a class="navbar-brand logo_h" href="https://gremio.net/" target="_brank">
                                        <img src="img/Gremio.jpeg" alt="" />
                                    </a> 
                                    &nbsp;&nbsp;                                   
                                    <a class="navbar-brand logo_h" href="https://www.internacional.com.br/home" target="_brank">
                                        <img src="img/Inter.jpg" alt="" />
                                    </a>                                   
                                </aside>                              
                            </div>
                            <div className="col-lg-2">
                                <aside className="f_widget social_widget">
                                    <div className="f_title">
                                        <h3>Follow Me</h3>
                                    </div>
                                    <p>Let us be social</p>
                                    <ul className="list">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
