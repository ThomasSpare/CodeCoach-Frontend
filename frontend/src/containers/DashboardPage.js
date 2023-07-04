import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);

    if (!isAuthenticated && !loading && user === null)
        return <Navigate to='/login' />;

    return (
        <Layout title= 'Code Coach | Dashboard' content='learn to code, javascript, python'>
        {loading || user === null ? (
        <div class="spinner-grow" role="status">
        <span class="sr-only"></span>
        </div>
        ): (
            <>
            <h1 className='mb-5'>Dashboard</h1>
            <p>User Details</p>
            <ul>
                <li>First Name: {user.first_name}</li>
                <li>Last Name: {user.last_name}</li>
                <li>Email: {user.email}</li>
            </ul>            
            </>
        )}
        </Layout>
    );     
    };

export default DashboardPage;



