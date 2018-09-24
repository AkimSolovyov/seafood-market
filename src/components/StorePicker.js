import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
      super();
      this.goToStore = this.goToStore.bind(this);
    }
    myInput = React.createRef();

    static propTypes = {
      history: PropTypes.object
    }

    goToStore = event =>  {
      event.preventDefault();
      const storeName = this.myInput.value.value;

      this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    ref={this.myInput} 
                    type="text" 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                /> 
                <button type="submit">Visit Store &rarr;</button>
            </form>
         )
    }
}

export default StorePicker;