import { CounterComponent } from './components/CounterComponent';
import './App.css';

function App() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-4">
      <a href="https://circlebox.com"><img src='Circlebox.png' class='img-fluid float-start' alt='Circlebox'></img></a></div>
      <div class="col-8 h1 text-center"><span class="align-middle">Click Counter Simulator</span></div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6">
          <h3>This application was written in React and simulates a click counter that can count in different base number systems.</h3>
          Selecting Base 10 will count "normally". Starting from the right, each digit will count up to 9 and, as it rolls back to zero - the wheel to its right will increase by 1.
          <p>&nbsp;</p>
          <div class='text-center'>
          <CounterComponent></CounterComponent>
          </div>
        </div>
        <div class="col-6">
          <img src='Counter.png' class='img-fluid' alt='Counter'></img>
        </div>
        
      </div>
      <hr />
      <div class='text-center'>
      <p>Base 10 (or <i>decimal</i>) means there are 10 unique digits - 0 through 9.</p>
      <p>Base 5 means there are 5 unique digits (0 - 4) so when a wheel gets to 4 (highest digit in Base 5), it will roll back to 0 and the next digit to the left will increase.</p>
      <p>Base 2 is also called <i>binary</i>. There are only 2 digits - 0 and 1.</p>
      <p>Base 16 is also called <i>hexadecimal (or "hex")</i>. We need 16 digits so, we use 0 - 9 and then A, B, C, D, E, and F to make 16 unique digits.</p>
      </div>
      <hr />
      <h2>Decimal-Binary-Hex cheatsheet</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Decimal</th>
            <th scope="col">Binary</th>
            <th scope="col">Hex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0000</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0001</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0010</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>0011</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>0100</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>0101</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>0110</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>0111</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1000</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>1001</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1010</td>
            <td>A</td>
          </tr>
          <tr>
            <td>11</td>
            <td>1011</td>
            <td>B</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1100</td>
            <td>C</td>
          </tr>
          <tr>
            <td>13</td>
            <td>1101</td>
            <td>D</td>
          </tr>
          <tr>
            <td>14</td>
            <td>1110</td>
            <td>E</td>
          </tr>
          <tr>
            <td>15</td>
            <td>1111</td>
            <td>F</td>
          </tr>

        </tbody>
      </table>
      <p class='text-center'>&copy; 2022 <a href="https://circlebox.com">Circlebox LLC</a></p>
      <p>Code is available at <a href="https://github.com/jtrotman10/react-counter">https://github.com/jtrotman10/react-counter</a></p>
    </div>
  );
}

export default App;
