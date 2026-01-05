import Header from "./header";
import Content from "./class/content";
function Headline(props){
    return(
        <div>
            <Header/>
           
            <h2>{props.title}</h2>
<Content content={props.content}/>
        </div>
    );
}
export default Headline;