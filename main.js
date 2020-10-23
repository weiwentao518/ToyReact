import {
  createElement,
  render,
  Component
} from './toy-react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1> my component </h1>
        {this.children}
      </div>
    )
  }
}
render(
  <MyComponent className="a" id="b">
    <div> abc </div>
  </MyComponent>,
  document.body
);