const get_variables = () => {

    const current_page_url = window.location.href.split("/")[1]//get the url of the page after the / slash

    /* 
    
    This function returns a title and active button name based on the current url
    It must return an array, 
    1st element = name of the button on the top bar
    
    */

    switch (current_page_url) {

        case "": // slash(home)
            return ["Persisted XSS"]

        default: return ["Persisted XSS"]
    }

}

export default get_variables