import Contact from "../components/Contact"
import phoneBeirut from '../assets/images/phoneBeirut.png'
const ContactUsPage = () => {
  return (
    <section className="m-10 my-20">
      <div className="text-center m-10 lebanon-text" style={{ fontSize: '60px' }}>Contact Us</div>
      <div className="flex justify-center w-10/12 gap-6 m-auto">
        <img src={phoneBeirut} className="rounded-3xl w-1/2 m-" alt="Phone Image"></img>
        <div className="w-1/2 my-auto">
          <Contact />
        </div>
      </div>
    </section>
  )
}
export default ContactUsPage