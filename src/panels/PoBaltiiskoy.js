import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Pobaltiiskoy = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			По Балтийской железной дороге
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Знакомимся за полдня с первой успешной коммерческой железной дорогой в России и Оранэлой. Как Штиглиц подумал и не ошибся с направлением. Балтийский вокзал – настроение Парижа. Путевая информация по пути следования до пл. «Сосновая поляна», далее возвращаемся на трамвае 52 на Княжевскую подстанцию с осмотром. Чаепитие на Княжевской подстанции за счет заведения. ЖД и трамвайные билеты (80 р.) оплачивается самостоятельно. 
            </Div>
			<Div>
                После экскурсии состоится чаепитие в здании Княжевской подстанции
            </Div>
            <Div>Дата: 11.08.2019 (ВС)</Div>
            <Div>Вид экскурсии: трамвайно-железнодорожная</Div>
            <Div>Продолжительность: 4 часа</Div>
            <Div>Сбор: 12:30 подземный вестибюль м. «Балтийская» у панно</Div>
            <Div>Кондуктор: Сергей Баричев</Div>
            <Div>Стоимость: 300 р.</Div>
			<Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Pobaltiiskoy.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Pobaltiiskoy;
