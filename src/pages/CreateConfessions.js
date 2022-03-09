import NewConfessionForm from "../components/confessions/NewConfessionForm";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push, child, update } from 'firebase/database';

function CreateConfessionsPage() {
    const navigate = useNavigate();
    function addConfessionHandler(confessionData) {
        const db = getDatabase();
        const newPostKey = push(child(ref(db), 'confessions')).key;
        const updates = {};
        updates['/confessions/' + newPostKey] = confessionData;
        return update(ref(db), updates).then(() => {
            navigate("/", {replace:true});
        });;
    }
    return <section>
        <div className="confessions_page"> 
            <div className="page_header">
                <h1>'Fess up, Bruin!</h1>
            </div>
            <NewConfessionForm onAddConfession = {addConfessionHandler}/>
        </div>
    </section>
}

export default CreateConfessionsPage;

/* Start HTML */

/*ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
); */

// ReactDOM.render(<NameForm />, document.getElementById('login'));
