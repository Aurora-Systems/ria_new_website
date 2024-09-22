import ReactImageGallery from "react-image-gallery"
import gallery_items from "./components/images.json"
import SubstackFeed from "./components/blog"
import emailjs from "@emailjs/browser"
import { FormEvent, useRef } from "react"

const Site = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form:any = useRef();

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
                <h1><i className="bi bi-book"></i></h1>

                    <h4>Academic Classes</h4>
                    <p>Comprehensive  curriculum with a strong focus on STEM. Expert instruction in National laguages, mathematics, social studies and eligious education</p>
                </div>
                <div className="col-sm rounded border p-2">
                <h1 ><i className="bi bi-plus-circle"></i></h1>

                    <h4>Extra Curricula Activities</h4>
                    <p>A rich selection of clubs and programs such as Drama,Music,Debate, Chess and Art. STEM clubs to promote creativity,innovation and problem solving.</p>
                </div>
                <div className="col-sm rounded border p-2">
                    <h1 ><i className="bi bi-dribbble"></i></h1>
                    <h4>Sports</h4>
                    <p>
                        A variety of physical activities with emphasis on teamwork,discipline and pysical fitness. Sports on offer include athletics, soccer, volleyball and Swimming
                    </p>
                </div>
              
                  
            </div>
            <div>

            </div>
            </div>
            <div className="mt-5 mb-5" id="blog">
                <div className="text-center">
                    <h1 className="display-1">Blog</h1>
                </div>
                <div>
                    <SubstackFeed/>
                </div>
            </div>
            <div>
                <div  className="text-center">
                <h1 className="display-2">Contact Us</h1>

                </div>
                <div className="row">
                    <div className="col-sm">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.0989599208283!2d31.048248774002072!3d-17.880825683092958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a3ec6971ffe5%3A0xd463af09602ebe9d!2sRhapsody%20International%20Academy!5e0!3m2!1sen!2szw!4v1727018650394!5m2!1sen!2szw" className="w-100 h-100" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-sm">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-2">
                                <span>Name</span>
                                <input type="text" className="form-control" name="name" required/>
                            </div>
                            <div className="mb-2">
                                <span>Email</span>
                                <input type="email" className="form-control" name="email" required/>
                            </div>
                            <div className="mb-2">
                                <span>Contact Number</span>
                                <input type="tel" className="form-control" name="contact_number" required/>
                            </div>
                            <div className="mb-2">
                                <span>Your Message</span>
                                <textarea name="message" className="form-control"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-outline-dark">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            


        </div>
    )
}

export default Site