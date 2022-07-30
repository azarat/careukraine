import LogoSVG from './svg/Logo.svg';
import CartSVG from './svg/Cart.svg';
import ChevronLeft2SVG from './svg/ChevronLeft2.svg'

interface HeaderProps {
  goBack?: boolean
  hideCart?: boolean
  title?: string
}

const Header = ({ goBack, hideCart, title }: HeaderProps) => {
  return (
    <header className={`header${
      ((!!goBack && goBack == true) && (!!hideCart && hideCart == true) && !title) ? ' header--checkout' : ''
    }`}>
      {(!!goBack && goBack == true) &&
        <div className='header__goback'>
          <ChevronLeft2SVG />
        </div>
      }

      {!!title &&
        <div className='header__title'>{title}</div>
      }

      <div className='header__logo'>
        <LogoSVG />
      </div>

      {hideCart !== true &&
        <div className='header__cart'>
          <CartSVG />
        </div>
      }
    </header>
  )
}

export default Header
