import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group,Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Unknownmetro = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Неизвестное метро: от Технологического института до Автово
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Как первая очередь ленинградского метро в точности совпала с маршрутом Оранэлы и унаследовавшего ее трамвая №28. Самое глубокое, самое технологичное и самое стильное метро в СССР. Секреты станций первой очереди от «Технологического института» до «Автово» (знакомство с «Балтийской», «Нарвской», «Кировским заводом», «Автово»). Чаепитие на Княжевской подстанции.             
            </Div>
            <Div>
                После экскурсии состоится чаепитие в здании Княжевской подстанции
            </Div>
            <Div>Дата: 25.08.2019 (ВС)</Div>
            <Div>Вид экскурсии: подземно-трамвайнаяя</Div>
            <Div>Продолжительность: 1.5 часа</Div>
            <Div>Сбор: в 12 часов, м. «Технологический институт» первый вагон в сторону «Автово»</Div>
            <Div>Кондуктор: Сергей Баричев</Div>
            <Div>Стоимость: 500р.</Div>
            <Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Unknownmetro.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Unknownmetro;
