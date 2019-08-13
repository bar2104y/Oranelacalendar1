import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, Link} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';


const osname = platform();

const Avangard = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Архитектурный авангард Нарвской заставы
		</PanelHeader>
		<Group title="О экскурсии">
            <Div>
            Самый яркий и быстро прошедший стиль в отечественной архитектуре. Все виды новых зданий на одной версте Оранэлы: ДК им. Горького, Кировская фабрика-кухня, Тракторная улица, Райсовет, Нарвский профилакторий, бани «Гигант». Возвращение на трамвае и чаепитие в Княжевской подстанции.
            </Div>
            <Div>
                После экскурсии состоится чаепитие в здании Княжевской подстанции
            </Div>
            <Div>Дата: 31.08.2019 (СБ)</Div>
            <Div>Вид экскурсии: пешеходная</Div>
            <Div>Продолжительность: 3 часа</Div>
            <Div>Сбор: в 12 часов у Нарвских ворот (под аркой)</Div>
            <Div>Кондуктор: Любовь Старкова </Div>
            <Div>Стоимость: 500р. </Div>
            <Div before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Div>
            
        </Group>
	</Panel>
);

Avangard.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Avangard;
