import ReactHtmlParser from 'react-html-parser'; 


function Answer(props){
    const {answer} = props;
    return(
        <div>
            {ReactHtmlParser(answer)}
        </div>
    )
}

export default Answer