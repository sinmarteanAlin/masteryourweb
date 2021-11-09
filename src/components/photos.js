import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";
import Img from "gatsby-image";
import ReactPlayer from 'react-player/lazy';

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};

export default class Photos extends Component {
  render() {
    const { data } = this.props;
    const popularVideoLinks = [
        'https://www.youtube.com/watch?v=VSMjskqPiuE', // HTML first video
        'https://www.youtube.com/watch?v=k4aafnmtAok', // HTML 2nd video
        'https://www.youtube.com/watch?v=BBJxTFLUBjc', // HTML 3rd video
        'https://www.youtube.com/watch?v=YyidmJM27iI', // HTML 4th video
        'https://www.youtube.com/watch?v=zFQ0wgn4rr0', // HTML 5th video
        'https://www.youtube.com/watch?v=V-lmAa8Xa3c', // HTML 6th video
        'https://www.youtube.com/watch?v=k10ZAJDgOcA', // HTML 7th video
        'https://www.youtube.com/watch?v=8UyCtSpc5ik' // HTML 8th video
    ];

    return (
      <div className="photos section" id="PopularVideos">
        <div className="container">
          <div className="section-head">
            <h2>Popular Videos</h2>
          </div>
          <div className="slider-section photos-list">
            <Slider {...settings}>
                {popularVideoLinks.map((url, index) => {
                    return (
                        <div key={index} className="photos-item">
                            <ReactPlayer 
                                url={url}
                                width={'320px'}
                                height={'200px'}
                            />
                        </div>
                    )
                })}
            </Slider>
          </div>
          <div className="see-more">
              {/* Comment for now, since it's still a work in progress */}
            {/* <Link to="/photos">
              <span>More Videos</span>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
