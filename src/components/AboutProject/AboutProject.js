function AboutProject(){
    return(
        <section className="section_paddings about-project__container">
            <p className="about-project__title">О проекте</p>
            <div className="notes__container">
                <div className="note">
                    <p className="note__title">Дипломный проект включал 5 этапов</p>
                    <p className="note__content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="note">
                    <p className="note__title">На выполнение диплома ушло 5 недель</p>
                    <p className="note__content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='diploma__stages'>
                <p className='diploma__stage diploma__stage-1'>1 неделя</p>
                <p className='diploma__stage diploma__stage-2'>4 недели</p>
            </div>
            <div className='diploma__stages-descriptions diploma__stages'>
                <p className='diploma__stage-description diploma__stage'>Back-end</p>
                <p className='diploma__stage-description diploma__stage'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;