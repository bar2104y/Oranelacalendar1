import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Avtovskieistorii = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Автовские истории
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Автово, далекая в прошлом загородная местность, была когда-то частью знаменитой Петергофской дороги, а затем остановкой Оранэлы. Легенды Автово. Красный кабачок. Фронтовая жизнь района и Возрождение. Старейшее городское кладбище – Красненькое (не заходим). ДОТ и танк-победитель, памятник трамваю и точка «Т». Дача Сиверса (Кировский городок), которая за 300 лет успела побывать дачей нескольких вельмож, психиатрической больницей и жилым городком. Осмотр уникального макета Дачи Сиверса – последнего творения великого Растрелли 
            </Div>
            <Div>Дата: 13.08.2019 (ВТ)</Div>
            <Div>Вид экскурсии: пешеходная</Div>
            <Div>Продолжительность: 2 часа </Div>
            <Div>Сбор: в 12 часов м. «Автово», подземный вестибюль у мозаики «Родина-мать»</Div>
            <Div>Кондуктор: Виктория Грачёва</Div>
            <Div>Стоимость: 200 р.</Div>
			<Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Avtovskieistorii.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Avtovskieistorii;
