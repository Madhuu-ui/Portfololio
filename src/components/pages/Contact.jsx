import emailIcon from '../../assets/contact/emailIcon.png'
import linkdIn from '../../assets/contact/linkedinIcon.png'
import github from '../../assets/contact/githubIcon.png'

export default function Contact(){
    return(
        <>
        <div style={{ padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
        <h1>CONTACT</h1>
        <h2>Feel free to reach out</h2>
        <div style={{  height: 70, margin: '12px 0', left: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap:'20px' }}>
        <img src={emailIcon} alt="email icon"  />
        <a href='mailto:madhumgowda323@gmail.com' style={{ color: 'white', textDecoration: 'none' }} >madhumgowda323@gmail.com</a>
         </div>
        <div style={{  height: 70, margin: '12px 0', left: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap:'20px' }}>
        <img src={linkdIn}/>
         <a href='https://www.linkedin.com/in/madhu-m-106528186/' style={{ color: 'white', textDecoration: 'none' }} target="_blank">My linkedin</a>
        </div>
         <div style={{  height: 70, margin: '12px 0', left: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap:'20px' }}>
        <img src={github}/>
                <a href='https://github.com/Madhuu-ui' style={{ color: 'white', textDecoration: 'none' }} target="_blank">My git account</a>
        </div>
        </div>
        </>
    )
}