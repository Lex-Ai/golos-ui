import React from 'react';
import Icon from '../../elements/Icon'
import ReactTooltip from 'react-tooltip'

class Start extends React.Component {
    state = {
        simple: true,
    }

    toggleAnswer = (e, answr) => {
        e.preventDefault()
        this.setState({simple: answr})
    };

    render() {
        let {simple} = this.state
        let simpleAnswer = <p className='landing-start-block-text'>
            <b>{'Golos.id'}</b> — это блог-платформа на <span data-tip='База данных, которая представляет собой непрерывную цепь из блоков и хранится одновременно на множестве серверов.'>блокчейне</span><ReactTooltip type='light' effect="solid" /> GOLOS. Публикуя интересные посты и комментарии, вы можете получить вознаграждения от других пользователей. Участвуйте в ранжировании контента, голосуя "за" или "против" постов.
        </p>

        let difAnswer = <p className='landing-start-block-text'>
            Каждый пользователь, согласно своей доли от общего количества Силы Голоса, из пула вестинга эмиссии токенов блокчейна получает процент на баланс. Используя эти токены, вы имеете возможность отблагодарить авторов понравившегося контента, а они вас.
        </p>

        return (
            <div className='landing-start'>
                <div className='landing-start-block'>
                    <div className='column large-12 medium-12 small-12'>
                        <h2>Децентрализованная блог-платформа</h2>
                    </div>
                    <div className='row'>
                        <div className='column small-12 medium-6 large-6'>
                            <div>
                                <iframe
                                    width="100%"
                                    height="220"
                                    src="https://www.youtube.com/embed/8a0TPACOu2k"
                                    frameBorder="0"
                                    allowFullScreen/>
                            </div>
                        </div>
                        <div className='column small-12 medium-6 large-6'>
                            <p className='landing-start-block-title-text'>Пишите, комментируйте, репостите, участвуйте в конкурсах и получайте <span data-tip='Токены, которыми вознаграждаются посты/комментарии/репосты можно перевести в любую валюту.'>вознаграждения</span>!<ReactTooltip type='light' effect="solid" /></p>
                            <a href="/create_account" className="button">Создать аккаунт</a>
                        </div>
                    </div>
                </div>
                <div className='landing-start-block'>
                    <div className='column large-12 medium-12 small-12'>
                        <h2>Как это работает?</h2>
                        <div className='column large-12 medium-12 small-12'>
                            <hr/>
                        </div>
                        <div className='column large-12 medium-12 small-12'>
                            <div className='row'>
                                <div className='column large-12 medium-12 small-12'>
                                    <h3>
                                        <a
                                            className={simple
                                            ? ''
                                            : 'active'}
                                            href='#'
                                            onClick={(e) => this.toggleAnswer(e, true)}>Простой ответ</a>
                                        {' / '}
                                        <a
                                            className={simple
                                            ? 'active'
                                            : ''}
                                            href='#'
                                            onClick={(e) => this.toggleAnswer(e, false)}>Сложный ответ</a>
                                    </h3>
                                </div>
                                <div className='column large-12 medium-12 small-12'>
                                    {simple
                                        ? simpleAnswer
                                        : difAnswer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='landing-start-block'>
                    <div className='column large-12 medium-12 small-12'>
                        <div className='row'>
                            <div className='column large-3 medium-3 small-6'>
                                <Icon name='team' size='10x'/>
                                <h5>Социальная значимость</h5>
                                <p className='landing-start-block-icon-text'>Наше сообщество ценит новую и полезную информацию, интересные истории, творческий контент</p>
                            </div>
                            <div className='column large-3 medium-3 small-6'>
                                <Icon name='money' size='10x'/>
                                <h5>Выгодно для блогинга</h5>
                                <p className='landing-start-block-icon-text'>Каждый может получить вознаграждения за интересные пост и комментарии, а также за репосты</p>
                            </div>
                            <div className='column large-3 medium-3 small-6'>
                                <Icon name='rocket' size='10x'/>
                                <h5>В интересах каждого</h5>
                                <p className='landing-start-block-icon-text'>Писать можно обо всём на свете —
                                    расскажите о ракетостроении или выложите красочные фотографии с отпуска</p>
                            </div>
                            <div className='column large-3 medium-3 small-6'>
                                    <Icon name='blockchain' size='10x'/>
                                <h5>Инновационная модель</h5>
                                <p className='landing-start-block-icon-text'>Golos.id работает на блокчейне, а
                                    значит информация пользователей принадлежит только им</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='landing-start-block'>
                    <div className='column large-12 medium-12 small-12'>
                        <h2>Зарегистрируйтесь,</h2>
                        <div className='row'>
                            <div className='column large-12 medium-12 small-12'>
                                <p className='landing-start-block-text reg landing-start-block-center'>чтобы
                                    начать делиться своими историями, подписываться на интересных авторов, оценивать
                                    публикации и получать вознаграждения</p>
                            </div>
                            <div className='landing-start-panel left column large-5 medium-5 small-12'>
                                <div className='row'>
                                    <div className='column large-2 medium-2 small-2'>
                                        <h1>1</h1>
                                    </div>
                                    <div className='column large-10 medium-10 small-10'>
                                        <h3 className=''>
                                            Регистрация<br/>
                                            совершенно бесплатна
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className='landing-start-panel right column large-5 medium-5 small-12'>
                                <div className='row'>
                                    <div className='column large-2 medium-2 small-2'>
                                        <h1>2</h1>
                                    </div>
                                    <div className='column large-10 medium-10 small-10'>
                                        <h3 className=''>
                                            Вознаграждения
                                            <br/>с первой публикации
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='landing-start-block-center column large-12 medium-12 small-12'>
                        <a href="/create_account" className="button">Создать аккаунт</a>
                    </div>
                </div>
                <div className='landing-start-block'>
                    <div className='column large-12 medium-12 small-12'>
                        <h2>Остались вопросы?</h2>
                        <div className='column large-12 medium-12 small-12'>
                            <hr/>
                        </div>
                        <div className='row'>
                            <div className='column large-12 medium-12 small-12'>
                                <p className='landing-start-block-text landing-start-block-center'>
                                    У нас есть собственная <a target="_blank" href='https://wiki.golos.id/'>Википедия</a>,
                                    в которой собрана информация о блог-платформе и блокчейне. Кроме того, получить ответы на многие вопросы можно у сообщества в чате <a target="_blank" href='https://t.me/golos_id'>t.me/golos_id</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'start',
    component: Start,
};
