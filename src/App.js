import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Filali Khaldoun",
    profession: "Aircraft Mechanic",
    bio: "Aircraft Mechanic and Full stack JavaScript Developer",
   
    image: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/235794035_2141960785958886_38056125433609662_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EsD4g9IMTYsAX_U9-0u&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_oAtGCmOGUVcwiDnvpXcsg4F2tiuPv96Z0IDSEcbln0g&oe=62461CAD",
    show: false,
  
    
    cnt: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show  });
    this.setState({cnt : this.state.cnt = 0})
 
  };
 

  componentDidMount() {
    setInterval(() => {
      this.setState((laststate) => ({
        cnt: laststate.cnt + 1,
      }));
    },1000);
  }

  render() {
    return (
      
      <div className="profile app">
         
        
        <div className="card">
          
          {this.state.show && (
            
            <div className="data">
              <div className=" Myimg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="profile">
                
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
               
                <div className="count">
                 Count :{this.state.cnt}{" "}
                  sec
                </div>
              </section>
              
            </div>
            
          )}
         
          <button type="button" className="btn" onClick={this.handleClick}>
           {this.state.show  ? "Hide me" :"Show me" }
          </button>
        </div>
      
       
      </div>
    );
  }
}
export default App;