import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Fourusatbi = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Четыре усадьбы Петергофской дороги
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Усадьба Сиверса-Остермана (последний шедевр Растрелли, любимое место охоты Екатерины и знаменитая психиатрическая лечебница, где закончил свои дни литературный герой Герман и художник Федотов) – Усадьба Воронцовых (как спасенный шедевр легко испортить, превратив его в храм) – Усадьба Шереметевых (последнее аристократическое гнездо на Петергофской дороге) – Усадьба Александрино (российские превратности судьбы хозяев и классицизм в исполнении классика – Валлен-Деламота). Что такое «Привал» и «Три поросенка». Возвращение на трамвае и чаепитие на Княжевской подстанции. 
            </Div>
			<Div>
                После экскурсии состоится чаепитие в здании Княжевской подстанции
            </Div>
            <Div>Дата: 18.08.2019 (ВС)</Div>
            <Div>Вид экскурсии: пешеходно-трамвайная</Div>
            <Div>Продолжительность: 3 часа </Div>
            <Div>Сбор: 12 часов у входа в ДК «Кировец» (пр. Стачек, 158)</Div>
            <Div>Кондуктор: Сергей Баричев</Div>
            <Div>Стоимость: 500 р.</Div>
			<Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Fourusatbi.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default Fourusatbi;
