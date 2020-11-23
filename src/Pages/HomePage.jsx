import React , {Component} from 'react';
import "./style/Homepage.css";
import Card from "./Card"
import axios from 'axios';
import AOS from "aos"

class HomePage extends Component {
    
    state = {
        data : []
    }

    componentDidMount(){
        AOS.init({
            duration: 10
        });
        axios.get(`https://coronavirus-19-api.herokuapp.com/Countries/Kuwait`).then(res => {
            this.setState({data : res.data})
        })
    }

    
    
    render(){
        return ( 
            <>
            <div className="wrapped">
                <div className="homepage">
                    <div className="header">
                    <p>عدد حالات كورونا في الكويت</p>
                    </div>  
                    <div className="cards">
                        <Card statusname="الحالات الإجمالية" number={this.state.data.cases}/>
                        <Card statusname="حالات الوفاة الإجمالية" number={this.state.data.deaths}/>
                        <Card statusname="حالات تعافي جديدة" number={this.state.data.recovered}/>
                        <Card statusname="الحالات التي تتلقى العلاج" number={this.state.data.active}/>
                        <Card statusname="إجمالي الحالات في العناية المركزة" number={this.state.data.critical}/>
                        <Card statusname="مجموع المسحات" number={this.state.data.totalTests}/>
                    </div>
                    <p className="para">” اللهم ارفع عنا البلاء والوباء برحمتك ولطفك، اللهم ارفع عنا البلاء والوباء والزلازل والمحن.”</p>
                </div>
            </div>
            <footer>
            <a target="_blank" href="https://www.instagram.com/al86an.q8/" rel="noopener noreferrer">al86an.q8@</a>
            </footer>
            </>
        );
    }
}
 
export default HomePage;