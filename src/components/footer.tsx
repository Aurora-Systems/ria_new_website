const Footer=()=>{
    return(
        <div className="container-fluid text-white">

        <div className="bg-dark row p-2 d-flex align-items-center">
            <div className="col-sm mb-3 d-flex flex-column text-center">
                <p className="fw-bold">Address</p>
                <span>178 Smuts Rd Waterfalls</span>
                <span>Harare</span>
                <span>Zimbabwe</span>
            </div>
            <div className="col-sm mb-3 d-flex flex-column text-center ">
                <p className="fw-bold">Contact Details</p>
                <a className="text-white" href="tel:+263772703234" target="_blank"><span>+263 77 270 3234</span></a>
                <a className="text-white" href="mailto:admin@ria.co.zw" target="_blank"><span>admin@ria.co.zw</span></a>
                <a className="text-white" href="https://www.facebook.com/rhapsodyinteracademy" target="_blank"><span>Facebook</span></a>
            </div>
            <div className="col-sm mb-3 rounded text-center">
            <iframe className="rounded bg-dark" src="https://rhapsodyinternationalacademy.substack.com/embed"  ></iframe>
            </div>
        </div>
        </div>

    )
}

export default Footer