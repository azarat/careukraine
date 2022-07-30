import LogoSVG from './svg/Logo.svg';
import CartSVG from './svg/Cart.svg';
import ChevronLeft2SVG from './svg/ChevronLeft2.svg'

interface HeaderProps {
  goBack?: boolean
}

const Header = ({ goBack }: HeaderProps) => {
  return (
    <header className="header">
      {(!!goBack && goBack == true) &&
        <div className='header__goback'>
          <ChevronLeft2SVG />
        </div>
      }
      <LogoSVG />
      <div className='header__cart'>
        <CartSVG />
      </div>
    </header>
  )
}

export default Header
