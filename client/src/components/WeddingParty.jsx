import maidOfHonor from '../assets/allison.png'
import bridesmaid1 from '../assets/bethany.png'
import bridesmaid2 from '../assets/hannah.png'
import bestMan from '../assets/mark.png'
import groomsman1 from '../assets/thomas.png'
import groomsman2 from '../assets/eric.png'
import ringBearer from '../assets/judah.png'
import flowerGirl from '../assets/anna.png'
import headUsher from '../assets/david.png'

function WeddingParty() {
  return (
    <div className="content">
      <h1 id="wedding-party">Wedding Party</h1>
      <div className='party_container' id="last">
      <div className="person_container">
        <img src={maidOfHonor} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Maid of Honor</p>
        <p className="person">Allison Johnson <br/><span className="italic">Sister of the Bride</span></p>
      </div>
      <div className="person_container">
      <img src={bridesmaid1} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Bridesmaid</p>
        <p className="person">Bethany Johnson <br/><span className="italic">Sister of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={bridesmaid2} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Bridesmaid</p>
        <p className="person">Hannah Smith <br/><span className="italic">Friend of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={bestMan} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Best Man</p>
        <p className="person">Mark Williams <br/><span className="italic">Brother of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={groomsman1} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Groomsman</p>
        <p className="person">Thomas Clark <br/><span className="italic">Friend of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={groomsman2} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Groomsman</p>
        <p className="person">Eric Smith <br/><span className="italic">Friend of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={ringBearer} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Ring Bearer</p>
        <p className="person">Judah Johnson <br/><span className="italic">Nephew of the Bride</span></p>
      </div>
      <div className="person_container">
        <img src={flowerGirl} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Flower Girl</p>
        <p className="person">Anna Williams <br/><span className="italic">Niece of the Groom</span></p>
      </div>
      <div className="person_container">
        <img src={headUsher} alt='Allison Johnson portrait' className='party_photo'/>
        <p className="role">Head Usher</p>
        <p className="person">David Jones <br/><span className="italic">Cousin of the Groom</span></p>
      </div>
      </div>
      <a href='/#venu' className='next'>Next</a>
  
    </div>
  )
}

export default WeddingParty