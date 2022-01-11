import { SocialMediaLink } from "Components";
import { SoundCloud, YouTube, Facebook, Twitter, Instagram, TikTok } from "Icons";

import './SocialMediaLinks.scss';

const {
  REACT_APP_FACEBOOK_URL = "https://www.facebook.com/Archeus-104185772159598/",
  REACT_APP_TWITTER_URL = "https://twitter.com/archeusband",
  REACT_APP_INSTAGRAM_URL = "https://www.instagram.com/archeusband/",
  REACT_APP_TIKTOK_URL = "https://www.tiktok.com/@archeusband",
  REACT_APP_YOUTUBE_URL = "https://www.youtube.com/channel/UC-Qff1XJwqqg-M6TGlBP-8A",
  REACT_APP_SOUNDCLOUD_URL = "https://soundcloud.com/archeusband",
} = process.env;

export const SocialMediaLinks = () => (
  <div className="SocialMediaLinks">
    <SocialMediaLink icon={ SoundCloud } to={ REACT_APP_SOUNDCLOUD_URL } />
    <SocialMediaLink icon={ YouTube } to={ REACT_APP_YOUTUBE_URL } />
    <SocialMediaLink icon={ Facebook } to={ REACT_APP_FACEBOOK_URL } />
    <SocialMediaLink icon={ Twitter } to={ REACT_APP_TWITTER_URL } />
    <SocialMediaLink icon={ Instagram } to={ REACT_APP_INSTAGRAM_URL } />
    <SocialMediaLink icon={ TikTok } to={ REACT_APP_TIKTOK_URL } />
  </div>
)
