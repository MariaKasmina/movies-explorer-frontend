function Techs () {
    return (
        <section className="section_paddings techs__container">
            <p className="about-project__title">Технологии</p>
            <div className='techs__content-container'>
                <h3 className='techs__content-title'>7 технологий</h3>
                <p className='techs__content-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__techs'>
                    <li className='techs__tech'>HTML</li>
                    <li className='techs__tech'>CSS</li>
                    <li className='techs__tech'>JS</li>
                    <li className='techs__tech'>React</li>
                    <li className='techs__tech'>Git</li>
                    <li className='techs__tech'>Express.js</li>
                    <li className='techs__tech'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;