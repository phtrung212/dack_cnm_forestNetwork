import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import Header from './components/Header'

const App = ({ history }) => {
    return (
        <div>
            <Header/>
            <ConnectedRouter history={history}>
                { routes }
            </ConnectedRouter>
        </div>

    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App