import { RouterProvider } from 'react-router-dom';
import router from './core/config/router.config';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { API_SERVER_URI } from './core/config/api.config';

export const graphqlClient = new ApolloClient({
    uri: API_SERVER_URI,
    cache: new InMemoryCache(),
});
export const App = () => {
    // TODO: решить какую библиотеку лучше использовать для работы со временем { Moment.js, Globalize.js, date-fns, Day.js }
    return <ApolloProvider client={graphqlClient}>
        <RouterProvider router={router} />
    </ApolloProvider>
};