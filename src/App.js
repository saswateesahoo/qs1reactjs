import React, { useState } from 'react'; 
function App() {
  const [isRed, setIsRed] = useState(false); // usestate - here isred is state var.nd setisred -update the state variable nd (false)here false means initial valu ,nd initial value for the state variable , If isRed was false (button was blue) nd it becomes true thn the button background color turns red.
  const handleClick = () => { // here , when the onclick button(line-11) clicked ,the onclick event call the handelclick button
    setIsRed(!isRed); //If isRed is false, !isRed becomes true, nd vice versa
  };
  return (
    <div>
      <button
        style={{ backgroundColor: isRed ? 'red' : 'blue' }}  // here the background color of the button depend on the value of the isRed (state variable). If isRed is true, the background color is 'red'; otherwise, it's 'blue'.
        onClick={handleClick} // here handelclick button should be called when the button is clicked .
      >
        {isRed ? 'Red' : 'Blue'}                    
      </button> 
    </div>
  );
}
export default App;
