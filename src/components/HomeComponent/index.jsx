import React, { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

import { ReactComponent as UserImage } from '../../assets/user.svg';
import { HomeContainer, HomeFirstParagraph, HomeTitle, HomeSecondParagraph, HomeButton, HomeTextContainer } from './styles';

function HomeComponent() {
    const [name] = useState('Douglas Augusto');
    
    return(
        <HomeContainer>
            <HomeTextContainer>
                <HomeFirstParagraph>Olá, me chamo</HomeFirstParagraph>
                <HomeTitle>
                    <TypewriterComponent
                        options={{
                            strings: [name],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            cursor: '',
                        }}
                    />
                </HomeTitle>
                <HomeSecondParagraph>Desenvolvedor Full Stack com foco em Front-End</HomeSecondParagraph>
                <HomeButton>Conheça meus projetos</HomeButton>
            </HomeTextContainer>
            <UserImage style={{width: '477px'}} />
        </HomeContainer>
    )
}

export default HomeComponent;