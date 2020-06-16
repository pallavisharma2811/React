import React, { Component } from 'react';
import { Button, Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

    class CommentForm extends Component {
        constructor(props){ // didn't use constructor error & closing brace-error
            super(props);

            this.state= {
                isModalOpen: false // colon(used =) -error
            };
            this.toggleModal = this.toggleModal.bind(this);// this.toggleModal (JS variable) pointing to toggleModal method(need to bind method to JS variable,to access method in JSX)
            this.handleSubmit = this.handleSubmit.bind(this);// alert
        }

        toggleModal() { // use it inside component-error
            this.setState({
            isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(event) {// alert
            this.toggleModal();
            alert("Rating: " + this.rating.value + " Your Name: " + this.username.value
                + " Comment: " + this.comment.value);
            event.preventDefault();
        }
        
        render() {
            return(
            <React.Fragment>
            <Button outline onClick={this.toggleModal}><i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</Button>
           
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}// alert
                    >
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input type="select" name="rating" id="rating"
                            innerRef={(input) => this.rating = input}// alert
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Your Name</Label>
                            <Input type="text" id="username" name="username" placeholder="Your Name"
                            innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment">Comment</Label>
                            <Input type="textarea" rows="6" id="comment" name="comment" 
                            innerRef={(input) => this.comment = input}/>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>    
              </ModalBody>
          </Modal>
          </React.Fragment>

            );
        }
    }
    //Presentational Component

   function renderDish (dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function renderComments(comments) {
        var commentList = comments.map(comment => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(
                        new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            );
        });
  
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }
    
    
    const  DishDetail = ({dish, comments}) => {// ES6 way of passing (props)
      if (dish) {
          return (
            <div className= "container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>  
                                  
                <div className="col-12 col-md-5 m-1">
                 {renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                 {renderComments(comments)}
                 <CommentForm />
                </div>
              </div>
            </div>
          );
      }
      else {
        return (
            <div></div>
        );
      }
    }
    export default DishDetail;