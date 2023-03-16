

export default function Hero(){
    return(
        <div className="">
                        <section id="browse-dashboard" className=" d-flex direction-column flex-start middle-align">
                            <div>
                                {/* <!--trailer video--> */}
                                <video className="hero-background-image" id="hero-video"
                                    poster="/images/movies/murder mystery.jpg">
                                    <source src="/images/movies/videos/Murder Mystery - Trailer - Netflix.mp4"
                                        type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* <!--left shadow--> */}
                                <div className="shadow-layer"></div>
                            </div>

                            <div className="container text-container" style={{zIndex: 5}}>
                                <div className="contentlogo">
                                  
                                        <span className="movie--title">MURDER MYSTERY</span>
                                            
                                        
                                </div>
                                
                                

                                <div className="synopsis m-t-20" style={{maxWidth: "500px"}}>
                                    <p>
                                        An overdue honeymoon. A shocking crime. A roomful of suspects. If Nick and Audrey can stay alive, this could be their best vacation ever.
                                    </p>
                                </div>
                                <div className="buttons-container m-t-20">
                                    <button className="play-button"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                                        </svg>
                                    </span> <a href="single.html">Play</a></button>

                                    <button className="more-info-button m-t-20"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span> More Info</button>
                                </div>
                            </div>
                        </section>
                    </div>
    )
}