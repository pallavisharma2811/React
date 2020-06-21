import React, { Component } from 'react';
import { Row, Button, Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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

        handleSubmit(values) {// using props supplied add comments to the list
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }
        
        render() {
            return(
            <React.Fragment>
            <Button outline onClick={this.toggleModal}><i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</Button>
           
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <div className="col-12"// to keep margin aligned 
                >
                    <LocalForm onSubmit= {(values) => this.handleSubmit(values)}// alert
                    >
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" id="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select> 
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />      
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" rows="6" id="comment" name="comment" 
                            className="form-control"/>
                        </Row>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm> 
                </div>   
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

    function RenderComments({comments, addComment, dishId}) {//we need to pass addComment, dishId to CommentForm
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
                <CommentForm dishId= {dishId} addComment= {addComment}/>
            </div>
        );
    }
    
    
    const  DishDetail = (props) => {// ES6 way of passing (props)

        if (props.isLoading){
            return(
                <div className = "container">
                    <div className = "row">
                        <Loading />
                    </div>
                </div>
            );
        }

        else if (props.errMess){
            return(
                <div className = "container">
                    <div className = "row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }

        else if (props.dish != null) {
          return (
            <div className= "container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>  
                                  
                <div className="col-12 col-md-5 m-1">
                    {renderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments= {props.comments}
                    addComment ={props.addComment}// came in as props to DishDetail
                    dishId ={props.dish.id} />
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