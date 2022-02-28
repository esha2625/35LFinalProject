import NewLoginForm from "../components/confessions/loginPage";
import {useNavigate} from 'react-router-dom';
function CreateLoginPage() {
    const navigate = useNavigate();
    var i = 1;
    function addConfessionHandler(confessionData) {
        fetch(
            'https://bruinfessions-e55f6-default-rtdb.firebaseio.com/login.json'
            
        )
        .then(response => {return response.json();})
        .then(responseData => {
            i=1;
            for (const key of Object.entries(responseData)) {
                
                
                if(key[1].login == confessionData.login && key[1].password == confessionData.password){
                    
                    console.log("Success");
                    i = 0;
                    return;
                }
                
            }
            if(i == 1){
                console.log("failure");
            }
        });
    }
    return <section>
        <h1>Welcome Bruins!</h1>
        <NewLoginForm onAddConfession = {addConfessionHandler}/>
    </section>
}

export default CreateLoginPage;
