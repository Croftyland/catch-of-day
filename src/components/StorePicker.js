import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {


    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    //
    //
    //  miss bind and use arrow function
    // }

    myInput = React.createRef();
    goToStore = (event) => {

        // 1. Stop the form from submitting

        event.preventDefault();

        // 2. Get the text from that input

        console.log(this.setState);

        // 3. Change the page to '/store/whatever-they-entered'
    }

    componentDidMount() {
        console.log("MOUNTED");
        console.log(this);
    }

    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input
                        type="text"
                        ref = {this.myInput}
                        required
                        placeholder="Store Name"
                        defaultValue={getFunName()} />
                    <button type="submit">Visit Store →</button>
                </form>
            </React.Fragment>
        );
    }
}

export default StorePicker;
