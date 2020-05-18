// To be finished: HTML & CSS...

const drumpadItems = [
{
  className: 'drum-pad',
  value: 'Q',
  audio: {
    name: 'Brk snr',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },

  keyCode: 81 },
{
  className: 'drum-pad',
  value: 'W',
  audio: {
    name: 'Side stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 ' },

  keyCode: 87 },
{
  className: 'drum-pad',
  value: 'E',
  audio: {
    name: 'Punchy kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

  keyCode: 69 },
{
  className: 'drum-pad',
  value: 'A',
  audio: {
    name: 'Bld H1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

  keyCode: 65 },
{
  className: 'drum-pad',
  value: 'S',
  audio: {
    name: 'Dry Ohh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

  keyCode: 83 },
{
  className: 'drum-pad',
  value: 'D',
  audio: {
    name: 'Give us a light',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

  keyCode: 68 },
{
  className: 'drum-pad',
  value: 'Z',
  audio: {
    name: 'Chord 3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

  keyCode: 90 },
{
  className: 'drum-pad',
  value: 'X',
  audio: {
    name: 'Chord 2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

  keyCode: 88 },
{
  className: 'drum-pad',
  value: 'C',
  audio: {
    name: 'Chord 1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

  keyCode: 67 }];



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '' };

    this.handleAudio = this.handleAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleAudio(e) {
    let value,
    id;
    if (e.keyCode) {
      drumpadItems.forEach(item => {
        if (item.keyCode == e.keyCode) {
          value = item.value;
          id = item.audio.name;
        }
      });
    } else
    {
      value = e.target.value;
      id = e.target.id;
    }
    let audioPlayed = document.getElementById(value);
    audioPlayed.play();
    this.setState({
      display: id });

  }

  handleKeyPress(e) {
    drumpadItems.forEach(item => {
      if (item.keyCode == e.keyCode) {
        this.handleAudio(e);
      }
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement(Display, { display: this.state.display }),
      React.createElement(DrumPad, { audio: this.handleAudio })));


  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "display" },
      this.props.display));


  }}


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let drumPads = drumpadItems.map(item => {
      return React.createElement("button", {
        className: item.className,
        id: item.audio.name,
        value: item.value,
        onClick: this.props.audio }, item.value,
      React.createElement("audio", {
        src: item.audio.url,
        class: "clip",
        id: item.value }));


    });
    return (
      React.createElement("div", null,
      drumPads));


  }}


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('root'));