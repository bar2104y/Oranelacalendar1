import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, PanelHeader, List, Cell, CellButton, Link} from '@vkontakte/vkui';

import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon24Repost from '@vkontakte/icons/dist/24/repost';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const Home = ({ id, go, publish, joinToGroup }) => (
	<Panel id={id} >
		<PanelHeader>
              Экскурсии
        </PanelHeader>

		<Group title="Медиа">
			<CellButton before={<Icon24Repost />} onClick={publish}>Рассказать друзьям</CellButton>
			<CellButton before={<Icon28AddOutline />} onClick={joinToGroup}>Вступить в группу</CellButton>
			<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
		</Group>
		
		
		<Group title="Ульянка и дача Воронцовых">
		<List>
				<Cell>Дата: 10.08.2019 (СБ)</Cell>
				<Cell>Стоимость: 200 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="uliankaivorontsov">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="По Балтийской железной дороге">
			<List>
				<Cell>Дата: 11.08.2019 (ВС)</Cell>
				<Cell>Стоимость: 300 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="pobaltiiskoy">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="Автовcкие истории">
			<List>
				<Cell>Дата: 13.08.2019 (ВТ)</Cell>
				<Cell>Стоимость: 200 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="avtovskieistorii">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="Александрино">
			<List>
				<Cell>Дата: 17.08.2019 (СБ)</Cell>
				<Cell>Стоимость: 200 р.</Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="alexandrino">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="Четыре усадьбы Петергофской дороги">
			<List>
				<Cell>Дата: 18.08.2019 (ВС)</Cell>
				<Cell>Стоимость: 300 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="fourusatbi">
					Подробнее
				</Button>
			</List>
		</Group>
		
		<Group title="По следам Оранэлы + Стрельна">
			<List>
				<Cell>Дата: 24.08.2019 (СБ)</Cell>
				<Cell>Стоимость: 250 + 250 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="posledamoraneli">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="Неизвестное метро: от Технологического института до Автово">
			<List>
				<Cell>Дата: 25.08.2019 (ВС)</Cell>
				<Cell>Стоимость: (уточняется)</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="unknownsubway">
					Подробнее
				</Button>
			</List>
		</Group>

		<Group title="Архитектурный авангард Нарвской заставы">
			<List>
				<Cell>Дата: 31.08.2019 (СБ)</Cell>
				<Cell>Стоимость: 300 р.</Cell>
				<Cell before={< Icon24FavoriteOutline/>}><Link href="https://vk.com/write-183953903">Записаться на экскурсию</Link></Cell>
				<Button size="xl" level="secondary" onClick={go} data-to="avangard">
					Подробнее
				</Button>
			</List>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
