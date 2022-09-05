import {Link} from 'react-router-dom'
import Image from '../images/main__header.png'
const MainHeader = () => {
   return (
      <header className="main__header">
         <div className="container main__header-container">
            <div className="main__header-left">
               <h4>WorkOut</h4>
               <h1>Immerse yourself in the world of fitness and discover new possibilities </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab necessitatibus ipsam aliquam inventore possimus laboriosam a eum. Ex explicabo accusamus veniam voluptatem dicta veritatis in laudantium quibusdam libero. Non.</p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
            </div>
            <div className="main__header-right">
               <div className="main__header-circle"></div>
               <div className="main__header-image">
                  <img src={Image} alt="Main Header Image" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default MainHeader