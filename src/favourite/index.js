import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Button} from 'react-bootstrap';

const Favour = props => (
    <Card>
    <Card.Img variant="top" src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/810/f/weather.jpg" />
    <Card.Body>
    <Card.Title>{props.favourites.city}</Card.Title>
    <Card.Text>{props.favourites.weather}</Card.Text>
    <Card.Text style={{display:'none'}}>{props.favourites._id}</Card.Text>
    <Card.Text>{props.favourites.updatedAt}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">{props.favourites.tempreture}</small>
    </Card.Footer>
    <Button onClick={() => {props.deleteFavourite(props.favourites._id) }}>Delete this Log</Button>
</Card>
  )

class Favourite extends Component {
    componentWillMount(){
        axios.post('http://localhost:5000/weatherdata/favourite/', {
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

    render() {
        const {favourites } = this.props;
        return ( 
            <Fragment>
            <CardDeck>
                {this.favourList()}
            </CardDeck>
            <Button style={{display:'block', marginTop:'20px', marginLeft:'auto', marginRight:'auto'}} onClick={this.props.updateWeather.bind(this,favourites)}>Today's weather</Button>
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
            axios.delete('http://localhost:5000/weatherdata/'+id)
            .then(res => console.log(res.data));
            const action={
                type: 'CHANGE_FAVOURITE_LIST_AFTER_DELETE',
                data: id
              }
              dispatch(action);
        },

        updateWeather(favourites){
            window.event.preventDefault();
            axios.post('http://localhost:5000/weatherdata/updates/', {
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