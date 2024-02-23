import React from 'react'

const Professional = () => {
    return (
        <>
            <div className="professional-container">
                <form action="#" method="post" >

                    <label htmlFor="name">Name:</label>
                    <input type="text" className="professional-name" placeholder="Enter name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="professional-email" placeholder="Example@email.com" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="professional-password" placeholder="At least 8 character" minLength="8" required />
                    <label htmlFor="professional-radio">Work as Full Timer:</label>
                    <input type="radio" className="professional-radio" name="work" />
                    <label htmlFor="professional-radio">Work as Part Timer:</label>
                    <input type="radio" className="professional-radio" name="work" />

                    <div className="professional-document">
                        <img src="/images/cloud.jpg" alt="cloud" />
                        <p className="professional-drag">Choose a file or drag & drop it here</p>
                        <p className="professional-imgformat">JPEG format, upto 5 MB</p>
                        <button className="professional-browse">Browse File</button>
                    </div>

                    <button className="professional-button professional-cancle-button">Cancle</button>
                    <button className="professional-button professional-register-button">Register</button>

                </form>

            </div>
        </>
    )
}

export default Professional
