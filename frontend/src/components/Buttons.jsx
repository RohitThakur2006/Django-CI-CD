const Button = () => {
  const handleClick = (message) => {
     alert("Button Clicked!")
  }

  return (
    <>
        <button onClick={handleClick("Thank you for clicking!")}>
          Click Me
        </button>
    </>
  );
};

export default Button