const Footer=()=>{
    return(
        <div className="container-fluid text-white">

        <div className="bg-dark row p-2">
            <div className="col-sm d-flex flex-column text-center">
                <p className="fw-bold">Address</p>
                <span>178 Smuts Rd Waterfalls</span>
                <span>Harare</span>
                <span>Zimbabwe</span>
            </div>
            <div className="col-sm d-flex flex-column text-center">
                <p className="fw-bold">Contact Details</p>
                <span>+263 77 270 3234</span>
                <span>admin@ria.co.zw</span>
                <span>Facebook</span>
            </div>
            <div className="col-sm rounded">
            <iframe className="rounded" src="https://rhapsodyinternationalacademy.substack.com/embed"  frameBorder="0" ></iframe>
            </div>
        </div>
        </div>

    )
}

export default Footer