import React, { Component } from 'react';
<<<<<<< HEAD
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
=======
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
>>>>>>> 3a16222bf00faa4f5782f656919049dd4bc28990

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
<<<<<<< HEAD
      }
=======
        }
>>>>>>> 3a16222bf00faa4f5782f656919049dd4bc28990
    }

    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
<<<<<<< HEAD
    }

    
  render() {
      const menu = this.props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <Card key={dish.id}
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
      });

      return(
        <div className="container">
          <div className="row">
            {menu}
          </div>
          <div className="row">
          <DishDetail dish={this.state.selectedDish}/>
          </div>
          
        </div>
      );
=======
  }

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
        </div>
    );
>>>>>>> 3a16222bf00faa4f5782f656919049dd4bc28990
  }
}
export default Menu;