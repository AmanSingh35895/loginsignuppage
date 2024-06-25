import "./App.css";
import Form from "./Components/LoginSignup/Form";
import SignUpForm from "./Components/LoginSignup/Signup";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full h-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
  <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
  <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
{/* <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
  <div
    className="w-200 h-200 justify-end bg-cover rounded-full"
    style={{ backgroundImage: 'url(\'./Components/Assets/LoginSignup/Side_Image.jpg\')' }}
  />
  
</div> */}


</div>


    </div>
  );
}


export default App;
