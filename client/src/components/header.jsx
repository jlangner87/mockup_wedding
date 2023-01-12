import { HashLink } from 'react-router-hash-link'
import underline from '../assets/underline.png'

function Header() {
  return <div className="Header">
    <img src={underline} alt="" className='overline'/>
    <h1 id="top">Susannah & Jeremy </h1>
    <h2>⸺ August 3, 2024 ⸺</h2>
    <img src={underline} alt="" className='underline'/><br/>
    <a href='/#our-story' className='enter'>Enter</a>

  </div>
}

export default Header
