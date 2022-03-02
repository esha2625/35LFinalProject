import classes from './ConfessionList.module.css'
import ConfessionItem from './ConfessionItem'
function ConfessionList(props) {
return <ul className={classes.list}>
    {props.confessions.map((confession) => (
    <ConfessionItem 
    key={confession.id} 
    id={confession.id}
    title={confession.title}
    description={confession.description}
    likes={confession.likes}
    />
    ))}
</ul>
}

export default ConfessionList;