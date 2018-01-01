import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreator} from 'redux';

class BookList extends Component {
    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (

                    <li key={book.title}
                    onClick={()=>this.props.selectBook(book)}
                     className="list-group-item">{book.title}</li>
                );
            });
    }

render() {
    return (
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
    )
}
}

//If this argument is specified, the new component will subscribe to Redux store updates.. means that any time the store is updated, mapStateToProps will be called
/* https:github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options */
function mapStateToProps(state) {
    return {books: state.books};
}
/* Anything return from this function wiil end up as props on the BookList container */
function  mapDispatchToProps  (dispatch) {
    /* whenever selectBook is called , the result should be passed to all of our reducers */
    return bindActionCreator({selectBook:selectBook},dispatch)
}
/* Promote BookList from a component to a conatiner it needs to know
about this new dispatch method,selectBook..make it available as a prop */
export default connect(mapStateToProps,mapDispatchToProps)(BookList);