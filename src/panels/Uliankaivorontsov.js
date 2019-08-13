import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const osname = platform();

const Uliankaivorontsov = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Ульянка и дача Воронцовых 
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
                Дворянское гнездо Шереметевых, до последних дней сохранявшее завещанный предками уклад. Самая невероятная любовь в русском высшем свете. Церковь Петра Митрополита и шереметевская пожарная команда. Как неожиданно нашли Воронцовский дворец и тут же его потеряли. 
            </Div>
            <Div>Дата: 10.08.2019 (СБ)</Div>
            <Div>Вид экскурсии: пешеходная</Div>
            <Div>Продолжительность: 3 часа </Div>
            <Div>Сбор: в 12 часов, остановка трамвая 36, 41, 54 «Улица Лени Голикова» </Div>
            <Div>Кондуктор: Любовь Старкова</Div>
            <Div>Стоимость: 200 р.</Div>
			<Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
		</Group>
	</Panel>
);

Uliankaivorontsov.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Uliankaivorontsov;
