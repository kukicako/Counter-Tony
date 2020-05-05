import React from 'react'; 
import blogimage from '../images/blogimage.jpg'
import './blog.scss'
import testimage123321 from '../images/testimage123321.jpg'
import { Link } from 'react-router-dom'

function BlogHomePage2() {
    return(
        <div>

            <div className="BlogPictureContainer">
                <img className="BlogPicture" src={blogimage} alt="Eclipse with Blog Title" />
            </div>

            <div className="BlogSection">

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

            </div>

            <div className="BlogSection">

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

                <div className="BlogContainer">
                        <img className="BlogSectionPicture" src={testimage123321} alt="Blog Picture" />
                        <div className="BlogBottomSection">
                            <div className="BlogAuthorDiv">
                                <i class="fas fa-pen"></i>
                                <h4 className="BlogAuthor">David "Gatr" Downes</h4>
                            </div>
                            <Link to='/Blogs/EleagueMajor2018' className="BlogTitle" >Cloud9 Win E-League Major!</Link>
                            <p className="BlogDescription">Cloud9 Shocks the World and takes down the giants in FaZe in a thrilling 2-1 series led by MVP Tarik</p>
                        </div>
                </div>

            </div>

            <div className="BlogButton">
                <i class="fas fa-less-than"></i>
                <Link to='/Blog'><button className="BlogPageButton">1</button></Link>
                <Link to='/Blog/Page2'><button className="BlogPageButton">2</button></Link>
                <i class="fas fa-greater-than"></i>
            </div>

        </div>
    )
}

export default BlogHomePage2