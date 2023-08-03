import React, { useEffect } from 'react'

function PageNotFound() {

    useEffect(() => {


        document.getElementById('btn').addEventListener("click", function (e) {
            window.history.back();
        })
    }, [])

    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">

                                <div className="bg">
                                    <h1 className="text-center">404</h1>
                                </div>

                                <div className="content-box">
                                    <h3 className="h3">Look Like You're Lost</h3>
                                    <p>the page you are looking for not avaible!</p>
                                    <a href='void()' id="btn" className="btn homeBtn">Go Back</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PageNotFound
