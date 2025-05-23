import { useState } from "react";
import Form from "./form/Form"
import View from "./table/View"

function App() {

  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })
   
  const changeInput = (e) => {
    const [name, value] = e.target;
    [name]=  value
  }

  const handleSubmit = () => {
    alert("Form Submitted")
    console.log(formInput);
  }

  return (
    <>
      <Form
        handleSubmitFun={handleSubmit}
        formInput={formInput}
        changeInputFun={changeInput}
      />
      <View />
    </>
  )

}

export default App
