import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import Item from './Item';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '500px'
};
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


class App extends React.Component{
  constructor(){
      super();
      this.input=React.createRef();
      this.state={
        data:[
        {name: 'Milk'},
        {name: 'Bread'},
        {name: 'Butter'}
        ]
      }
      this.add =this.add.bind(this);
    }
    add(){
      var items=this.state.data;
      items.push({name: this.input.current.value});
      this.setState({
        data: items
      });
      this.input.current.value="";
      this.input.current.focus();
    }

  render(){


   /* var data=[
        {name: 'Milk'},
        {name: 'Bread'},
        {name: 'Butter'}
    ]; */

    return(
      <div style={styles}>
      <ul>
      {this.state.data.map( v =>
                  <Item name={v.name} />
           )
      }

      </ul>
      <input type="text" ref={this.input}/>
      <button onClick={this.add}>Button</button>
      <SwipeableList>
        <SwipeableListItem
         swipeLeft={{
                      content: <div>Reaveled content during swipe</div>,
                      action: ()=> console.info('swipe action triggered')
                    }}
         swipeRight={{
                       content: <div>Revealed content during swipe</div>,
                       action: ()=> console.info('swipe action triggered')
         }}
         onSwipeProgress={progress =>console.info('swipe progess: ${progess}%')}
        >
          <div>can you drive</div>

        </SwipeableListItem>
      </SwipeableList>
      
		<Carousel>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend">Singare</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
				<p className="legend">Las Vegas</p>
			</div>
		</Carousel>
	</div>
      

      )
  }
}

export default App;
