import React, { Component } from 'react';

import { EmojiInput } from '../../src/index';
import ExampleContainer from '../utils/components/ExampleContainer';

export default class EmojiInputExample extends Component {
    constructor() {
        super();

        this.state = {
            text: ''
        };
    }

    handleInput = (event) => {
        this.setState({
            text: event.target.pureInnerText
        });
    };

    render() {
        const { text } = this.state;

        return(
            <ExampleContainer
                headline="EmojiInput"
                id="react-chayns-emoji_input"
            >
                <EmojiInput
                    onInput={this.handleInput}
                    placeholder="Test me!"
                    id="emojiInput_1"
                    value={text}
                />
            </ExampleContainer>
        );
    }
}
