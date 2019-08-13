import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Posledamoraneli = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			По следам Оранэлы + Стрельна
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Нарвские ворота – начало Оранэлы. Коротко о Петергофской дороге. Сакральное кольцо Петербурга. Как менялась площадь Стачек вместе с трамвайным движением. Тракторная улица – место Нарвского конного парка. Оранэла и архитектурный авангард, трамвай и сталинский ампир. Улица Трефолева и верстовой столб. Поездка на трамвае, что общего с поездкой на Оранэле. Комсомольская площадь и загадка ее формы. Выходим в Автово и пешеходный переход по Кронштадтской эстакаде (при хорошей погоде). Знакомство с Княжевской подстанцией и чаепитие.
            </Div>
            <Div>
            От остановки «Трамвайный проспект» отправляемся по Стрельнинской линии до кольца 36-го. Кикенка – роковой рубеж Оранэлы. Почтовая станция, на которой один раз был Пушкин, хотя никуда не ехал. Река Стрелка. «Старое кольцо» и Львовский дворец, где «трепетала» Стрельна. «Огненный князь». Знакомство с сестрой «Княжевской подстанции», пережившей пластическую операцию. Далее для желающих – обед (не входит в стоимость) и возвращение по Балтийской железной дороге. Быстрый вариант возвращения к метро – на маршрутке (тем, кому позволяет вера) или трамвае. 
            </Div>
			<Div>
                После экскурсии состоится чаепитие в здании Княжевской подстанции
            </Div>
            <Div>Дата: 24.08.2019 (СБ)</Div>
            <Div>Вид экскурсии: пешеходно-трамвайная</Div>
            <Div>Продолжительность: 5 часов (с перерывом на чаепитие) </Div>
            <Div>Сбор: 12 часов у Нарвских ворот( под аркой)</Div>
            <Div>Кондуктор: Сергей Баричев</Div>
            <Div>Стоимость: 600р.</Div>
            <Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Posledamoraneli.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Posledamoraneli;
