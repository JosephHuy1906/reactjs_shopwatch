function Error() {
    return ( 
        <div className='not'>
            
        <div className="number">404</div>
            <div className="text">
                <span>Ooops...</span>
                <br />
                page not found
            </div><br/><br/>
            <a className="me" href="/" target="_blank">Home</a>
        </div>
     );
}

export default Error;