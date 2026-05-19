const NameList = () => {
  const names = ["Raj", "Rahul", "Rohit", "Amit"] 
  return (
    <>
        <h2>Student Lists</h2>
        <ul>
            {names.map((name, index) => 
                <li key={index}>{name}</li>
            )}
        </ul>
    </>
  )
}

export default NameList