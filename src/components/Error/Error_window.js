function ErrorWindow({ errorMessage }){
    return(
        <div id="errorWindow" className={errorMessage ? "visible" : "hidden"}>
            {errorMessage}
        </div>
    );
}

export default ErrorWindow;