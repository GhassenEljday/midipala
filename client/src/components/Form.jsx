import React from "react";
const axios = require("axios");

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "",
      imgadd: "",
      addImg: false,
      post: "",
      imgUrl: "",
      bio: "",
      Rpost: "",
    };
    this.urlImg = this.urlImg.bind(this);
    this.addimgP = this.addimgP.bind(this);
    this.addPost = this.addPost.bind(this);
    this.react = this.react.bind(this);
}

  urlImg(event, filed) {
    this.setState({ [filed]: event.target.value });
  }

  addimgP() {
    this.setState({ addImg: true });
    this.setState({ imgadd: this.state.imgSrc });
    const ppp = {
      picUrl: this.state.imgadd
    };
    axios.post("/users/profile", ppp).then((response) => {
        console.log(response.data)
    }).catch((err) =>{
        console.log(err)
    })
  }

  addPost(){
    const posts = {
      paragraph: this.state.post,
      imgUrl:this.state.imgUrl
    };
        axios.post("/users/blogs", posts).then((response) => {
            console.log(response.data)
        }).catch((err) =>{
            console.log(err)
        })
        this.setState({post: "",imgUrl:""});
        window.location.reload(false);
  }

  componentDidMount() {
      axios.get("http://localhost:3000/api/blogs").then((response) =>{
          const Rblogs = response.data;
          var arrOfposts = [];
          for (var i = 0; i < Rblogs.length; i++) {
              const pub = Rblogs[i]
              arrOfposts.push(pub);
              this.setState({Rpost: arrOfposts});
          }
      })
  }

  react(){

  }


  render() {
      const icon = (
          
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="smile"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
          />
          <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
        </svg>
        
      );
      // check !
      var pop = this.state.Rpost
      console.log(pop)
    var dataB = [];
    for (var i = 0; i < pop.length; i++) {
         dataB.unshift(
           <div className="list" key={i}>
             {icon}
             <p key={i}>{pop[i].paragraph}</p>
             <img key={pop[i]} className="Pimg" src={pop[i].imgUrl} />
           </div>
         );
    }
    return (
      <div>
        <div className="profile">
          <button className="bttn" onClick={this.addimgP}>
            Add Image
          </button>
          <div className="circle"></div>
          <img className="img" src={this.state.imgadd} />
          <input
            className="UI"
            type="text"
            placeholder="Image URL"
            onChange={(event) => this.urlImg(event, "imgSrc")}
          />
          <h2 className="Pinfo">User name</h2>
          <p className="Pinfo">Bio</p>
        </div>
        <div className="posts">
          <input
            className="status"
            type="text"
            placeholder="how do you feel today ?"
            onChange={(event) => this.urlImg(event, "post")}
          />
          <input
            className="url"
            type="text"
            placeholder="img url"
            onChange={(event) => this.urlImg(event, "imgUrl")}
          />
          <input
            className="btnP"
            type="submit"
            value="Add post"
            onClick={this.addPost}
          />
        </div>
        <div className="blogsP">{dataB}</div>
      </div>
    );
  }
}

export default Form;
