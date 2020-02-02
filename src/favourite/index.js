import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Button} from 'react-bootstrap';

const Favour = props => (
    <Card>
    <Card.Img variant="top" src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/810/f/weather.jpg" />
    <Card.Body>
    <Card.Title>{props.favourites.city}</Card.Title>
    <Card.Text>{props.favourites.weather}</Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">{props.favourites.tempreture}</small>
    </Card.Footer>
    <Button>Delete this Log</Button>
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
          return <Favour favourites={currentfavourites} key={currentfavourites._id}/>;
        })
      }

    render() {
        const { cityName, tempreture, weather, favourites } = this.props;
        return ( 
            <Fragment>
            <CardDeck>
                {this.favourList()}
            </CardDeck>
            <Button>Today's weather</Button>
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
        }
    }
  }

  //用来修改store中的state的

export default connect(mapState, mapDispatch)(Favourite);