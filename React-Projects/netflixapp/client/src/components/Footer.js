

export default function Footer(){
    return(
        <footer className="mainfooter d-flex direction-column space-between" id=" footer">
                    <div className="container footer-container flex-start">
                        <div className="widgets d-flex space-between">
                            <div className="first-widget">
                                <ul>
                                    
                                    <li className="list-item">Media Center</li>
                                    <li className="list-item">Privacy</li>
                                    <li className="list-item">Contact us</li>
                                </ul>
                            </div>
                            <div className="second-widget">
                                <ul>
                                    <li className="list-item">Help Center</li>
                                    <li className="list-item">Cookie</li>
                                    <li className="list-item">Jobs</li>
                                </ul>
                            </div>
                            <div className="third-widget">
                                <ul>
                                    <li className="list-item">Audio Description</li>
                                    <li className="list-item">Investor Relations</li>
                                    <li className="list-item">Legal Notice</li>
                                </ul>
                            </div>
                            <div className="forth-widget">
                                <ul>
                                    <li className="list-item">Gift Card</li>
                                    <li className="list-item">Term Of Use</li>
                                    <li className="list-item">Corporate Information</li>
                                </ul>
                            </div>
                        </div>
                        
                        <p className="copyright">@copyright 2022.</p>
                    </div>


                </footer>
    )
}