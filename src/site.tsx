import ReactImageGallery from "react-image-gallery"
import gallery_items from "./components/images.json"
const Site = () => {
    return (
        <div className="container">
            <div className="min-vh-100 d-flex flex-row align-items-center" id="home">
                <div className="row ">
                    <div className="col-sm d-flex align-items-center">
                        <div>
                        <h1 className="display-1">Rhapsody International Academy</h1>
                        <p>At Rhapsody International Academy, we are dedicated to providing a holistic, Christian-based education to nurture the potential of each child. Located in the serene environment of Waterfalls, away from the distractions of the city, our school offers a calm and conducive learning atmosphere.</p>
                        <button className="btn btn-outline-dark">Get In Touch</button>
                        </div>
                    </div>
                    <div className="col-sm ">
                        <img src="https://ngratesc.sirv.com/ria/logo.webp" className="rounded img-fluid " alt="Child reading book in a classroom" />
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5 d-flex flex-row align-items-center" id="about">
                <div className="row ">
                    <div className="col-sm order-md-2">
                        <h1 className="display-2">About Us</h1>
                        <p>Founded in 2019, RIA was established with a clear vision: to educate the African child and equip them with the skills needed to excel in the ever-changing world. Inspired by the timeless saying, "Don't give a man a fish, but teach him how to fish," we are committed to empowering our students with knowledge, critical thinking, and problem-solving skills that will last a lifetime.
                        </p><p>
                            Our philosophy is rooted in our pursuit of excellence, encapsulated in our motto, "Quest for Excellence." From academics to extracurricular activities, we strive for the highest standards. We provide top-notch facilities that have been fully approved by the Ministry of Education, ensuring that your child receives the best possible learning experience.</p>
                    </div>
                    <div className="col-sm d-flex align-items-center">
                        <img src="https://ngratesc.sirv.com/ria/P1655497.jpg" className="rounded img-fluid " alt="Child reading book in a classroom" />
                    </div>

                </div>
            </div>
            <div className="mt-5 mb-5 row">
                 <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/ria/slide_one.44d2a9ae.webp" className="img-fluid" alt="poster"/>
                 </div>
                 <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/ria/slide_two.c6261052.webp" className="img-fluid" alt="poster"/>
                 </div>
                 <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/ria/slide_three.a4563432.webp" className="img-fluid" alt="poster"/>
                 </div>
            </div>
            <div id="gallery">
                <div className="text-center">
                    <h1 className="display-2">Gallery</h1>
                </div>
                <ReactImageGallery items={gallery_items}/>
            </div>
            <div className="mt-5 mb-5">
                <div>
                    <h1 className="display-2 text-center">Why Choose Us</h1>
                </div>
                <div className="row gap-3">
                    <div className="col-sm text-center border rounded p-2">
                        <h1><i className="bi bi-book"></i></h1>
                        <h5>Exceptional Education</h5>
                        <p>Our teacher-to-pupil ratio of 1:15 ensures that each student receives the individual attention they need to thrive.</p>
                    </div>
                    <div className="col-sm text-center border rounded p-2">
                        <h1><i className="bi bi-bricks"></i></h1>
                        <h5>State-of-the-Art Facilities</h5>
                        <p>Our modern classrooms, science labs, and recreational spaces are designed to enhance learning and development.</p>
                    </div>
                    <div className="col-sm text-center border rounded p-2">
                        <h1><i className="bi bi-box2-heart"></i></h1>
                        <h5>Faith-Based Values</h5>
                        <p>As a Christian school, we integrate biblical principles into our curriculum, fostering character development alongside academic excellence.</p>
                    </div>
                </div>
                <div className="mt-3 mb-3 text-center">
                    <p>At RIA, we take pride in our Science, Technology, Engineering, and Mathematics (STEM) curriculum, designed to foster ingenuity and creativity in shaping tomorrow's leaders. </p>

                </div>
                <div>
                    <img src="https://ngratesc.sirv.com/ria/P1655189.jpg" className="img-fluid" alt="RIA Teachers taking a group photo" />
                </div>
                <div className="text-center mt-3 mb-3">
                    <button className="btn btn-outline-dark">Apply</button>
                </div>

            </div>
            <div>

            <div className="">
                <h1 className="display-2 text-center">What We Offer</h1>
                
            </div>
            <div className="row gap-3 d-flex justify-content-center text-center">
                <div className="col-sm rounded border p-2">
                    <h4>Academic Classes</h4>
                    <p>Comprehensive  curriculum with a strong focus on STEM. Expert instruction in National laguages, mathematics, social studies and eligious education</p>
                </div>
                <div className="col-sm rounded border p-2">
                    <h4>Extra Curricula Activities</h4>
                    <p>A rich selection of clubs and programs such as Drama,Music,Debate, Chess and Art. STEM clubs to promote creativity,innovation and problem solving.</p>
                </div>
                <div className="col-sm rounded border p-2">
                    <h4>Sports</h4>
                    <p>
                        A variety of physical activities with emphasis on teamwork,discipline and pysical fitness. Sports on offer include athletics, soccer, volleyball and Swimming
                    </p>
                </div>
              
                  
            </div>
            <div>

            </div>
            </div>


        </div>
    )
}

export default Site