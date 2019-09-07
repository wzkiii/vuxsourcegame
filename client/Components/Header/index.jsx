import React from 'react';
import GameStore from '../../Stores/GameStore';

class Header extends React.Component {

	constructor (props) {
		super(props);
		this._onStoreChange = this._onStoreChange.bind(this);
		this.state = {
			timer: {
				minutes: 0,
				seconds: 0
			}
		}
	}

	componentDidMount() {
		GameStore.addChangeListener(this._onStoreChange);
	}

	_onStoreChange () {
		this.setState({
			timer: GameStore.timer
		});
	}

	render() {

		let minutes = parseInt(this.state.timer.minutes);

		if(minutes < 10) {
			minutes = "0" + minutes;
		}

		let seconds = parseInt(this.state.timer.seconds);

		if(seconds < 10) {
			seconds = "0" + seconds;
		}

		return (<header>
					<div className="stage">
						<div className="hteam">HOME</div>
						<div className="score">0-0</div>
						<div className="ateam">AWAY</div>
					</div>
					<div className="time">
						{minutes}:{seconds}
					</div>
					
				</header>);
	}


}

export default Header;