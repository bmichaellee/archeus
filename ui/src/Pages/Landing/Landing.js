import { ListenNow, Logo, SocialMediaLinks } from 'Components';
import './Landing.scss';

export const Landing = () => (
  <div id="Landing">
    <Logo />
    <ListenNow />
    <div>
      Archeus is in need of a killer rhythm section to play
      live performances in Virginia Beach and the Seven Cities, and
      is currently looking for a <strong>drummer</strong> and
      a <strong>bass player</strong>! If you're down, hit us up
      on any of the social media platforms below.
    </div>
    <SocialMediaLinks />
  </div>
)
