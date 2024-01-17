function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <>
        <div   className="warning">
<button>Warning!</button>
        </div>
        </>
    )
}

export default WarningBanner;