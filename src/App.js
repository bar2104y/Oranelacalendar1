import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Pobaltiiskoy from './panels/PoBaltiiskoy';
import Uliankaivorontsov from './panels/Uliankaivorontsov';
import Avtovskieistorii from './panels/Avtovskieistorii';
import Alexandrino from './panels/Alexandrino';
import Fourusatbi from './panels/Fourusatbi';
import Posledamoraneli from './panels/Posledamoraneli';
import Unknownmetro from './panels/Unknownmetro';
import Avangard from './panels/Avangard';




class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	publish = (e) =>{
		connect.send("VKWebAppShowWallPostBox", {"message": "Скоро пройдет экскурсия, организованная @oranela (музеем Оранэлы)\n Подпробности можно узнать в прикрепленном приложении\n\n#оранэла", "attachments": "https://vk.com/app7082633"});
	};

	joinToGroup = (e) =>{
		connect.send("VKWebAppJoinGroup", {"group_id": 183953903});
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} publish={this.publish} joinToGroup={this.joinToGroup} />
				<Pobaltiiskoy id="pobaltiiskoy" go={this.go} /> 
				<Uliankaivorontsov id="uliankaivorontsov" go={this.go} />
				<Avtovskieistorii id="avtovskieistorii" go={this.go} />
				<Alexandrino id="alexandrino" go={this.go} />
				<Fourusatbi id="fourusatbi" go={this.go} />
				<Posledamoraneli id="posledamoraneli" go={this.go} /> 
				<Unknownmetro id="unknownmetro" go={this.go} />
				<Avangard id="avangard" go={this.go} />
			</View>
		);
	}
}

export default App;
