import React from "react";
import {Box, Divider, Icon, Link, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import {WISHLIST} from "views/Main/components/wishlist";
import MistletoeIcon from "/public/mistletoe_1_.svg"

const Text = () => {
    return (
        <Box py={8} px={8}>
            <Typography variant={'body1'}>Дорогой Тайный Санта!</Typography>
            <Typography>Поздравляю тебя с наступающими праздниками. У тебя уже есть новогоднее настроение?
                :)</Typography>
            <Divider/>
            <Typography>Чтобы тебе было проще, напишу немного о себе.</Typography>
            <Typography>Как уже понятно из остальной анкеты - меня зовут Лена, мне 24, живу в Санкт-Петербурге.
                Интерсно, откуда будешь ты? :з</Typography>
            <br/>
            <Typography>Работаю frontend разработчиком. Работу свою люблю, так что непрочь покодить и в нерабочее время,
                как сейчас :) <br/>
                Занимаюсь танцами и йогой, люблю изучать языки, выращивать травы на подоконнике,
                планнинг (и делать все в последний момент), путешествовать, играть в компьютерные игры, рисовать акварелью, кататься на
                велосипеде, выезжать на природу, снимать на пленку, отправлять открытки и посылки, все скандинавское.
                Вдохновляюсь уютными видео на ютубе и книгами, такими хюгге, с красивыми иллюстрациями, рецептами,
                чем-то домашним, в коричневых оттенках. Музыку слушаю разную, но в основном к-поп (тут я по дедам к-поп
                до 2015 если вдруг шаришь хаха), рок, фортепианную, the hatters, ту, под которую можно танцевать.<br/>
            </Typography>
            <Divider sx={{py: theme => theme.spacing(1)}}/>
            <Typography>
                Идеи, что можно положить:
                <List>
                    {WISHLIST.map(wish =>
                        <ListItem>
                            <ListItemIcon>
                                <Icon>
                                    <img src={MistletoeIcon.src} height={20} width={20}/>
                                </Icon>
                            </ListItemIcon>
                            {wish}
                        </ListItem>)
                    }
                </List>
                <Divider/>
                <Typography>
                    Что еще может помочь? Любимые цвета: бордовый, горчичный, темно-зеленый. Не люблю леденцы, жвачку,
                    горький шоколад, зефирб маршмеллоу. <br/>
                    Наверное и все. <br/>
                    Мне обычно очень сложно собирать посылки, так как боюсь промахнуться с подарком, поэтому в этом году
                    решила описать все, что можно, вдруг кому-то также сложно как и мне. <br/>
                </Typography>
            </Typography>
            <Divider sx={{py: theme => theme.spacing(1)}}/>
            <Typography>
                А это тебе немного  <Link href={"/gift"}>для поднятия новогоднего настроения</Link><br/>
                Пока собирала подборку сама вдохновилась на подготовку к новому году.
                Еще раз с наступающим! Желаю тебе всего самого замечательного и вдохновлюяшего! Больше ярких эмоций и впечатлений
            </Typography>
        </Box>
    )
}

export default Text