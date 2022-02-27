import NewConfessionForm from "../components/confessions/loginPage";
import {useNavigate} from 'react-router-dom';
function CreateConfessionsPage() {
    const navigate = useNavigate();
    function addConfessionHandler(confessionData) {
        fetch(
            'https://bruinfessions-e55f6-default-rtdb.firebaseio.com/confessions.json',
            {
                method: 'POST',
                body: JSON.stringify(confessionData),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            navigate("/", {replace:true});
        });
    }
    return <section>
        <h1>Welcome Bruins!</h1>
        <NewConfessionForm onAddConfession = {addConfessionHandler}/>
    </section>
}

export default CreateConfessionsPage;
