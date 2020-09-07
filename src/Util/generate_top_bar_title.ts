const get_title = () => {

    const current_page_url = window.location.href.split("/")[1]

    switch(current_page_url){
        
        case "": // slash(home)
        return "Persisted Cross Site Scripting explained"

        default: return "Persisted Cross Site Scripting explained"
    }

}

export default get_title