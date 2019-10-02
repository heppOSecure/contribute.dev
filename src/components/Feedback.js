import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'

const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    @media(min-width: ${breakpoints.md}) {
       flex-direction: row;
    }

    .tweet {
        &:not(:last-child) {
            margin-right: 4rem;
        }

        @media(max-width: ${breakpoints.md}) {
            display: flex;
            justify-content: center;

            &:not(:last-child) {
                margin-right: 0
            }
        }
    }
`

const Feedback = () => {
    const twitterOptions = { theme: 'light', cards: 'hidden', dnt: true, conversation: 'none' }
    return (
        <section>
            <div className="row">
                <div className='outline-left'>
                    <h2>Community Feedback</h2>
                    <p>This is how contributors, maintainers and community leaders perceived the one-click experience with Gitpod.</p>
                </div>
                <Tweets>
                    <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1167463499779338243' options={twitterOptions} />
                </Tweets>
                <Tweets>
                    <TweetEmbed className="tweet" id='1176866660461903872' options={twitterOptions} />
                    <TweetEmbed classNamr="tweet" id='1130775701714558982' options={twitterOptions} />
                </Tweets>
            </div>
        </section>
    )
}
export default Feedback