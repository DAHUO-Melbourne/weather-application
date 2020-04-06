import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Button} from 'react-bootstrap';
import moment from 'moment';

const Favour = props => (
    <Card style = {{display:'block', maxWidth:'30%', flex: 'auto', marginLeft:'1.66%', marginRight:'1.66%', marginTop:'20px', marginBottom: '20px', boxShadow:'0 0 20px rgba(0,0,0,.1)'}}>
    <Card.Img variant="top" src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/810/f/weather.jpg" />
    <Card.Body>
    <Card.Title>{props.favourites.city}</Card.Title>
    <Card.Text>{props.favourites.weather}</Card.Text>
    <Card.Text style={{display:'none'}}>{props.favourites._id}</Card.Text>
    <Card.Text>{moment(moment(props.favourites.updatedAt).valueOf()).format('MMMM Do YYYY')}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted"><b>tempreture:</b> {props.favourites.tempreture}℃</small>
    </Card.Footer>
    <Button style={{width:'100%'}} onClick={() => {props.deleteFavourite(props.favourites._id) }}>Delete this Log</Button>
    </Card>
  )

class Favourite extends Component {
    componentDidMount(){
        axios.post('https://radiant-thicket-19584.herokuapp.com/weatherdata/favourite/', {
            username: this.props.username
        })
        .then(response => {
            this.props.onChangeFavourites(response.data);
        })
    }

    favourList() {
        return this.props.favourites.map(currentfavourites => {
          return <Favour favourites={currentfavourites} deleteFavourite={this.props.deleteFavourite.bind(this)} key={currentfavourites._id}/>;
        })
      }

    timeFormated(dateString) {
        return dateString
          .replace('-', '/')
          .replace('-', '/')
          .replace('T', '/')
          .replace('Z','');
    }

    render() {
        const {favourites } = this.props;
        return ( 
            <Fragment>
            <CardDeck style = {{margin:'auto'}}>
                {this.favourList()}
            </CardDeck>
            <Button style={{display:'block', marginTop:'20px', marginLeft:'auto', marginRight:'auto', marginBottom:'20px'}} onClick={this.props.updateWeather.bind(this,favourites)}>Today's weather</Button>
            </Fragment>
        )
    }
}

const mapState=(state)=>({
    username: state.getIn(['Login', 'username']),
    favourites: state.getIn(['Favourite', 'favourites']),
    cityName:state.getIn(['Favourite', 'cityName']),
    tempreture:state.getIn(['Favourite', 'tempreture']),
    weather:state.getIn(['Favourite', 'weather']),
  })

  //用来读取store中的state并显示出来的

  const mapDispatch=(dispatch)=>{
      return {
        onChangeFavourites(favourites){
            const action={
                type:'CHANGE_FAVOURITES_LIST',
                data:favourites
            }
            dispatch(action);
        },

        deleteFavourite(id){
            window.event.preventDefault();
            axios.delete('https://radiant-thicket-19584.herokuapp.com/weatherdata/'+id)
            .then(res => console.log(res.data));
            const action={
                type: 'CHANGE_FAVOURITE_LIST_AFTER_DELETE',
                data: id
              }
              dispatch(action);
        },

        updateWeather(favourites){
            window.event.preventDefault();
            axios.post('https://radiant-thicket-19584.herokuapp.com/weatherdata/updates/', {
                favourites: this.props.favourites                
            })
            .then(response => {
                console.log(response.data);
                const action={
                    type: 'FAVOURITE_WEATHER_UPDATES',
                    data: response.data
                }
                dispatch(action);
            })
        }
        //使用map，声明一个新数组，或者不声明，直接用老得favourite数组来map掉里面每一项的内容
        //然后用dispatch更新到store里去
        //如果可能的话，可以把数据库里的东西也更新掉
    }
  }

  //用来修改store中的state的

export default connect(mapState, mapDispatch)(Favourite);