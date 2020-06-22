// main component will now obtain the state from Redux Store

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {//state from redux store

  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }

}

const mapDispatchToProps = dispatch =>({//addComment()call will return action object and passes to dispatch fun(function from store) which is supplied to the addComment:
  addComment: (dishId, rating, author, comment)=> dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});

//Container Component
class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){ // Called soon after this component gets mounted so a good time to fetch any data required for application
    this.props.fetchDishes();
  }

  render() {

    const HomePage = () => {//explicitly declare the functional component in 1st route and inline declaration in 2nd rout
      return(
          <Home 
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}// to dispatch action to store, in the dish detail component we have access to comment that user has submitted 
          />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path ="/home" component={HomePage}/>
          <Route exact path ="/menu" component={()=><Menu dishes={this.props.dishes}/>}
          //entire dishes object is being passed i.e. isloading, dishes.dishes, dishes.ErrMess all three to available in Menu
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to = "/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));// to make mapDispatchToProps available in main component