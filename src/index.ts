import { SpotterPlugin, SpotterAction, SpotterApi } from '@spotter-app/core';

export enum SpotifyActionKey {
  Previous = 'previous',
  Next = 'Next',
  Pause = 'pause',
  Play = 'play',
  Mute = 'mute',
  Unmute = 'unmute',
  TogglePlayPause = 'togglePlayPause',
}

export default class Spotify implements SpotterPlugin {
  actions = [
    {
      key: SpotifyActionKey.Previous,
      title: 'Previous',
      subtitle: 'Spotify Previous track',
      image: '',
    },
    {
      key: SpotifyActionKey.Next,
      title: 'Next',
      subtitle: 'Spotify Next track',
      image: '',
    },
    {
      key: SpotifyActionKey.Pause,
      title: 'Pause',
      subtitle: 'Spotify Pause',
      image: '',
    },
    {
      key: SpotifyActionKey.Play,
      title: 'Play',
      subtitle: 'Spotify Play',
      image: '',
    },
    {
      key: SpotifyActionKey.Mute,
      title: 'Mute',
      subtitle: 'Spotify Mute',
      image: '',
    },
    {
      key: SpotifyActionKey.Unmute,
      title: 'Unmute',
      subtitle: 'Spotify Unmute',
      image: '',
    },
    {
      key: SpotifyActionKey.TogglePlayPause,
      title: 'Toggle play/pause',
      subtitle: 'Spotify Toggle play/pause',
      image: '',
    },
  ];

  constructor(private api: SpotterApi) {}

  onSelectAction(action: SpotterAction) {
    switch (action.key) {
      case SpotifyActionKey.Previous:
        this.previous();
        break;
      case SpotifyActionKey.Next:
        this.next();
        break;
      case SpotifyActionKey.Pause:
        this.pause();
        break;
      case SpotifyActionKey.Play:
        this.play();
        break;
      case SpotifyActionKey.Mute:
        this.mute();
        break;
      case SpotifyActionKey.Unmute:
        this.unmute();
        break;
      case SpotifyActionKey.TogglePlayPause:
        this.togglePlayPause();
        break;
      default:
        throw new Error('Something went wrong')
    }
  }

  private previous() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" \n set player position to 0\n previous track\n end tell'")
  }

  private next() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to next track'")
  }

  private pause() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to pause'")
  }

  private play() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to play'")
  }

  private mute() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to set sound volume to 0'")
  }

  private unmute() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to set sound volume to 100'")
  }

  private togglePlayPause() {
    this.api.shellCommand("osascript -e 'tell application \"Spotify\" to playpause'")
  }
}
