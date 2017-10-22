// let h1=React.createElement("h1",null,"Hazrat Abu Obaida Bin Jarrah");
// ReactDOM.render(h1,document.getElementById("root"));

class customtag extends React.Component{
    
    render() {
        return  React.createElement("h1",null,this.props.linkText);
        
    }
}

let custom=React.createElement(customtag,{linkText:"Hazrat Abu Obaida Bin Jarrah"});
ReactDOM.render(React.createElement("div",null,custom),document.getElementById("root"))

