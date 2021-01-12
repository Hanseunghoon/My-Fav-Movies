import React from 'react';
import './detail.css'

class Detail extends React.Component {

  componentDidMount(){
    
    const {location, history} = this.props;
    
    if(location.state === undefined){
      // If i have not 'location', Redirect to Home
      history.push("/");
    }
  }

  render() {
    
    const {location} = this.props;

    if(location.state){
      return (
        <section className="datail">

          <div className="container">

            <div className="row">

              <div className="col-12">

                <div className="detail-card">
                  <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                  <div className="detail-data">

                    <div className="detail-div">
                      <h3 className="detail-title">{location.state.title}</h3>
                      <p className="detail-year">({location.state.year})</p>
                    </div>

                    <ul className="detail-genres">
                      {location.state.genres.map((genre, index) => (
                        <li key={index} className="detail-genre">{genre}</li>
                      ))}
                    </ul>
                    <p className="detail-summary">{location.state.summary}</p>
                  </div>
                </div>

              </div>

            </div>


          </div>

        </section>
      );
    }
    else{
      return null;
    }
  }
}

export default Detail;