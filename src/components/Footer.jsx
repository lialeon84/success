import React from "react"

    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    //console.log(year);

const Footer = () => 

<footer className="page-footer font-small blue pt-4">
    {/* <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

          

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div> */}

    <div className="footer-copyright text-center py-3"> Made with &#x1F49C; © {year}
        <p className="text-center" id="footerName">Coder Chic </p>
        <p className="text-center" id="footerName">A single action can have a lasting impact - Rose L.</p>
    </div>

</footer>

export default Footer