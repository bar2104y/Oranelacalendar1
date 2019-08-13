import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group,Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Alexandrino = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Александрино
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Превратности судьбы сильных мира сего от Петра I до Николая II. Классика в исполнении классика – Вален-Деламота. Подвиг реставратора Михаила Плотникова. Уникальный парк, сопротивляющийся наступлению строителей. Рубцы войны. 
            </Div>
            <Div>Дата: 17.08.2019 (СБ)</Div>
            <Div>Вид экскурсии: пешеходная</Div>
            <Div>Продолжительность: 3 часа </Div>
            <Div>Сбор: в 12 часов, остановка трамвая 36, 41, 54 «Проспект Маршала Жукова» (у кольца)</Div>
            <Div>Кондуктор: Любовь Старкова</Div>
            <Div>Стоимость: 200 р.</Div>
			<Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Alexandrino.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Alexandrino;
